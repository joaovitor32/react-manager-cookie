# react-cookie

### How to install

```bash
npm i --legacy-peer-deps
```

### Tests
#### To run tests you can use the following command:

```
$ npm run test
```

#### Temporário
I - Testar spec específico: npm test -- useMonitorCookies.spec.tsx
II - Eu preciso de uma função específica no hook ou consigo sobrescrever com addCookie


```tsx
/* eslint-disable no-restricted-syntax */
import { useEffect } from 'react';

import { useCookies } from './hooks/useCookies';
import { useMonitorCookies } from './hooks/useMonitorCookies';

function App() {
  const { addCookie } = useCookies();

  //addCookie({ key: 'teste', value: 'teste1', options: { days: 11, maxAge: 846000, secure: true } });

  // Retornar cookies assim na prática tá meio ruim
  const { cookies } = useMonitorCookies({ intervalTime: 500, cookiesToMonitor: ['teste'] });

  console.log(cookies);

  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```