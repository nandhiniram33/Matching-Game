import React, { useEffect, useState } from 'react'
import { getBadges } from '../utils/progress'

export default function Achievements(){
  const [badges, setBadges] = useState([])

  useEffect(() => {
    setBadges(getBadges())
  }, [])

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="hero-label">🏆 Achievements</div>
        <h1 className="text-4xl font-bold text-[#184029]">Your badge collection</h1>
        <p className="max-w-2xl text-slate-600">Unlock one badge for each difficulty by completing every level in that mode.</p>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`badge-card bg-gradient-to-br ${badge.bg} p-6 ${badge.unlocked ? '' : 'opacity-70 grayscale'} transition-all duration-300`}
            >
              <div className="text-5xl">{badge.emoji}</div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">{badge.title}</h2>
              <p className="mt-2 text-slate-600">{badge.description}</p>
              <p className={`mt-4 text-sm font-semibold ${badge.unlocked ? 'text-[#184029]' : 'text-[#64715b]'}`}>
                {badge.unlocked ? 'Unlocked' : `Requires ${badge.requiredLevels} completed levels`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
