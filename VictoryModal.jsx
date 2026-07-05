import React from 'react'

export default function VictoryModal({ stats, rewards, title='🎉 LEVEL COMPLETE 🎉', subtitle, onClose, onOk, onNext, nextLabel='Next', okText='OK', showNext=true }){
  const { moves, time, score } = stats || {}
  const stars = score ? (score > 150 ? 3 : score > 90 ? 2 : 1) : 1
  const handleOk = onOk || onClose

  return (
    <div className="victory-modal">
      <div className="glass p-8 rounded-3xl neon" style={{maxWidth:520}}>
        <h2 className="text-3xl font-extrabold mb-2">{title}</h2>
        {subtitle ? <p className="mb-4 text-slate-600">{subtitle}</p> : null}
        <div className="stars mb-4">
          {Array.from({length:stars}).map((_,i)=> <div key={i} className="star">★</div>)}
        </div>
        <div className="mb-2">You finished in <strong>{time}s</strong> with <strong>{moves}</strong> moves.</div>
        {rewards && (
          <div className="mb-4">
            <div className="flex justify-center gap-4 items-center">
              <div className="stat">+{rewards.coins || 0} Coins</div>
              <div className="stat">+{rewards.gems || 0} Gems</div>
              {rewards.stars ? <div className="stat">+{rewards.stars} Stars</div> : null}
            </div>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          <button className="px-6 py-2 rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-700 shadow-xl" onClick={handleOk}>{okText}</button>
          {showNext && <button className="px-6 py-2 rounded bg-gradient-to-r from-[#ffb703] to-[#fb8500] shadow-xl" onClick={onNext}>{nextLabel}</button>}
        </div>
      </div>
    </div>
  )
}
