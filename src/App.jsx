import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import './App.css'
import GenerateBoard from './board.jsx'

function Memory() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)




  return (
    <>
    <header id='header'>
      <div id='headerText'>
        <h2>Pokemon Memory Game</h2>
      </div>
      <div id='scoreBox'>
        <div id='currentScore'>Current: {currentScore}</div>
        <div id='bestScore'>Best: {bestScore}</div>
      </div>
    </header>
    <div><GenerateBoard /></div>
    </>
  )
}

export default Memory
