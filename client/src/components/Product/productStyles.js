import styled from 'styled-components';

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
  display: grid;
  grid-template-rows: auto;
  width: 175px;
  height: 450px;
  padding: 5px;

  position: relative;
`;

export const ProductImage = styled.div`
  position: relative;
  width:175px;
  height:175px;
  padding-bottom: 75px;
  cursor: pointer;
`;

export const ImageOne = styled.img`
  position: absolute;
  width:175px;
  height:175px;

  animation: ${(props) => (props.hovering ? 'fadeout .5s forwards' : 'fadein .5s forwards')};
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
`;
export const ImageTwo = styled.img`
  position: absolute;
  width:175px;
  height:175px;

  animation: ${(props) => (props.hovering ? 'fadein .5s forwards' : 'fadeout .5s forwards')};

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
`;

export const ProductTitle = styled.div`
  font-faimly: Noto Sans;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.hovering ? 'underline' : 'none')};
  cursor: pointer;

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
  cursor: pointer;
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
  cursor: pointer;
`;

export const StarIcon = styled.path.attrs({
  d: 'M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z',
})`
  fill: ${(props) => (props.filled ? '#000' : '#DFDFDF')};
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
  cursor: pointer;
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

export const HeartWrapper = styled.div`
  position: relative;
  padding-left: 80%;
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 20%;
  float: right;
  cursor: pointer;
`;

export const HeartIconOutLine = styled.path.attrs({
  d: 'M12.336 5.52055C14.2336 3.62376 17.3096 3.62401 19.2069 5.52129C20.2067 6.52115 20.6796 7.85005 20.6259 9.15761C20.6151 12.2138 18.4184 14.8654 16.4892 16.6366C15.4926 17.5517 14.5004 18.2923 13.7593 18.8036C13.3879 19.0598 13.0771 19.2601 12.8574 19.3973C12.7475 19.466 12.6601 19.519 12.5992 19.5555C12.5687 19.5737 12.5448 19.5879 12.5279 19.5978L12.5079 19.6094L12.502 19.6129L12.5001 19.614C12.5001 19.614 12.4989 19.6147 11.9999 18.748C11.501 19.6147 11.5005 19.6144 11.5005 19.6144L11.4979 19.6129L11.4919 19.6094L11.472 19.5978C11.4551 19.5879 11.4312 19.5737 11.4007 19.5555C11.3397 19.519 11.2524 19.466 11.1425 19.3973C10.9227 19.2601 10.612 19.0598 10.2405 18.8036C9.49947 18.2923 8.50726 17.5517 7.51063 16.6366C5.58146 14.8654 3.38477 12.2139 3.37399 9.15765C3.32024 7.85008 3.79314 6.52117 4.79301 5.52129C6.69054 3.62376 9.76704 3.62376 11.6646 5.52129L11.9993 5.856L12.3353 5.52129L12.336 5.52055ZM11.9999 18.748L11.5005 19.6144L11.9999 19.9019L12.4989 19.6147L11.9999 18.748ZM11.9999 17.573C12.1727 17.462 12.384 17.3226 12.6236 17.1573C13.3125 16.6821 14.2267 15.9988 15.1366 15.1634C17.0157 13.4381 18.6259 11.2919 18.6259 9.13506V9.11213L18.627 9.08922C18.6626 8.31221 18.3844 7.52727 17.7926 6.9355C16.6762 5.81903 14.866 5.81902 13.7495 6.9355L13.7481 6.93689L11.9965 8.68166L10.2504 6.9355C9.13387 5.81903 7.3237 5.81903 6.20722 6.9355C5.61546 7.52727 5.33724 8.31221 5.3729 9.08922L5.37395 9.11213V9.13507C5.37395 11.2919 6.98418 13.4381 8.86325 15.1634C9.77312 15.9988 10.6874 16.6821 11.3762 17.1573C11.6159 17.3226 11.8271 17.462 11.9999 17.573Z',
  'fill-rule': 'evenodd',
  'clip-rule': 'evenodd',
})`
  position absolute;
  fill: ${(props) => (props.hovering ? 'rgb(118, 118, 118)' : 'none')};
  &:hover {
    fill: ${(props) => (props.liked ? 'rgb(59, 59, 59)' : 'rgb(118, 118, 118)')};
  }
`;

export const HeartIcon = styled.path.attrs({
  d: 'M 19.2069 5.52129 C 17.3096 3.62401 14.2336 3.62376 12.336 5.52055 L 12.3353 5.52129 L 11.9993 5.856 L 11.6646 5.52129 C 9.76704 3.62376 6.69054 3.62376 4.79301 5.52129 C 3.79314 6.52117 3.32024 7.85008 3.37399 9.15765 C 3.38477 12.2139 5.58146 14.8654 7.51063 16.6366 C 8.50726 17.5517 9.49947 18.2923 10.2405 18.8036 C 10.612 19.0598 10.9227 19.2601 11.1425 19.3973 C 11.2524 19.466 11.3397 19.519 11.4007 19.5555 C 11.4312 19.5737 11.4551 19.5879 11.472 19.5978 L 11.4981 19.6129 L 11.9999 19.9019 L 12.5001 19.614 L 12.502 19.6129 L 12.5079 19.6094 L 12.5279 19.5978 C 12.5448 19.5879 12.5687 19.5737 12.5992 19.5555 C 12.6601 19.519 12.7475 19.466 12.8574 19.3973 C 13.0771 19.2601 13.3879 19.0598 13.7593 18.8036 C 14.5004 18.2923 15.4926 17.5517 16.4892 16.6366 C 18.4184 14.8654 20.6151 12.2138 20.6259 9.15761 C 20.6796 7.85005 20.2067 6.52115 19.2069 5.52129 Z',
  'fill-rule': 'evenodd',
  'clip-rule': 'evenodd',
})`
  position: absolute;
  fill: ${(props) => (props.liked ? 'rgb(118, 118, 118)' : 'none')};


  /* stroke: ${(props) => (props.hovering ? 'rgb(118, 118, 118)' : 'none')}; */

  &:hover {
    fill: ${(props) => (props.liked ? 'rgb(59, 59, 59)' : 'rgb(118, 118, 118)')};
    stroke: ${(props) => (props.hovering ? 'rgb(59, 59, 59)' : 'rgb(255,255,255)')};
    fill: rgb(59, 59, 59)
  }
`;
