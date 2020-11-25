import styled from 'styled-components';

export const OuterListWrapper = styled.div`
  display: block;
  margin-top: 75px;
  margin-bottom: 150px;
`;

export const ListTitle = styled.div`
  display: block;
  /* padding-top: 20px; */
  /* padding-bottom: 10px; */
  width: 800px;
  font-size: 1.375rem;
  line-height: 1.4545454545;
  color:#111;
  font-weight: 700;
  padding-left: 35px;
  font-faimly: sans-serif;
`;

export const ArrowListWrapper = styled.div`
  width:804px;
  height:400px;
  display: grid;
  grid-template-columns: 30px 744px 30px;
`;

export const InnerListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-size: 12px;
  height: 500px;
  width: 744px;
  margin-top: 20px;
  margin-bottom: 50px;
  overflow-x: scroll;
  transform: translateX: (+1);
  scroll-behavior: smooth;
  /* padding:4px 0 15px; */

  &::-webkit-scrollbar {
    height: 3px;
    background-color: rgb(223,223,223,0.5);
    opacity: 0.5;
    &::hover {
      background-color:red;
    }
  }

  &::-webkit-scrollbar-thumb {
    height: 5px;
    width: 5px;
    background: black;
  }
`;

export const ArrowRight = styled.path.attrs({
  d: 'M16.4153 12.0003L8.41407 20.0011L6.9999 18.5868L13.5869 12.0002L7.00097 5.41339L8.41528 3.99927L16.4153 12.0003Z',
})`
  z-index: 3;
  fill: white;
  opacity: ${(props) => (props.hovering ? '1' : '0.0')};
`;

export const ArrowLeft = styled.path.attrs({
  d: 'M7 12.0006L15.0012 3.99992L16.4154 5.41417L9.82838 12.0008L16.4143 18.5876L15 20.0017L7 12.0006Z',
})`
  z-index: 3;
  fill: white;
  opacity: ${(props) => (props.hovering ? '1' : '0.0')};
`;

export const ArrowWrapper = styled.svg.attrs({
  viewBox: '0 0 24 24',
})`

  position: relative;
  margin-top: 175px;
  z-index: 8;
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.hovering ? 'black' : 'rgba(0, 0, 0, 0.0)')};
  &:hover {
    opacity: 0.5
  }
`;
