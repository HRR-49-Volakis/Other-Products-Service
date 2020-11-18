/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

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
    const { Product, ProductList } = this.props;
    const { mainProductId, relatedProducts } = this.state;
    return (
      <ProductList
        Product={Product}
        mainProductId={mainProductId}
        relatedProducts={relatedProducts}
      />
    );
  }
}

export default App;
