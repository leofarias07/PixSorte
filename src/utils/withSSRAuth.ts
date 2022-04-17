import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';

export function withSSAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (!cookies['pixsorte.token']) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
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
