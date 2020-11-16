import React from 'react';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { Product, relatedProducts } = this.props;
    return (
      <div className="productsList">
        {relatedProducts.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            productName={p.product_name}
            imageOneUrl={p.image_one_url}
            imageTwoUrl={p.image_two_url}
            pageUrl={p.page_url}
            price={p.price}
            hearted={p.hearted}
            briefDescription={p.brief_description}
            collectionName={p.collection_name}
          />
        ))}
      </div>
    );
  }
}
