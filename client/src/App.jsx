/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import GlobalStyle from './styles/globalStyles';
import ProductList from './components/ProductList.jsx';
import Product from './components/Product.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { mainProductId } = props;
    this.state = {
      mainProductId,
      relatedProducts: [],
    };
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    const { mainProductId } = this.state;
    axios.get(`/api/products/similar/id=${mainProductId}`)
      .then((res) => {
        this.setState({
          relatedProducts: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const { mainProductId, relatedProducts } = this.state;
    return (
      <div>
        <GlobalStyle />
        <ProductList
          Product={Product}
          mainProductId={mainProductId}
          relatedProducts={relatedProducts}
        />
      </div>
    );
  }
}

export default App;
