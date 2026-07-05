import React from 'react'

export default function Leaderboard(){
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="hero-label">🏆 Leaderboard</div>
        <h1 className="text-4xl font-bold text-[#184029]">Jungle Podium</h1>
        <p className="max-w-2xl text-slate-600">See the top animal champions and get inspired to climb the ranks.</p>

        <div className="podium-stage mt-8">
          <div className="podium-card" style={{ height: '260px' }}>
            <div className="podium-rank">🥈 #2</div>
            <div className="podium-number">2</div>
            <div className="podium-name">LionBoy</div>
            <div className="podium-label">Silver Jungle Runner</div>
          </div>
          <div className="podium-card" style={{ height: '340px' }}>
            <div className="podium-rank">👑 #1</div>
            <div className="podium-number">1</div>
            <div className="podium-name">PandaPro</div>
            <div className="podium-label">Top Memory Champion</div>
          </div>
          <div className="podium-card" style={{ height: '220px' }}>
            <div className="podium-rank">🥉 #3</div>
            <div className="podium-number">3</div>
            <div className="podium-name">BunnyGirl</div>
            <div className="podium-label">Bronze Badge Hero</div>
          </div>
        </div>
      </div>
    </div>
  )
}
