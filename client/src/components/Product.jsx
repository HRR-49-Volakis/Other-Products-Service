import React from 'react';
import axios from 'axios';
import styles from '../style.css';

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
    this.getStyledRatings = this.getStyledRatings.bind(this);
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

  getStyledRatings() {
    const { avgRatings } = this.state;
    if (!avgRatings) return [];

    const filledStar = <svg width="100%" viewBox="0 0 24 24" className="filled-star"><path d="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z" /></svg>;
    const emptyStar = <svg width="100%" viewBox="0 0 24 24" className="empty-star"><path d="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z" /></svg>;
    const halfStar = (
      <svg width="100%" viewBox="0 0 24 24" className="filled-star">
        <path d="M17.1986 20L11.9999 17.7091V4L14.8592 8.9091L20.4116 10.1115L16.6264 14.3478L17.1986 20Z" fill="#DFDFDF" />
        <path d="M6.80136 20L12.0001 17.7091V4L9.14078 8.9091L3.58838 10.1115L7.37364 14.3478L6.80136 20Z" />
      </svg>
    );

    const stars = Array(Math.floor(avgRatings)).fill(filledStar);
    if (avgRatings % 1 > 0.25 && avgRatings % 1 < 0.75) {
      stars.push(halfStar);
      return stars.concat(Array(4 - Math.floor(avgRatings)).fill(emptyStar));
    }
    return stars.concat(Array(5 - Math.floor(avgRatings)).fill(emptyStar));
  }

  render() {
    const {
      // id,
      productName,
      // imageOneUrl,
      // imageTwoUrl,
      pageUrl,
      price,
      // hearted,
      briefDescription,
      // collectionName,
    } = this.props;
    const {
      countRatings,
      shownImage,
    } = this.state;

    return (
      <a href={pageUrl}>
        <div
          onMouseOver={this.handleMouseOver}
          onFocus={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
          className="product"
        >
          <img src={shownImage} alt="product" />
          <div className={styles.producttitle}>{productName}</div>
          <div className="product-description">{briefDescription}</div>
          <div className="product-price">{`${price}`}</div>
          <span className="ratings-info">
            <div className="stars" data-stars="1">
              {this.getStyledRatings()}
              <div className="product-count-rating">{`(${countRatings})`}</div>
            </div>
          </span>
        </div>
      </a>
    );
  }
}
