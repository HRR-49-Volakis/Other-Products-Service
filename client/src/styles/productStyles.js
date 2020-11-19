import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  font-size: 12px;
  height:340px;
  padding:4px 0 24px;
`;

//  product wrapped in anchor tag for clickable link,
// remove anchor styling so everythign isnt blue and underlined
export const ProductAnchorWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover{
    text-decoration: none;
    color: inherit;
  }
  &:focus {
    text-decoration: none;
    color: inherit;
  }
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const ProductWrapper = styled.div`

  width: 175px;
  padding: 5px;
  display:inline-block;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width:100%;
`;

export const ProductTitle = styled.div`
  font-faimly: Noto Sans;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.hovering ? 'underline' : 'none')};

`;

export const ProductDescription = styled.div`
  font-family: sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #484848;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.div`
  display: inline;
  font-family: 'Noto Sans';
  font-weight: 700;
  color: #000;
  font-size: 22px;
  &:before {
    content: "$";
    font-size: 12px;
    vertical-align:40%;
  }
`;

export const Stars = styled.div`
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 100px;
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
`;

export const HeartWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 20%;
  float: right;
`;

export const FilledHeart = styled.path`
  position: absolute;
  fill: rgb(118, 118, 118);
  &:hover {
    fill: rgb(59, 59, 59)
  }
`;

export const EmptyHeart = styled.path`
  fill: white;
`;

export const BasketIcon = styled.path`
  fill: rgb(255,255,255);
`;

export const BasketWrapper = styled.path`
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 25px;
  position: relative;
  margin: auto;

`;
export const BasketOuterWrapper = styled.path`
  display:inline;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  width: 40px;
  float: right;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')}
`;
