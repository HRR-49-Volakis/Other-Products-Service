import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StarIcon,
  HalfEmptyStarIcon,
  HalfFilledStarIcon,
  Stars,
  ProductRatingCount,
} from './StarRatingsStyles';

function Star({ value, delay }) {
  const [starType, setStarType] = useState('emptyStar');

  const filledStar = (
    <svg width="100%" viewBox="0 0 24 24">
      <StarIcon filled={1} />
    </svg>
  );

  const emptyStar = (
    <svg width="100%" viewBox="0 0 24 24">
      <StarIcon filled={0} />
    </svg>
  );

  const halfStar = (
    <svg width="100%" viewBox="0 0 24 24">
      <HalfEmptyStarIcon />
      <HalfFilledStarIcon />
    </svg>
  );

  useEffect(() => {
    setTimeout(() => {
      if (value > 0.8) {
        setStarType('filledStar');
      } else if (value > 0.2) {
        setStarType('halfStar');
      }
    }, 300 * delay);
  });

  switch (starType) {
    case 'filledStar':
      return filledStar;
    case 'halfStar':
      return halfStar;
    default:
      return emptyStar;
  }
}

function StarRatings({ id }) {
  const [avgRatings, setAvgRatings] = useState(0);
  const [countRatings, setCountRatings] = useState(0);

  useEffect(() => {
    axios.get(`/api/product_scroller/ratings/avg/product_id=${id}`)
      .then(({ data }) => {
        setAvgRatings(`${data[0].average_stars}`);
        return axios.get(`/api/product_scroller/ratings/count/product_id=${id}`);
      })
      .then(({ data }) => {
        setCountRatings(data[0].times_rated);
      })
      .catch((err) => {
        throw err;
      });
  });

  return (
    <Stars>
      {[1, 2, 3, 4, 5].map((num) => (
        <Star key={num} value={(avgRatings - num) + 2} delay={num} />
      ))}
      <ProductRatingCount>{`(${countRatings})`}</ProductRatingCount>
    </Stars>
  );
}

export default StarRatings;
