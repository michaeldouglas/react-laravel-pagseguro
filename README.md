# React Laravel Pagseguro

O react-laravel-pagseguro consome a API do PagSeguro e prove uma forma
simples de utilizar o checkout transparente com React.

<p align="center"><img src="https://atitude-files.s3-sa-east-1.amazonaws.com/LogoReactLaravelPagSeguro.png" width="500"></p>

> Laravel React PagSeguro

[![NPM](https://img.shields.io/npm/v/react-laravel-pagseguro.svg)](https://www.npmjs.com/package/react-laravel-pagseguro) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-laravel-pagseguro
```

## Usage

```jsx
import React, { Fragment } from 'react';

import { LaravelPagSeguro, preloadScript } from 'react-laravel-pagseguro';

const App = () => {
  return (
    <Fragment>
      <LaravelPagSeguro
        sandbox
        credentials={{
          email: 'SEUEMAIL',
          token: 'SEUTOKEN'
        }}
      />
    </Fragment>
  );
};

export default preloadScript(App);
```

## License

MIT © [michaeldouglas](https://github.com/michaeldouglas)
