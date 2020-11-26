import styled from 'styled-components';

export const StarIcon = styled.path.attrs({
  d: 'M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z',
})`
  fill: ${(props) => (props.filled === 1 ? '#000' : '#DFDFDF')};
`;

export const HalfEmptyStarIcon = styled.path.attrs({
  d: 'M17.1986 20L11.9999 17.7091V4L14.8592 8.9091L20.4116 10.1115L16.6264 14.3478L17.1986 20Z',
})`
  fill: #DFDFDF;
`;
export const HalfFilledStarIcon = styled.path.attrs({
  d: 'M6.80136 20L12.0001 17.7091V4L9.14078 8.9091L3.58838 10.1115L7.37364 14.3478L6.80136 20Z',
})`
  fill: #000;
`;

export const Stars = styled.div`
  display: flex;
  height: 25px;
  width: 100px;
  cursor: pointer;
`;

export const ProductRatingCount = styled.div`
  font-family: sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 12px;
  color: #484848;
  padding-top: 5px;
  &:hover {
    text-decoration:underline;
  }
  cursor: pointer;
`;
