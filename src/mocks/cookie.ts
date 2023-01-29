const mockCookie = () =>
  Object.defineProperty(document, 'cookie', {
    writable: true,
    value: 'status=active',
  });

const cookiePairs = ['status=active'];
const cookieObject = { status: 'active' };
const findedCookieObject = { key: 'status', value: 'active' };
const cookieName = 'status';

export { mockCookie, cookiePairs, cookieObject, cookieName, findedCookieObject };
