# react-manager-cookie

### How to install

```bash
npm i react-manager-cookie
```
#### useCookies - Hook to manage cookies

| Function Name  | Description | Prop |
| ------- | ---- | -------------- |
| **`addCookie`**   |  Function to add cookie | key:string, name:string, options [Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
| getCookies | Function that returns all cookies as object |
| findCookie | Function to find specific cookie by name | name:string
| checkIfCookieExists | Function that returns a boolean if cookie exists | name:string
| deleteCookie | Function to delete cookie by name | name:string
| eraseAllCookies | Function that delete all cookies | name:string

###### Usage


```tsx
import { useCookies } from 'react-manager-cookie';

function Content() {
  const { addCookie, getCookies } = useCookies();

  addCookie({ key: 'teste', value: 'teste1', options: { days: 11, maxAge: 846000, secure: true } });

  return (
    <div>
      <p>{JSON.stringify(getCookies())}</p>
    </div>
  );
}

export default Content;
```

#### useMonitorCookies - hook to manage and monitor cookies
This hooks inherits useCookies functions but has capability to monitor cookies

| Function Name  | Description | Prop |
| ------- | ---- | -------------- |
| cookies | Function that returns all cookies as object |

##### Usage

```tsx
import { useMonitorCookies } from 'react-manager-cookie';

function Content() {
  
  const { cookies } = useMonitorCookies({ intervalTime: 500, cookiesToMonitor: ['teste'] });

  return (
    <div>
      <p>{JSON.stringify(cookies)}</p>
    </div>
  );

}

export default Content;
```
#### Context
##### Usage

```tsx
import React from 'react';

import { CookieProvider } from 'react-manager-cookie';

import Content from './Content';

const Main = () => {
  return (
    <CookieProvider>
      <Content />
    </CookieProvider>
  );
};

export default Main;

```

```tsx
import { useContext } from 'react';
import { CookieContext } from 'react-manager-cookie';

const Content = () => {
  const { getCookies } = useContext(CookieContext);
  return <p>{JSON.stringify(getCookies())}</p>;
};

export default Content;

```

### Tests
#### To run tests you can use the following command:

```
$ npm run test
```
