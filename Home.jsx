import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBadgeProgress, loadProgress } from '../utils/progress'
import { musicManager } from '../utils/music'
import { loadSettings } from '../utils/settings'

const animalCollection = [
  { emoji: '🐼', name: 'Panda', progress: '100%' },
  { emoji: '🦁', name: 'Lion', progress: '80%' },
  { emoji: '🐵', name: 'Monkey', progress: '60%' },
  { emoji: '🐯', name: 'Tiger', progress: 'Locked' },
]

const worldStages = [
  { icon: '🌳', label: 'Easy Forest', status: 'Unlocked' },
  { icon: '🌊', label: 'Medium River', status: 'Unlocked' },
  { icon: '🌋', label: 'Hard Volcano', status: 'Locked' },
  { icon: '👑', label: 'Animal Kingdom', status: 'Locked' },
]

export default function Home(){
  const nav = useNavigate()
  const [resources, setResources] = useState({ coins: 0, gems: 0, stars: 0 })
  const badgeProgress = getBadgeProgress()
  const nextBadgeLabel = badgeProgress.nextBadge ? badgeProgress.nextBadge.title : 'All badges earned!'

  useEffect(() => {
    const progress = loadProgress()
    setResources({
      coins: progress.coins || 0,
      gems: progress.gems || 0,
      stars: progress.stars || 0
    })

    const onFocus = () => {
      const latest = loadProgress()
      setResources({
        coins: latest.coins || 0,
        gems: latest.gems || 0,
        stars: latest.stars || 0
      })
    }

    window.addEventListener('focus', onFocus)
    return () => window.removeEventListener('focus', onFocus)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,183,3,0.18),_transparent_18%),radial-gradient(circle_at_80%_15%,_rgba(144,190,109,0.18),_transparent_14%),linear-gradient(180deg,_#fff8e7_0%,_#f5fff2_100%)] px-6 py-6">
      <div className="absolute top-8 left-8 h-36 w-36 rounded-full bg-[#ffb703]/25 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-[#90be6d]/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(249,153,0,0.16),_transparent_60%)]" />
      
        <div className="relative z-10 mx-auto max-w-7xl space-y-6">
          <section className="dashboard-card bg-gradient-to-br from-[#fff8e7] to-[#fff1c9] border-[#ffe2a1]/70 p-6 shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b56f05]">Animal Kingdom</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#2c3d29] md:text-5xl">Animal Kingdom Adventure</h1>
              <p className="text-sm text-[#4b5a33]">Level 12 • Explorer Rank</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#183333]">
              <div className="rounded-full bg-[#ffebad] px-4 py-3 shadow-[0_15px_30px_rgba(255,183,3,0.14)]">💰 {resources.coins}</div>
              <div className="rounded-full bg-[#c8f0ff] px-4 py-3 shadow-[0_15px_30px_rgba(76,201,240,0.14)]">💎 {resources.gems}</div>
              <div className="rounded-full bg-[#e9f2ff] px-4 py-3 shadow-[0_15px_30px_rgba(131,56,236,0.12)]">⭐ {resources.stars}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="rounded-[32px] bg-[#ffffff]/90 p-5 shadow-lg border border-white/80">
              <p className="text-sm uppercase tracking-[0.18em] text-[#5d502e]">Current Mission</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1f4228]">Complete Easy Level 8</h2>
              <div className="mt-4 rounded-full bg-[#f5f0d4] p-1">
                <div className="h-3 rounded-full bg-[#ffb703]" style={{ width: '80%' }} />
              </div>
              <p className="mt-2 text-sm text-[#4b572f]">Progress: <strong className="text-[#184029]">80%</strong></p>
            </div>

            <button onClick={() => nav('/play')} className="inline-flex min-h-[4.5rem] items-center justify-center rounded-[28px] bg-[#ffb703] px-10 text-lg font-bold text-[#152a1f] shadow-[0_20px_40px_rgba(255,183,3,0.24)] transition-transform duration-200 hover:-translate-y-1">
              ▶️ Play
            </button>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_0.85fr]">
          <div className="grid gap-6">
            <div className="dashboard-card bg-gradient-to-br from-[#e9f9ff] to-[#e1fff3] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1f4f44]">World map</p>
                  <h2 className="mt-3 text-3xl font-bold text-[#1c3f2d]">Choose your adventure</h2>
                </div>
                <button onClick={() => nav('/levels')} className="rounded-full bg-[#4cc9f0] px-5 py-3 text-sm font-semibold text-white shadow-lg">View all levels</button>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {worldStages.map((stage, index) => (
                  <button key={index} onClick={() => nav('/levels')} className="group rounded-[28px] border border-white/70 bg-white/90 px-5 py-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-3 text-2xl">{stage.icon} <span className="font-semibold text-[#20402f]">{stage.label}</span></div>
                    <p className="mt-3 text-sm text-[#5f6d51]">{stage.status}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="dashboard-card bg-gradient-to-br from-[#fff0f8] to-[#f8f1ff] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6f4b72]">Animal collection</p>
                  <h2 className="mt-3 text-3xl font-bold text-[#3b2a5a]">Your favorite friends</h2>
                </div>
                <button onClick={() => nav('/achievements')} className="rounded-full bg-[#ff5d8f] px-4 py-2 text-sm font-semibold text-white shadow-md">See badges</button>
              </div>
              <div className="mt-6 space-y-4">
                {animalCollection.map((animal) => (
                  <div key={animal.name} className="flex items-center justify-between rounded-[26px] bg-white/90 p-4 shadow-sm border border-[#f4d4e2]">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{animal.emoji}</span>
                      <div>
                        <p className="font-semibold text-[#2b3230]">{animal.name}</p>
                        <p className="text-sm text-[#64715b]">Collection progress</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#184029]">{animal.progress}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="dashboard-card bg-gradient-to-br from-[#fff9eb] to-[#ffefcc] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b56f05]">Quick access</p>
              <div className="mt-6 space-y-4">
                <button onClick={() => nav('/collection')} className="w-full rounded-[24px] bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-left text-white shadow-lg font-semibold">🎪 Collection</button>
                <button onClick={() => nav('/achievements')} className="w-full rounded-[24px] bg-[#fb8500] px-5 py-4 text-left text-white shadow-lg">🏆 Badges</button>
                <button onClick={() => nav('/stats')} className="w-full rounded-[24px] bg-[#4cc9f0] px-5 py-4 text-left text-white shadow-lg">📊 Stats</button>
                <button onClick={() => nav('/settings')} className="w-full rounded-[24px] bg-[#8338ec] px-5 py-4 text-left text-white shadow-lg">⚙ Settings</button>
              </div>
            </div>

            <div className="dashboard-card bg-gradient-to-br from-[#f1f6ff] to-[#e8f4ff] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2d4d72]">Rank board</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[24px] bg-white/95 p-4 shadow-sm border border-[#d8e5ff]">
                  <p className="text-sm text-[#4a5d81]">Next badge</p>
                  <p className="mt-2 text-xl font-bold text-[#173056]">{nextBadgeLabel}</p>
                </div>
                <div className="rounded-[24px] bg-white/95 p-4 shadow-sm border border-[#d8e5ff]">
                  <p className="text-sm text-[#4a5d81]">Current streak</p>
                  <p className="mt-2 text-xl font-bold text-[#173056]">5 days</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
