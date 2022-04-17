import { createContext, ReactNode, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
// eslint-disable-next-line import/no-cycle
import { api } from '../services/apiClient';

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'pixsorte.token');
  destroyCookie(undefined, 'pixsorte.refreshToken');

  Router.push('/');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'pixsorte.token': token } = parseCookies();

    if (token) {
      api
        .get('/me')
        .then(response => {
          const { email, permissions, roles } = response.data;
          setUser({ email, permissions, roles });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password
      });

      const { token, refreshToken, permissions, roles } = response.data;
      setCookie(undefined, 'pixsorte.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      setCookie(undefined, 'pixsorte.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      setUser({
        email,
        permissions,
        roles
      });

      // eslint-disable-next-line @typescript-eslint/dot-notation
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      Router.push('dashboard');
    } catch (err) {
      alert('Usuario ou senha invalidos');
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
