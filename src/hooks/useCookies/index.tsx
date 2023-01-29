import { useCallback } from 'react';

import { Cookie, InsertedCookie } from '../../types';
import { Options } from '../../types';
import { getCookiePairs, serializeCookie } from '../../utils/cookie';

import { validateCookie } from '../../validators/cookies';

const useCookies = () => {
  const getCookies = useCallback(() => {
    const pairs = getCookiePairs();

    if (pairs.length === 0) return {};

    const cookies = pairs.reduce((acc: Cookie, current: string) => {
      const pair = current.split('=');

      const [key, ...rest] = pair;
      const value = rest.join('=');

      return { ...acc, [key.trim()]: value };
    }, {} as Cookie);

    return cookies;
  }, []);

  const addCookie = useCallback(({ key, value, options }: InsertedCookie<Options>) => {
    const serializedCookie = serializeCookie({ key, value, options });

    if (validateCookie(serializedCookie)) {
      document.cookie = serializedCookie;
      return serializedCookie;
    }

    return;
  }, []);

  const findCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`) || [''];

    return { key: name, value: parts.length == 2 ? parts?.pop()?.split(';').shift() : null };
  };

  const checkIfCookieExists = (name: string) => document.cookie.indexOf(`${name}=`) >= 0;

  const deleteCookie = (name: string) => {
    const cookie = findCookie(name);

    if (cookie) {
      document.cookie = cookie.key + '=; Max-Age=0';
    }
  };

  const eraseAllCookies = useCallback(() => {
    const pairs = getCookiePairs();
    pairs.forEach((pair) => deleteCookie(pair.split('=')[0]));
  }, []);

  return { getCookies, findCookie, addCookie, deleteCookie, checkIfCookieExists, eraseAllCookies };
};

export { useCookies };
