import React from 'react'

export default function Card({ card, flipped, matched, onFlip }){
  return (
    <div className="card-3d" style={{ paddingTop: '100%', position: 'relative' }}>
      <div className={`card-inner ${flipped ? 'flipped' : ''} absolute inset-0`}>
        <div
          className={`card-face card-front rounded-lg flex items-center justify-center text-5xl ${!flipped ? 'cursor-pointer' : ''}`}
          onClick={!flipped ? onFlip : undefined}
          style={{ position: 'absolute' }}
        >
          <div className="text-4xl opacity-90">🐾</div>
        </div>
        <div
          className={`card-face card-back rounded-lg flex items-center justify-center text-5xl ${matched ? 'matched-glow' : ''}`}
          style={{ position: 'absolute' }}
        >
          <div className="emoji">{card.emoji}</div>
        </div>
      </div>
    </div>
  )
}
