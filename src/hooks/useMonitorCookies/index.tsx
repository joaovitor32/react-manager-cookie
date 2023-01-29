import { useRef, useMemo, useState } from 'react';

import { HookMonitorProps } from '../../types';
import { Cookie } from '../../types';

import { compareObjects } from '../../utils/objects';

import { useCookies } from '../useCookies';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

const useMonitorCookies = (
  { intervalTime, cookiesToMonitor }: HookMonitorProps<never> = {
    intervalTime: 1000,
    cookiesToMonitor: [''],
  }
) => {
  const { findCookie, getCookies, ...rest } = useCookies();

  const [cookies, setCookies] = useState<Cookie>(getCookies());
  const cookiesRef = useRef({ cookies: getCookies() });

  const memoizedCookiesToMonitor = useMemo(() => {
    const cookiesKeys = Object.keys(cookiesRef.current.cookies);
    return cookiesKeys.filter((key) => cookiesToMonitor?.includes(key));
  }, [cookiesToMonitor, JSON.stringify(cookiesRef.current.cookies)]);

  useIsomorphicLayoutEffect(() => {
    if (memoizedCookiesToMonitor.length === 0) return;

    const interval = setInterval(() => {
      const newCookies = memoizedCookiesToMonitor.map((key) => findCookie(key));
      const newCookiesObj = newCookies.reduce((accum, { key, value }) => ({ ...accum, [key]: value }), {});
      const mergedCookies = { ...cookiesRef.current.cookies, ...newCookiesObj };

      if (compareObjects(mergedCookies, cookiesRef.current.cookies)) return;
      cookiesRef.current.cookies = mergedCookies;
      setCookies(cookiesRef.current.cookies);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, JSON.stringify(cookiesRef.current.cookies)]);

  return { cookies, findCookie, getCookies, ...rest };
};

export { useMonitorCookies };
