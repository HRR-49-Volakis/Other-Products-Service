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
  position:absolute;
  margin-top: 9px;
  margin-left: 8px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')};
  cursor: pointer;
  transition: background-color .5s;
`;

export const IconScaleWrapper = styled.div`
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
  d: 'm 97.115358,162.70531 -0.84552,-0.51555 -0.477396,-0.72713 -0.477397,-0.72714 -1.362667,-5.37091 -1.362667,-5.37091 h 3.369377 3.369378 l 2.367304,-3.90261 2.3673,-3.9026 h 2.22365 2.22366 l 2.37554,3.9026 2.37554,3.90261 h 3.37473 3.37474 l -0.22632,0.85989 -0.22632,0.8599 -0.29172,1.12448 -0.29172,1.12448 h -1.45005 -1.45005 l 0.16602,-0.66146 0.16601,-0.66146 H 106.32394 96.241087 v 0.13924 0.13923 l 0.824514,3.3665 0.824514,3.36649 0.527714,0.46302 0.527714,0.46302 h 5.659227 5.65923 v 1.32292 1.32291 l -6.15156,-9.8e-4 -6.151562,-9.7e-4 -0.84552,-0.51555 z m 12.516992,-13.36475 -0.42793,-0.6531 -1.20982,-1.99273 -1.20981,-1.99273 h -0.48197 -0.48196 l -1.26681,2.05052 -1.26681,2.05052 -0.37851,0.59531 -0.3785,0.59532 h 3.76502 3.76503 z m 4.6004,12.55936 V 160.577 h -1.32291 -1.32292 v -1.32292 -1.32291 h 1.32292 1.32291 v -1.32292 -1.32292 h 1.32292 1.32291 v 1.32292 1.32292 h 1.32292 1.32292 v 1.32291 1.32292 h -1.32292 -1.32292 v 1.32292 1.32291 h -1.32291 -1.32292 z',

})`
  fill:rgb(255,255,255);
  stroke-width:0.264583
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
