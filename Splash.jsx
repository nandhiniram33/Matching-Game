import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const animals = [
  { label: 'Panda', emoji: '🐼' },
  { label: 'Lion', emoji: '🦁' },
  { label: 'Monkey', emoji: '🐵' },
  { label: 'Rabbit', emoji: '🐰' },
  { label: 'Fox', emoji: '🦊' }
]

export default function Splash(){
  const nav = useNavigate()
  return (
    <div className="landing-scene min-h-screen">
      <div className="cloud cloud--1" />
      <div className="cloud cloud--2" />
      <div className="cloud cloud--3" />
      <div className="bird bird--1" />
      <div className="bird bird--2" />
      <div className="bird bird--3" />
      <div className="tree-row">
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl rounded-[40px] bg-white/90 p-8 shadow-[0_25px_80px_rgba(29,93,38,0.18)] border border-[#ffe1a3]"
        >
          <div className="hero-label mb-6 inline-flex items-center gap-3 text-sm font-semibold text-[#4d3b24]">
            <span>🌈</span>
            <span>Animal Kingdom Adventure</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Match animals. Unlock achievements. Become jungle champion.
                </p>
                <p className="mt-4 max-w-xl text-lg text-slate-600">
                  A bright jungle memory game for kids with playful cards, colorful rewards, and friendly animal companions.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => nav('/login')}
                  className="hero-button rounded-full bg-gradient-to-r from-[#8338ec] via-[#ff5d8f] to-[#fb8500] px-8 py-4 text-lg font-semibold text-white shadow-xl"
                >
                  Login / Register
                </button>
                <button
                  onClick={() => nav('/home')}
                  className="hero-button rounded-full border-2 border-[#90be6d] bg-white px-8 py-4 text-lg font-semibold text-[#1b3b2b] shadow-lg"
                >
                  Play as Guest
                </button>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#effbf0] p-6 shadow-[0_16px_48px_rgba(47,86,41,0.12)]">
              <div className="mb-4 flex items-center gap-3 text-[#1f472c]">
                <span className="text-2xl">🦜</span>
                <span className="font-semibold text-lg">Jungle Friends</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {animals.map(a => (
                  <div key={a.label} className="rounded-[28px] bg-white/95 p-4 text-center shadow-sm transition hover:-translate-y-1">
                    <div className="mb-2 text-5xl">{a.emoji}</div>
                    <div className="font-semibold text-slate-700">{a.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-600">Hover one to see them jump, wave, and smile!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
