/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import GlobalStyle, { AppWrapper } from './globalStyles';
import ProductList from './components/ProductList/ProductList.jsx';
import Product from './components/Product/Product.jsx';
import AddBasket from './components/AddBasket/AddBasket.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { mainProductId } = props;
    this.state = {
      mainProductId,
      relatedDescriptions: [],
      relatedCollection: [],
    };

    this.setMainProductId = this.setMainProductId.bind(this);
  }

  componentDidMount() {
    this.getRelatedDescription();
    this.getRelatedCollection();
  }

  setMainProductId(id) {
    console.log('send id=', id);
    this.setState({
      mainProductId: id,
    });
    this.getRelatedDescription();
    this.getRelatedCollection();
  }

  getRelatedCollection() {
    const { mainProductId } = this.state;
    axios.get(`/api/product_scroller/products/collection/id=${mainProductId}`)
      .then((res) => {
        this.setState({
          relatedCollection: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  getRelatedDescription() {
    const { mainProductId } = this.state;
    axios.get(`/api/product_scroller/products/similar/id=${mainProductId}`)
      .then((res) => {
        this.setState({
          relatedDescriptions: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const { mainProductId, relatedDescriptions, relatedCollection } = this.state;

    return (
      <AppWrapper>
        <GlobalStyle />
        <ProductList
          Product={Product}
          AddBasket={AddBasket}
          listTitle="Similar products"
          mainProductId={mainProductId}
          relatedProducts={relatedDescriptions}
          setMainProductId={this.setMainProductId}
          style
        />
        <ProductList
          Product={Product}
          AddBasket={AddBasket}
          listTitle={`More in the ${relatedCollection[0] ? relatedCollection[0].collection_name : ''} collection`}
          mainProductId={mainProductId}
          relatedProducts={relatedCollection}
          setMainProductId={this.setMainProductId}
        />
      </AppWrapper>
    );
  }
}

export default App;
