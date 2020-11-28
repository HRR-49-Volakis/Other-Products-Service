import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Roboto&display=swap');
  @fontface {
    display: inline;
    font-family: 'Noto Sans', 'Roboto', sans-serif;
  }
`;

export const AppWrapper = styled.div`
  font-family: 'Noto Sans', 'Roboto', sans-serif;
  display: grid;
  grid-template-rows: 500px 500px;
  width: 850px;
  grid-gap: 100px;
`;
