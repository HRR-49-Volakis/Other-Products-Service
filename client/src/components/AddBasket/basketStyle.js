import styled from 'styled-components';

export const OuterBasketWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')};
  transition: background-color .5s;
  cursor: pointer;
`;

export const BasketWrapper = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')};
  cursor: pointer;
  transition: background-color .5s;
`;

export const CheckMarkWrapper = styled.div`
  transform: scale(.7);
`;

export const CheckMark = styled.path.attrs({
  d: 'M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z',
})`
  position: absolute;
  fill: rgb(255,255,255);
  animation: slidein 0.2s forwards;

  @keyframes slidein {
    from {
      visibility: hidden;
      transform: translateY(40%);
    }
    to {
      visibility: visible;
      transform: translateY(-10%);
    }
  }
`;

export const BasketIcon = styled.path.attrs({
  d: 'M10.4372 4H10.9993H12.0003H12.9996H13.5616L13.8538 4.48014L17.2112 9.99713H21H22.2806L21.9702 11.2396L21.5303 13H19.4688L19.7194 11.9971H4.28079L5.59143 17.2397C5.70272 17.6848 6.1027 17.9971 6.56157 17.9971H15V19.9971H6.56157C5.18496 19.9971 3.98502 19.0602 3.65114 17.7247L2.02987 11.2397L1.71924 9.99713H3.00002H6.78793L10.145 4.48017L10.4372 4ZM12.4375 6L14.87 9.99713H9.12911L11.5614 6H12.0003H12.4375ZM17.9961 16V14H19.9961V16H21.9961V18H19.9961V20H17.9961V18H15.9961V16H17.9961Z',
  'fill-rule': 'evenodd',
  'clip-rule': 'evenodd',
})`
  fill: rgb(255,255,255);
  background-color: rgb(255,255,255);
`;

export const Circle = styled.circle.attrs({
  cx: '250',
  cy: '50',
  r: '50',
})`
  position: absolute;
  fill: rgb(255,255,255);
  animation: slideCircle .3s forwards, hide .6s forwards;

  @keyframes slideCircle {
    from {
      transform: translateY(10%);
    }
    to {
      transform: translateY(50%);

    }
  }
  @keyframes hide {
    to {
        visibility: hidden;
    }
  }
`;
