import { ReactNode, ReactFragment } from 'react';

export type Children = JSX.Element | JSX.Element[] | ReactNode | ReactFragment | ReactNode[] | ReactFragment[];

export interface CookieProvider {
  children?: Children;
}

export interface InsertedCookie<T> {
  key: string;
  value: string;
  options?: T;
}

export interface Options {
  path?: string;
  days?: number;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  priority?: 'Low' | 'Medium' | 'High';
}

export interface HookMonitorProps<T> {
  intervalTime?: number;
  cookiesToMonitor?: string[];
  options?: T;
}

export type GenericObject = Record<string, unknown>;

export type Cookie = Record<string, string | number>;

export interface ContextProps<T, U> {
  cookies: T;
  addCookie: (data: U) => string | undefined;
  deleteCookie: (name: string) => void;
  findCookie: (name: string) => {
    key: string;
    value: string | null | undefined;
  };
  checkIfCookieExists: (name: string) => boolean;
  getCookies: () => T;
  eraseAllCookies: () => void;
}
