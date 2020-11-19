import React from 'react';
import axios from 'axios';
import {
  ProductAnchorWrapper,
  ProductWrapper,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  Stars,
  ProductRatingCount,
  HeartWrapper,
  BasketIcon,
  BasketWrapper,
  BasketOuterWrapper,
  HeartIcon,
  StarIcon,
  HalfEmptyStarIcon,
  HalfFilledStarIcon,
} from '../styles/productStyles';

const filledStar = (
  <svg width="100%" viewBox="0 0 24 24">
    <StarIcon filled />
  </svg>
);

const emptyStar = (
  <svg width="100%" viewBox="0 0 24 24">
    <StarIcon filled={false} />
  </svg>
);

const halfStar = (
  <svg width="100%" viewBox="0 0 24 24">
    <HalfEmptyStarIcon />
    <HalfFilledStarIcon />
  </svg>
);

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    const {
      imageOneUrl,
    } = props;

    this.state = {
      hovering: false,
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
      hovering: true,
      shownImage: imageTwoUrl,
    });
  }

  handleMouseOut() {
    const {
      imageOneUrl,
    } = this.props;
    this.setState({
      hovering: false,
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

    const stars = Array(Math.floor(avgRatings)).fill(filledStar);
    if (avgRatings % 1 > 0.25 && avgRatings % 1 < 0.75) {
      stars.push(halfStar);
      return stars.concat(Array(4 - Math.floor(avgRatings)).fill(emptyStar));
    }
    return stars.concat(Array(5 - Math.floor(avgRatings)).fill(emptyStar));
  }

  render() {
    const {
      productName,
      pageUrl,
      price,
      briefDescription,
    } = this.props;
    const {
      countRatings,
      shownImage,
      hovering,
    } = this.state;

    return (
      <div>
        <ProductWrapper
          onMouseOver={this.handleMouseOver}
          onFocus={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
        >
          <HeartWrapper>
            <svg focusable="false" width="100%" viewBox="0 0 24 24">
              <HeartIcon hovering={hovering} />
            </svg>
          </HeartWrapper>
          <ProductAnchorWrapper href={pageUrl}>
            <ProductImage src={shownImage} alt="ikea product" />
            <ProductTitle hovering={hovering}>{productName}</ProductTitle>
            <ProductDescription>{briefDescription}</ProductDescription>
            <ProductPrice>{`${price}`}</ProductPrice>
            <Stars>
              {this.getStyledRatings()}
              <ProductRatingCount>{`(${countRatings})`}</ProductRatingCount>
            </Stars>
          </ProductAnchorWrapper>
          <BasketOuterWrapper hovering={hovering}>
            <BasketWrapper>
              <svg focusable="false" width="100%" height="100%" viewBox="0 0 24 24">
                <BasketIcon />
              </svg>
            </BasketWrapper>
          </BasketOuterWrapper>
        </ProductWrapper>
      </div>
    );
  }
}
