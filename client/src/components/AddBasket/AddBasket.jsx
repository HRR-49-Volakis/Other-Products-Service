import React, { useState, useEffect } from 'react';
import {
  CheckMark,
  Circle,

  BasketIcon,
  BasketWrapper,
  OuterBasketWrapper,
  IconScaleWrapper,
} from './basketStyle';

function CirclCheckAnimation() {
  const [showCheck, setShowCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowCheck(true), 550);
  });
  return (
    <div>
      { showCheck ? (
        <IconScaleWrapper>
          <svg viewBox="0 0 48 48">
            <CheckMark />
          </svg>
        </IconScaleWrapper>
      ) : (
        <svg viewBox="0 0  500 500">
          <Circle />
        </svg>
      ) }
    </div>
  );
}

function AddBasket({ hovering }) {
  const [added, setAdded] = useState(false);
  return (
    <OuterBasketWrapper hovering={hovering}>
      <BasketWrapper hovering={hovering} onClick={() => { setAdded(!added); }}>
        {added ? (
          <CirclCheckAnimation />
        ) : (
          <IconScaleWrapper>
            <svg width="27.421219" height="21.03437" viewBox="0 0 27.421219 21.03437">
              <g transform="translate(-92.589711,-142.18846)">
                <BasketIcon />
              </g>
            </svg>
          </IconScaleWrapper>
        ) }
      </BasketWrapper>
    </OuterBasketWrapper>
  );
}

export default AddBasket;
