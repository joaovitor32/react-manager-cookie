const COOKIE_PATTERN = /^(?:\s*\w+\s*=\s*[^;]*;|\s*[^;]*;)+$/;

export const validateCookie = (cookie: string) => COOKIE_PATTERN.test(cookie);
