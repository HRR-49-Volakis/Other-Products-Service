/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const mainProduct = '33';
ReactDOM.render(
  <App
    mainProductId={mainProduct}
  />,
  document.getElementById('service1'),
);
