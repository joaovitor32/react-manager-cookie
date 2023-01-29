import React from 'react';

import { validateCookie } from '.';

describe('validator test', () => {
  it('validateCookie(), --fail case', () => {
    expect(validateCookie('non-valid-cookie')).toBeFalsy();
  });
  it('validateCookie(), --success case', () => {
    expect(validateCookie('cookie=cookie;')).toBeTruthy();
  });
});
