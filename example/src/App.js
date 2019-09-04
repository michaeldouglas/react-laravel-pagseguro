import React, { Fragment } from 'react';

import './index.css';

import {
  LaravelPagSeguro,
  Brands,
  PaymentMethods,
  preloadScript
} from 'react-laravel-pagseguro';

const App = () => {
  return (
    <Fragment>
      <LaravelPagSeguro
        sandbox
        credentials={{
          email: 'michaeldouglas010790@gmail.com',
          token: '80745009AAC04FCB80D8B73CAA87B9B8'
        }}
      >
        <Brands />
        <PaymentMethods />
      </LaravelPagSeguro>
    </Fragment>
  );
};

export default preloadScript(App);
