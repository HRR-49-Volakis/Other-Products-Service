import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    const {
      imageOneUrl,
    } = props;

    this.state = {
      shownImage: imageOneUrl,
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    let avgRatings;
    let countRatings;
    this.getRatingAvg()
      .then(({ data }) => {
        avgRatings = `${data[0].average_stars}`;
        return this.getRatingCount();
      })
      .then(({ data }) => {
        countRatings = data[0].times_rated;
        this.setState({
          avgRatings,
          countRatings,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleMouseOver() {
    const {
      imageTwoUrl,
    } = this.props;
    this.setState({
      shownImage: imageTwoUrl,
    });
  }

  handleMouseOut() {
    const {
      imageOneUrl,
    } = this.props;
    this.setState({
      shownImage: imageOneUrl,
    });
  }

  getRatingAvg() {
    const { id } = this.props;
    return axios.get(`/api/ratings/avg/product_id=${id}`);
  }

  getRatingCount() {
    const { id } = this.props;
    return axios.get(`/api/ratings/count/product_id=${id}`);
  }

  render() {
    const {
      id,
      productName,
      imageOneUrl,
      imageTwoUrl,
      pageUrl,
      price,
      hearted,
      briefDescription,
      collectionName,
    } = this.props;
    const {
      avgRatings,
      countRatings,
      shownImage,
    } = this.state;
    return (
      <div
        onMouseOver={this.handleMouseOver}
        onFocus={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onBlur={this.handleMouseOut}
        className="product"
      >
        <img src={shownImage} alt="img" />
        <div className="product-title">{productName}</div>
        <div className="product-description">{briefDescription}</div>
        <div className="product-price">{`$${price}`}</div>
        <div className="product-avg-rating">{`avg stars ${avgRatings}`}</div>
        <div className="product-count-rating">{`times rated (${countRatings})`}</div>
      </div>
    );
  }
}
