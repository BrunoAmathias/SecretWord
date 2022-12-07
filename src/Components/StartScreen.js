import React from 'react'
import { ContainerStartScreen } from '../Styled/StartScreen.styled'

const StartScreen = ({startGame}) => {
  return (
    <ContainerStartScreen>
        <h1>Secret Word</h1>
        <ul>
          <h2>Regras e Prêmios</h2>
          <li>Regra 1</li>
          <li>Regra 2</li>
          <li>Regra 3</li>
        </ul>
        <p>Clique no botão para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </ContainerStartScreen>
  )
}

export default StartScreen