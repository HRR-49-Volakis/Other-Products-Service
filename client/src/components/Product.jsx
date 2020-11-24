import React from 'react';
import axios from 'axios';
import {
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
  ImageOne,
  ImageTwo,
  HeartIconOutLine,
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
    this.state = {
      hovering: false,
      liked: false,
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.getStyledRatings = this.getStyledRatings.bind(this);
    this.handleHeartClick = this.handleHeartClick.bind(this);
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
    this.setState({
      hovering: true,
    });
  }

  handleMouseOut() {
    this.setState({
      hovering: false,
    });
  }

  handleChangeId(id) {
    const { setMainProductId } = this.props;
    setMainProductId(id);
  }

  handleHeartClick() {
    const { liked } = this.state;
    this.setState({
      liked: !liked,
    });
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

  getRatingCount() {
    const { id } = this.props;
    return axios.get(`/api/product_scroller/ratings/count/product_id=${id}`);
  }

  getRatingAvg() {
    const { id } = this.props;
    return axios.get(`/api/product_scroller/ratings/avg/product_id=${id}`);
  }

  render() {
    const {
      id,
      productName,
      price,
      briefDescription,
      imageTwoUrl,
      imageOneUrl,
    } = this.props;
    const {
      countRatings,
      hovering,
      liked,
    } = this.state;

    return (
      <div>
        <ProductWrapper
          onMouseOver={this.handleMouseOver}
          onFocus={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
        >
          <HeartWrapper onClick={this.handleHeartClick}>
            <svg focusable="false" width="100%" viewBox="0 0 24 24">
              <HeartIconOutLine hovering={hovering} liked={liked} />
              <HeartIcon hovering={hovering} liked={liked} />
            </svg>
          </HeartWrapper>
          <div className="setIdWrapper" onClick={this.handleChangeId.bind(this, id)} aria-hidden>
            <ProductImage>
              <ImageOne hovering={hovering} src={imageOneUrl} alt="ikea product" />
              <ImageTwo hovering={hovering} src={imageTwoUrl} alt="ikea product" />
            </ProductImage>
            <ProductTitle hovering={hovering}>{productName}</ProductTitle>
            <ProductDescription>{briefDescription}</ProductDescription>
            <ProductPrice>{`${price}`}</ProductPrice>
          </div>
          <Stars>
            {this.getStyledRatings()}
            <ProductRatingCount>{`(${countRatings})`}</ProductRatingCount>
          </Stars>
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
