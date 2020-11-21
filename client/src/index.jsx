/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import ProductList from './components/ProductList.jsx';
// import Product from './components/Product.jsx';

const mainProduct = '55';
ReactDOM.render(
  <App
    mainProductId={mainProduct}
  />,
  document.getElementById('service1'),
);
