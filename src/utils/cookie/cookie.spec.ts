import React from 'react';

import { mockCookie, cookiePairs } from '../../mocks/cookie';

import { getCookiePairs, hasDocumentCookie, serializeCookie } from '.';

describe('Cookie util test', () => {
  beforeAll(() => {
    mockCookie();
  });
  it('hasDocumentCookie(), --success case', () => {
    expect(hasDocumentCookie()).toBeTruthy();
  });
  it('getCookiePairs(), --success case', () => {
    expect(getCookiePairs()).toEqual(cookiePairs);
  });
  it('serializeCookie(), --success case', () => {
    const newCookie = serializeCookie({ key: 'cookie', value: 'cookie' }).split(';')[0];
    expect(newCookie).toBe('cookie=cookie');
  });
});
