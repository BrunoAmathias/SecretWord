import React, { useEffect, useState, useCallback } from 'react'
import { ContainerApp } from './Styled/App.styled';
import {listWord} from './data/word'
import StartScreen from './Components/StartScreen';
import Game from './Components/Game'
import EndGame from './Components/EndGame'



const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(listWord)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses ] = useState(3)
  const [score, setScore] = useState(0)
  const [usedWords, setUsedWords] = useState([])


  const pickWordAndCategory = useCallback(() =>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  },[words])

  const startGame = useCallback(() =>{
    clearLetterStates()


    const {word, category} = pickWordAndCategory()

    if(usedWords.includes(word)){
      setGameStage(stages[2].name)
      return
    }

    console.log(word);

    usedWords.push(word)
    console.log(usedWords);


    let wordLetters = word.split('')
    wordLetters = wordLetters.map(i => i.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)


    setGameStage(stages[1].name)
  },[pickWordAndCategory])

  const verifyLetter = (letter) =>{

    const normalizedLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizedLetter)||
      wrongLetters.includes(normalizedLetter)){
        return
      }


    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters,
        normalizedLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses -1)
    }


  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
}

useEffect(()=>{
  if(guesses <= 0 ){
    clearLetterStates()
    setGameStage(stages[2].name)
  }
},[guesses])

useEffect(()=>{

  const uniqueLetters = [...new Set(letters)]

  if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name){

    setScore(score + 100)
    startGame()
    setGuesses(3)
  }

},[guessedLetters, letters, gameStage, startGame])

  const retry = () =>{
    setUsedWords([])
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }
  return (
    <ContainerApp>
      {gameStage ==='start' && <StartScreen startGame={startGame} />}
      {gameStage ==='game' && <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
       />}
      {gameStage ==='end' && <EndGame retry={retry} score={score} />}

    </ContainerApp>
  );
}

export default App;
