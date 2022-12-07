import React from 'react'
import {useState, useRef} from 'react'
import {ContainerGame, 
        ContainerWord,
        ContainerLetter} from '../Styled/Game.styled'
        

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score             
 }) => {
 

  const [letter, setLetter] = useState("")
  const letterinputRef = useRef(null)



  const handleSubmit = (e) =>{
      e.preventDefault()
      verifyLetter(letter)
      setLetter('')
      letterinputRef.current.focus()
    }

    return (
  <ContainerGame>
      <p>
        <span>pontuação: {score}</span>
      </p>   
      <h1>Advinhe a palavra:</h1>
      <h3>
        Dica sobre a palavra <span> : {pickedCategory}</span>
      </h3>
        <p>Você ainda tem {guesses} tentativa(s).</p>
      <ContainerWord>
        {letters.map((letter, i) =>
        guessedLetters.includes(letter) ?(
          <span key={i}>{letter}</span>
        ): 
        (<span key={i}>

        </span>)
        )}
      </ContainerWord>
      <ContainerLetter>
        <p>Tente advinhar uma letra: </p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='letter' 
          maxLength='1' 
          required 
          onChange={(e)=> setLetter(e.target.value)} 
          value={letter}
          ref={letterinputRef} />
          <button>Jogar !</button>
        </form>
        <div>
          <p>Letras já utilizadas</p>
         {wrongLetters.map((letter, i) =>(
          <span key={i}>{letter},</span>
         ))}
        </div>
      </ContainerLetter>

  </ContainerGame>
  )
}

export default Game