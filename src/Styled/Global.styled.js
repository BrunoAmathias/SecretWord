import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    button{
        background-color: #1646a0;
        color:#fff;
        padding: 0 45px;
        border: 2px solid #fff;
        border-radius: 25px;
        height: 50px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        transition: all linear 0.4s;
    }
    button:hover{
        background-color: #0923af;
    }
`