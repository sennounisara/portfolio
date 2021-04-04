import { createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle
    `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .blocs {
    background: ${({ theme }) => theme.blocs};
  }
  Navbar {
    bg: ${({ theme }) => theme.nav};
  }
  Paper {
    backgroundColor : ${({ theme }) => theme.blocs} ;
  }
  path{
    fill:${({ theme }) => theme.fill};
  }
  .Card {
    background-color: ${({theme}) => theme.card};
  }
  `
