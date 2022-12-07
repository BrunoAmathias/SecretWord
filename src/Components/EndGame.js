import React from 'react'
import {ContainerEndGame} from '../Styled/EndGame.styled'
const EndGame = ({retry, score}) => {
  return (
    <ContainerEndGame>
        <h1>EndGame</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Voltar para página inicial</button>

    </ContainerEndGame>
  )
}

export default EndGame
