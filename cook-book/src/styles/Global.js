import { createGlobalStyle, css } from 'styled-components';


export const reset = css`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }

  a, a:hover, a:focus, a:active, a:visited {
    text-decoration: none;
    color: inherit;
 }

  
`;

export const GlobalStyle = createGlobalStyle`
${reset}
`;


