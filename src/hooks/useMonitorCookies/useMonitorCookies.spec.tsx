import React from 'react';

import { renderHook, act } from '@testing-library/react-hooks';

import { mockCookie, cookieName } from '../../mocks/cookie';

import { useMonitorCookies } from '.';

describe('useMonitorCookies test', () => {
  beforeEach(() => {
    mockCookie();
  });
  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });
  it('Should get cookie update, --success case', async () => {
    const { result, waitFor } = renderHook(() =>
      useMonitorCookies({ intervalTime: 1000, cookiesToMonitor: [cookieName] })
    );

    act(() => {
      result.current.addCookie({
        key: 'status',
        value: 'teste',
        options: { days: 11, maxAge: 846000, secure: true },
      });
    });

    await waitFor(
      () => {
        expect(result.current.cookies).toMatchObject({ [cookieName]: 'teste' });
      },
      { timeout: 2000 }
    );
  });
});
