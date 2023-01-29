import React from 'react';

import { useMonitorCookies } from '../../hooks/useMonitorCookies';
import { CookieProvider } from '../../types';

import { CookieContext } from './cookie-context';

const CookieProvider = ({ children }: CookieProvider) => {
  const { ...rest } = useMonitorCookies();
  return <CookieContext.Provider value={{ ...rest }}>{children}</CookieContext.Provider>;
};

export { CookieProvider };
