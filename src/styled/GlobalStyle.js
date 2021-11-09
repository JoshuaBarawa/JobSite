import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
*{
    font-family: 'Spartan', sans-serif;
    box-sizing: border-box;

}

body{
    margin: 0;
    padding: 0;
    background-color: hsl(180, 31%, 95%);
}

`

export default GlobalStyle