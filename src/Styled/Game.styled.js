import styled from "styled-components";

export const ContainerGame = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 2.5em;
}
`
export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

`
export const ContainerWord = styled.div`
    margin: 1.5em;
    padding: 1.5em;
    border: 17px solid #ecfa00;
    box-shadow: 3px 3px 30px white;
    border-radius: 10px;
    display: flex;

    span{
        font-size: 70px;
        line-height: 1.5;
        border: 3px solid #000;
        height: 100px;
        width: 100px;
        text-transform: uppercase;
        background-color: #fff;
        color:#000;
        font-weight: bold;
        text-align: center;
    }
`

export const ContainerLetter = styled.div`
p{
    margin-bottom: 1.2em;
    text-align: center;
}
form{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
}

input{
    height: 50px;
    width: 50px;
    font-size: 2em;
    text-align: center;
    margin-right: 1em;
}
div{
    text-align: center;
}
`