import { createContext } from 'react';

import { ContextProps, Cookie, InsertedCookie, Options } from '../../types';

const CookieContext = createContext<ContextProps<Cookie, InsertedCookie<Options>>>(
  {} as ContextProps<Cookie, InsertedCookie<Options>>
);

export { CookieContext };
