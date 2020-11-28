import styled from 'styled-components';

export const OuterListWrapper = styled.div`
  box-sizing: border-box;
  grid-template-rows: 35px 432px;
  grid-gap: 5px;
  width: 850px;
  height: 500px;
`;

export const ListTitle = styled.div`
  display: block;
  box-sizing: border-box;
  width: 800px;
  font-size: 1.375rem;
  line-height: 1.4545454545;
  color:#111;
  font-weight: 700;
  padding-left: 35px;
  font-faimly: sans-serif;
`;

export const ArrowListWrapper = styled.div`

  position:absolute;
  width:804px;
  display: grid;
  grid-template-columns: 42px 744px 42px;
`;

export const InnerListWrapper = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-size: 12px;
  height: 430px;
  width: 740px;
  overflow-x: scroll;
  transform: translateX: (+1);
  scroll-behavior: smooth;
  cursor: auto;
  position:absolute;

  &::-webkit-scrollbar {
    height: 2px;
    background-color: rgb(223,223,223,0.5);
    opacity: 0.5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: black;
  }

  &:hover {
    &::-webkit-scrollbar {
      height: 6px;
      background-color: rgb(223,223,223,0.5);
      opacity: 0.5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: black;
    }
  }
`;

export const LeftArrowWrapper = styled.div`
  grid-column: 1/3;

  position: absolute;
  margin-top: 200px;
  z-index: 8;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.hovering ? 'black' : 'rgba(0, 0, 0, 0.0)')};
  transition: background-color .5s;
  &:hover {
    opacity: 0.5
  }
`;
export const RightArrowWrapper = styled.div`
  grid-column: 3/3;
  margin-top: 200px;
  position: absolute;
  z-index: 8;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.hovering ? 'black' : 'rgba(0, 0, 0, 0.0)')};
  transition: background-color .5s;
  &:hover {
    opacity: 0.5
  }
`;

export const InnerArrowWrapper = styled.div`
  position: relative;
  transform: scale(.75);
`;

export const ArrowRight = styled.path.attrs({
  d: 'M16.4153 12.0003L8.41407 20.0011L6.9999 18.5868L13.5869 12.0002L7.00097 5.41339L8.41528 3.99927L16.4153 12.0003Z',
})`
  position: absolute;
  z-index: 3;
  fill: white;
`;

export const ArrowLeft = styled.path.attrs({
  d: 'M7 12.0006L15.0012 3.99992L16.4154 5.41417L9.82838 12.0008L16.4143 18.5876L15 20.0017L7 12.0006Z',
})`
  z-index: 3;
  position: absolute;
  fill: white;
`;
