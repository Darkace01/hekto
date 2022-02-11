import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FB2E86;
    --color-accent: #7E33E0;
    --color-accent-light: #F6F5FF;
    --color-accent-light-2: #E7E4F8;
    --color-white: #FFFFFF;
    --color-text:#F1F1F1;
    --color-nav-link: #0D0E43;
    --color-accent-dark: #101750;
}
* {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        margin-block: 0;
    }

body{
    
    margin: 0;
    padding: 0;
    transition: all 0.3s;
}

.theme-container{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);

    
    @media (min-width: 576px){
        max-width: 540px;
    }
    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 992px){
        max-width: 810px;
    }
    @media (min-width: 1200px){
        max-width: 980px;
    }
    @media (min-width: 1400px){
        max-width: 1200px;
    }
}

`;
