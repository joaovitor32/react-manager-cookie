import React from 'react';

import { renderHook, act } from '@testing-library/react-hooks';

import { mockCookie, cookieObject, cookieName, findedCookieObject } from '../../mocks/cookie';

import * as hooks from '.';

describe('useCookie test', () => {
  beforeEach(() => {
    mockCookie();
  });
  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });
  it('Should get cookies, --success case', () => {
    const { useCookies } = hooks;

    let cookie;
    const { result } = renderHook(() => useCookies());

    act(() => {
      cookie = result.current.getCookies();
    });

    expect(cookie).toMatchObject(cookieObject);
    expect(typeof result.current.getCookies).toBe('function');
  });
  it('Should find specific cookie, --success case', () => {
    const { useCookies } = hooks;

    let cookie;
    const { result } = renderHook(() => useCookies());

    act(() => {
      cookie = result.current.findCookie(cookieName);
    });

    expect(cookie).toMatchObject(findedCookieObject);
    expect(typeof result.current.findCookie).toBe('function');
  });

  // how to check if specific function of hook was called? - seems tricky
  it('Should erase all cookies, --success case', () => {
    let spy;

    const { result } = renderHook(() => {
      spy = jest.spyOn(hooks, 'useCookies').mockReturnValue({
        getCookies: jest.fn(),
        findCookie: hooks.useCookies().findCookie,
        addCookie: jest.fn(),
        checkIfCookieExists: hooks.useCookies().checkIfCookieExists,
        eraseAllCookies: hooks.useCookies().eraseAllCookies,
        deleteCookie: jest.fn() as (name: string) => void,
      });

      return hooks.useCookies();
    });

    act(() => result.current.eraseAllCookies());

    expect(spy).toHaveBeenCalled();
    expect(typeof result.current.eraseAllCookies).toBe('function');
  });

  it('Should add and find specific cookie, --success case', () => {
    let cookie;
    const { useCookies } = hooks;

    const { result } = renderHook(() => useCookies());

    act(() => {
      result.current.addCookie({ key: 'teste', value: 'teste1', options: { days: 11, maxAge: 846000, secure: true } });
      cookie = result.current.findCookie('teste');
    });

    expect(cookie).toMatchObject({ key: 'teste', value: 'teste1' });
    expect(typeof result.current.addCookie).toBe('function');
  });
  it('Should check if cookie exists, --success case', () => {
    let cookieExists;
    const { useCookies } = hooks;

    const { result } = renderHook(() => useCookies());

    act(() => {
      cookieExists = result.current.checkIfCookieExists('status');
    });

    expect(cookieExists).toBeTruthy();
    expect(typeof result.current.checkIfCookieExists).toBe('function');
  });
});
