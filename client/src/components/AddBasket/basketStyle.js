import styled from 'styled-components';

export const BasketIcon = styled.path.attrs({
  d: 'M 10.4372 4 H 10.9993 H 12.0003 H 12.9996 H 13.5616 L 13.8538 4.48014 L 17.2112 9.99713 H 21 H 22.2806 L 21.9702 11.2396 L 21.5303 13 H 19.4688 L 19.7194 11.9971 H 4.28079 L 5.59143 17.2397 C 5.70272 17.6848 6.1027 17.9971 6.56157 17.9971 H 15 V 19.9971 H 6.56157 C 5.18496 19.9971 3.98502 19.0602 3.65114 17.7247 L 2.02987 11.2397 L 1.71924 9.99713 H 3.00002 H 6.78793 L 10.145 4.48017 L 10.4372 4 Z M 12.4375 6 L 14.87 9.99713 H 9.12911 L 11.5614 6 H 12.0003 H 12.4375 Z M 17.9961 16 V 14 H 19.9961 V 16 H 21.9961 V 18 H 19.9961 V 20 H 17.9961 V 18 H 15.9961 V 16 H 17.9961 Z',
  'fill-rule': 'odd',
})`
  fill: rgb(255,255,255);
`;

export const OuterBasketWrapper = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')};
  cursor: pointer;
  margin-left: 75%;
`;

export const BasketWrapper = styled.div`
  margin-top: 8.5px;
  margin-left: 8.5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')};
  cursor: pointer;
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
