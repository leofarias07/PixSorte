/* eslint-disable import/no-cycle */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
// eslint-disable-next-line import/no-cycle
import { toast } from 'react-toastify';
import { api } from '../services/apiClient';

type User = {
  email: string;
  permissions: string[];
  roles: string[];
  userName: string;
  enterpriseName: string;
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

type LoginProps = {
  data: {
    token: string;
    refreshToken: string;
    permissions: string[];
    roles: string[];
    userUuid: string;
    userEmail: string;
    userName: string;
    enterpriseName: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'pixsorte.token');
  destroyCookie(undefined, 'pixsorte.refreshToken');

  localStorage.removeItem('user_uuid');

  Router.push('/');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'pixsorte.token': token } = parseCookies();

    if (token) {
      api
        .get('/users/me')
        .then(response => {
          const { email, permissions, roles, userName, enterpriseName }: User =
            response.data;
          setUser({ email, permissions, roles, userName, enterpriseName });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response: LoginProps = await api.post('users/login', {
        email,
        password
      });

      const {
        token,
        refreshToken,
        permissions,
        roles,
        userUuid,
        userName,
        enterpriseName
      } = response.data;

      localStorage.setItem('user_uuid', userUuid);

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
        roles,
        userName,
        enterpriseName
      });

      // eslint-disable-next-line @typescript-eslint/dot-notation
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      Router.push('dashboard');
      toast.success('Logado com Sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored'
      });
    } catch (err) {
      toast.error('Usuario ou senha invalidos!', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      });
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
