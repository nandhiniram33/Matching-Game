import React from 'react'
import { LEVELS } from '../data/levels'
import { isLevelUnlocked, loadProgress } from '../utils/progress'
import { useNavigate } from 'react-router-dom'

function ModeBlock({ mode, levels }){
  const nav = useNavigate()
  const progress = loadProgress()
  const completed = progress.completed[mode] || []

  return (
    <div className="rounded-2xl bg-white/95 p-6 shadow-md">
      <h3 className="text-2xl font-bold mb-3">{mode.toUpperCase()}</h3>
      <div className="grid grid-cols-4 gap-3">
        {levels.map(l=> {
          const unlocked = isLevelUnlocked(mode, l.level)
          return (
            <button key={l.level} onClick={()=> unlocked && nav('/play', { state: { mode, level: l.level, cards: l.cards } })}
              className={`rounded-lg p-4 ${completed[l.level-1] ? 'bg-gradient-to-r from-[#ffb703] to-[#fb8500] text-white' : unlocked ? 'bg-[#f2fff4]' : 'bg-white/60 opacity-60 cursor-not-allowed'}`}
            >
              <div className="font-bold">Level {l.level}</div>
              <div className="text-sm opacity-80">{l.cards} cards</div>
              {completed[l.level-1] ? <div className="text-xs mt-2">✅ Completed</div> : null}
              {!unlocked ? <div className="text-xs mt-2">🔒 Complete previous level</div> : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function LevelSelect(){
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-4xl font-bold">Choose a World</h1>
        <p className="text-slate-600">Pick a mode and level to start your adventure.</p>
        <div className="grid gap-6">
          <ModeBlock mode="easy" levels={LEVELS.easy} />
          <ModeBlock mode="medium" levels={LEVELS.medium} />
          <ModeBlock mode="hard" levels={LEVELS.hard} />
          <ModeBlock mode="master" levels={LEVELS.master} />
        </div>
      </div>
    </div>
  )
}
