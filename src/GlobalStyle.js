import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FB2E86;
    --color-accent: #7E33E0;
    --color-accent-light: #F6F5FF;
    --color-accent-light-2: #E7E4F8;
    --color-white: #FFFFFF;
    --color-text:#F1F1F1;
}
* {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        margin-block: 0;
    }

body{
    
    margin: 0;
    padding: 0;
}
`;
