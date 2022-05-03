/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import decode from 'jwt-decode';
import { ValidateUserPermissions } from './validateUserPermissions';

type WithSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
};
export function withSSAuth<P>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions
): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies['pixsorte.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    }
    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token);
      const { permissions, roles } = options;
      const userHasValidPremissions = ValidateUserPermissions({
        user,
        permissions,
        roles
      });
      if (!userHasValidPremissions) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false
          }
        };
      }
    }
    try {
      return await fn(ctx);
    } catch (err) {
      destroyCookie(ctx, 'pixsorte.token');
      destroyCookie(ctx, 'pixsorte.refreshToken');

      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    }
  };
}
