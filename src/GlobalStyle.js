import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FB2E86;
    --color-accent: #7E33E0;
    --color-accent-light: #F6F5FF;
    --color-accent-light-2: #E7E4F8;
    --color-white: #FFFFFF;
}

body{
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
}
`;
