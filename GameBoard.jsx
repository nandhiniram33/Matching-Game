import React, { useEffect, useState, useRef } from 'react'
import Card from './Card'
import { generateDeck } from '../utils/gameLogic'
import { motion } from 'framer-motion'
import Particles from './Particles'
import VictoryModal from './VictoryModal'
import confetti from 'canvas-confetti'
import { Howl } from 'howler'

export default function GameBoard({ difficulty='medium', paused=false, cardsCount=null, onWin=null, onTimeout=null }){
  const [deck, setDeck] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [combo, setCombo] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(true)
  const [best, setBest] = useState(()=> JSON.parse(localStorage.getItem('best')) || null)
  const timerRef = useRef(null)
  const soundFlip = useRef(null)
  const soundMatch = useRef(null)

  useEffect(()=>{
    const d = generateDeck(typeof cardsCount === 'number' ? cardsCount : difficulty)
    setDeck(d)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setCombo(0)
    setTime(0)
    setRunning(true)
    // load sounds
    soundFlip.current = new Howl({ src: [] })
    soundMatch.current = new Howl({ src: [] })
  },[difficulty, cardsCount])

  const levelCards = typeof cardsCount === 'number' ? cardsCount : difficulty === 'easy' ? 4 : difficulty === 'medium' ? 8 : difficulty === 'hard' ? 12 : 16
  const timeLimit = Math.max(30, Math.min(120, levelCards * 6))

  useEffect(()=>{
    if(!running || paused) return
    timerRef.current = setInterval(()=> setTime(t=> t < timeLimit ? t+1 : t),1000)
    return ()=> clearInterval(timerRef.current)
  },[running, paused, timeLimit])

  useEffect(()=>{
    if(!running) return
    if(time >= timeLimit){
      setRunning(false)
      if(typeof onTimeout === 'function'){
        onTimeout({ moves, time, combo, difficulty, levelCards, timeLimit })
      }
    }
  },[time, running, onTimeout, moves, combo, difficulty, levelCards, timeLimit])

  function onFlip(index){
    if(flipped.includes(index) || matched.includes(index)) return
    const next = [...flipped, index]
    setFlipped(next)
    if(next.length===2){
      setMoves(m=>m+1)
      const [a,b] = next
      if(deck[a].id === deck[b].id){
        setMatched(prevMatched => {
          const nextMatched = [...prevMatched, a, b]
          setCombo(c=>c+1)
          setFlipped([])
          // match sound and effects
          try{ confetti({ particleCount: 20, spread: 60 }) }catch(e){}
          if(nextMatched.length === deck.length){
            setRunning(false)
            const score = Math.max(10, Math.round((deck.length*10) / (time+1) * (1+combo/4)))
            const bestObj = JSON.parse(localStorage.getItem('best')||'null')
            const newBest = { score, time, moves }
            if(!bestObj || score>bestObj.score) localStorage.setItem('best', JSON.stringify(newBest))
            setBest(JSON.parse(localStorage.getItem('best')))
            const stats = { moves, time, score }
            try{ if(typeof onWin === 'function') onWin(stats) }catch(e){}
          }
          return nextMatched
        })
      } else {
        setCombo(0)
        // wrong - shake animation
        const el = document.querySelectorAll('.card-inner.flipped')
        el.forEach(e=> e.classList.add('wrong-shake'))
        setTimeout(()=>{
          el.forEach(e=> e.classList.remove('wrong-shake'))
          setFlipped([])
        }, 700)
      }
    }
  }

  const cols = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 4 : difficulty === 'hard' ? 6 : 8

  return (
    <div className="relative z-10">
      <Particles />
      <div className="stats-grid mb-6">
        <div className="stat-card glass-card">
          <div className="stat-icon">🐾</div>
          <div>
            <p className="stat-label">Moves</p>
            <p className="stat-value">{moves}</p>
          </div>
        </div>
        <div className="stat-card glass-card">
          <div className="stat-icon">⏱️</div>
          <div>
            <p className="stat-label">Time</p>
            <p className="stat-value">{time}s</p>
          </div>
        </div>
        <div className="stat-card glass-card">
          <div className="stat-icon">⭐</div>
          <div>
            <p className="stat-label">Combo</p>
            <p className="stat-value">{combo}</p>
          </div>
        </div>
        <div className="stat-card glass-card">
          <div className="stat-icon">🏆</div>
          <div>
            <p className="stat-label">Best</p>
            <p className="stat-value">{best ? best.score : '-'}</p>
          </div>
        </div>
      </div>

      <motion.div layout className="game-grid">
        {deck.map((c, idx)=> (
          <Card key={idx} card={c} index={idx} flipped={flipped.includes(idx) || matched.includes(idx)} matched={matched.includes(idx)} onFlip={()=>onFlip(idx)} />
        ))}
      </motion.div>

    </div>
  )
}
