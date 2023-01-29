import { InsertedCookie, Options } from '../../types';

import { addingDaysToDate } from '../time';

const hasDocumentCookie = () => typeof document === 'object' && typeof document.cookie === 'string';

const getCookiePairs = () => (hasDocumentCookie() ? document?.cookie?.split(';') : []);

const serializeCookie = ({ key, value, options }: InsertedCookie<Options>) => {
  let newCookie = key + '=' + value;

  const utmParsedDate = addingDaysToDate(options?.days || 0);

  newCookie += `; Expires=${utmParsedDate}`;
  newCookie += `; Path=${options?.path || '/'}`;
  newCookie += `; Max-Age=${options?.maxAge || 0}`;
  newCookie += options?.domain ? `; domain=${options?.domain}` : '';
  newCookie += `; SameSite=${options?.sameSite || 'None'} `;
  newCookie += options?.secure ? `; Secure` : '';
  newCookie += options?.httpOnly ? `; HttpOnly` : '';
  newCookie += `; Priority=${options?.priority || 'Low'}`;
  newCookie += ';';

  return newCookie;
};
export { getCookiePairs, hasDocumentCookie, serializeCookie };
