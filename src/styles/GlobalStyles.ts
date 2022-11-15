import styled, { createGlobalStyle } from 'styled-components'
import pageBackground from "./styledAssets/page-background.png"

export const GlobalStyles = createGlobalStyle`
  body {
    background-size: cover;
    background-image: url(${pageBackground});
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const DexContainer = styled.div`
  width: 1100px;
  margin: 20px auto;
  position: relative;
`;
