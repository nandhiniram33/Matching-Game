import React from 'react'

export default function AnimalCard({ animal, owned, onUnlock, level = 1 }){
  const { emoji, name, rarity, starsCost, diamondsCost, description } = animal

  return (
    <div className={`animal-card glass rounded-2xl p-4 transition-all ${
      owned ? 'border-2 border-green-400 shadow-lg shadow-green-400/50' : 'opacity-75'
    }`}>
      <div className="text-center mb-3">
        <div className="text-5xl mb-2 filter drop-shadow-lg">{emoji}</div>
        <h3 className="font-bold text-lg">{name}</h3>
        {owned && <div className="text-xs text-green-500 font-semibold">✓ Owned</div>}
      </div>

      <div className="mb-3">
        <div className="text-xs font-semibold mb-1" style={{ color: rarity.color }}>
          {rarity.label}
        </div>
        <p className="text-xs text-gray-600 text-center">{description}</p>
      </div>

      {owned && (
        <div className="mb-3 text-center">
          <div className="text-sm font-bold text-purple-600">Level {level}</div>
          <div className="bg-purple-200 rounded-full h-2 mt-1">
            <div 
              className="bg-purple-600 h-full rounded-full" 
              style={{ width: `${Math.min(level * 20, 100)}%` }}
            />
          </div>
        </div>
      )}

      {!owned && (
        <div className="space-y-2">
          <button
            onClick={() => onUnlock('stars')}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-bold hover:shadow-lg transition"
          >
            {starsCost}⭐
          </button>
          <button
            onClick={() => onUnlock('diamonds')}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-bold hover:shadow-lg transition"
          >
            {diamondsCost}💎
          </button>
        </div>
      )}
    </div>
  )
}
