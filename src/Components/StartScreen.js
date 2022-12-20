import React, { useState } from 'react'
import { ContainerStartScreen } from '../Styled/StartScreen.styled'

const StartScreen = ({startGame}) => {

  const [box, setBox] = useState(true)

  const changeBox = ()=>{
    setBox(!box)
  }
  console.log(box);

  return (
    <ContainerStartScreen>
        <h1>Secret Word</h1>
        <ul>
          <h2>Regras e Prêmios</h2>
          <li>1 - Não poderá reinvendicar todos os prêmios sem fazer a pontuação necessária.</li>
          <li>2 - Você terá duas chances para conseguir o máximo de pontos.</li>
          <li>3 - Nas duas jogadas os pontos não são acumulados.</li>
          <li>4 - Os prêmios serão aculados gradativamente.</li>
          <li>5 - A acentuação será necessária. A ≠ Ã</li>
          <hr/>
          <li>100 Pontos - Trufa da cacau show </li>
          <li>300 Pontos - Barra de Milka</li>
          <li>500 Pontos - </li>
          <li>Prêmio 4</li>
          <li>1000 Pontos - Pulseira vivara</li>
        </ul>
        <p>Clique no botão para começar a jogar</p>
        <form >
        <span>Concordo com tudo que foi lido!</span>
        <input required onClick={changeBox} type="checkbox" name="" id="" />
        </form>
        <button disabled={box} onClick={startGame}>Começar o jogo</button>

    </ContainerStartScreen>
  )
}

export default StartScreen