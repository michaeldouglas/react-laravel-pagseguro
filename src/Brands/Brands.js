import React from 'react';
import PropTypes from 'prop-types';

const Brands = ({ pagseguro }) => {
  pagseguro.getBrand({
    cardBin: 5234211993387414,
    success: function (res) {
      console.log(res);
    },
    error: function (error) {
      console.log(error, 'Error');
    }
  });

  return <div className='brands'>dsadasd</div>;
};

Brands.propTypes = {
  pagseguro: PropTypes.any
};

export default Brands;
