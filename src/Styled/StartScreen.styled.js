import styled from "styled-components";

export const ContainerStartScreen = styled.div`
    margin-top: 10px;
    text-align: center;
    

    h1{
        font-size: 3.5em;
        
    }
    h1::first-letter{
        font-size: 1.5em;
        color: red;
    }
    

    p{
        margin: 2em 0 2em 0;
        color: #ecfa00;
    }

    ul{
        list-style: none;
        margin-top: 10px;
        padding: 10px 20px;
        color: black;
        background-color: rgba(190 ,190,190, 0.1);
        border-radius: 20px;
    }
    li{
        padding: 10px 0 ;
    }
    hr{
    border-color: black; 
    }
   
    input{
        margin: 0px 0px 20px 20px;
        transform: scale(2);
    }
 
`