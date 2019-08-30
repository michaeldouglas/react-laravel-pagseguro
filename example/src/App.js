import React, { Fragment } from 'react';

import { LaravelPagSeguro, preloadScript } from 'react-laravel-pagseguro';

const App = () => {
  return (
    <Fragment>
      <LaravelPagSeguro
        sandbox
        credentials={{
          email: 'michaeldouglas010790@gmail.com',
          token: '80745009AAC04FCB80D8B73CAA87B9B8'
        }}
      />
    </Fragment>
  );
};

export default preloadScript(App);
