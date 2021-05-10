import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

html {
    font-size: 112.5%; // 18px
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Josefin Sans', sans-serif;

    transition: all 0.2s ease-in-out;
}

#root {
  background-image: url(${({ theme }) => theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 4.375rem 3rem 0rem 3rem;

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 37.5em) {
      background-image: url(${({ theme }) => theme.backgroundImageMobile});

      padding: 3rem 1.5rem 0rem 1.5rem;
  }
}

`;

export default GlobalStyle;
