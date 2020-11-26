import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Roboto&display=swap');
  body {
    display: inline;
    margin: 8px;
    font-family: 'Noto Sans', 'Roboto', sans-serif;
  }
`;

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 450px 450px;
  grid-gap: 100px;
`;
