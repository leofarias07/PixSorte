/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
// eslint-disable-next-line import/no-cycle
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:3333/api',
=======
    baseURL: 'http://localhost:3333/api/',
>>>>>>> 70831854103562da4f5165dc0938657179b27761
    headers: {
      Authorization: `Bearer ${cookies['pixsorte.token']}`
    }
  });

  api.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
          cookies = parseCookies(ctx);

          const { 'pixsorte.refreshToken': refreshToken } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;
            api
<<<<<<< HEAD
              .post('users/me/refresh', {
=======
              .post('users/refresh', {
>>>>>>> 70831854103562da4f5165dc0938657179b27761
                refreshToken
              })
              .then(response => {
                const { token } = response.data;
                setCookie(ctx, 'pixsorte.token', token, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: '/'
                });
                setCookie(
                  ctx,
                  'pixsorte.refreshToken',
                  response.data.refreshToken,
                  {
                    maxAge: 60 * 60 * 24 * 30,
                    path: '/'
                  }
                );
                api.defaults.headers['Authorization'] = `Bearer ${token}`;
                failedRequestsQueue.forEach(request =>
                  request.OnSuccess(token)
                );
                failedRequestsQueue = [];
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err));
                failedRequestsQueue = [];
                if (process.browser) {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              OnSuccess: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer ${token}`;
                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              }
            });
          });
        }
        if (process.browser) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
}
