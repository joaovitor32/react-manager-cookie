import React from 'react';

import { addingDaysToDate } from '.';

describe('Time util test', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2020, 9, 1, 7));
  });
  it('addingDaysToDate (), --success case', () => {
    expect(addingDaysToDate(0)).toBe('Thu, 01 Oct 2020 10:00:00 GMT');
  });
});
