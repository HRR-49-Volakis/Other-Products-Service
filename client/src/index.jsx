/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import ProductList from './components/ProductList.jsx';
import Product from './components/Product.jsx';

App.style

const mainProduct = '44';
ReactDOM.render(
  <App
    ProductList={ProductList}
    Product={Product}
    mainProductId={mainProduct}

  />,
  document.getElementById('app'),
);
