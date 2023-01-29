import React from 'react';

import { parseObjectToString, compareObjects } from '.';

describe('Objects util test', () => {
  it('parseObjectToString(), --success case', () => {
    expect(parseObjectToString({ key: 'a' })).toBe('key,a');
  });

  it('compareObjects(), --success case', () => {
    const obj = { key: 'a' };
    expect(compareObjects(obj, obj)).toBeTruthy();
  });
  it('compareObjects(), --fail case', () => {
    const obj1 = { key: 'a' };
    const obj2 = { key: 'b' };
    expect(compareObjects(obj1, obj2)).toBeFalsy();
  });
});
