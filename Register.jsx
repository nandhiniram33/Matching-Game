import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const avatars = ['🐼', '🦁', '🐵', '🐰', '🦊']

export default function Register(){
  const nav = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [selected, setSelected] = useState(avatars[0])
  const [registered, setRegistered] = useState(false)

  if(registered){
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        <div className="success-panel w-full max-w-md rounded-[36px] bg-white/95 p-8 shadow-[0_24px_80px_rgba(36,105,69,0.12)] border border-[#d8f1d4] text-center">
          <div className="mb-6 text-6xl">🎉</div>
          <h1 className="text-3xl font-bold text-slate-900">Registration complete!</h1>
          <p className="mt-4 text-slate-600">Your new jungle explorer account is ready. Tap below to sign in and start playing.</p>
          <button
            onClick={() => nav('/login')}
            className="mt-8 rounded-full bg-gradient-to-r from-[#ffb703] to-[#fb8500] px-8 py-4 text-lg font-semibold text-slate-950 shadow-xl"
          >
            Go to Login Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl rounded-[36px] bg-white/95 p-8 shadow-[0_24px_80px_rgba(36,105,69,0.12)] border border-[#d8f1d4]">
        <div className="mb-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f7ea] px-4 py-2 text-sm font-semibold text-[#1a5b2c]">
            <span>🌿</span>
            Choose your avatar and join the adventure
          </p>
          <h1 className="mt-6 text-4xl font-bold text-slate-900">Register your jungle account</h1>
          <p className="mt-3 text-slate-600">Create a fun profile with a cute animal avatar.</p>
        </div>

        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Username</label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-[#d4e9d4] bg-[#f8fff4] px-4 py-3 shadow-sm outline-none focus:border-[#90be6d]"
              placeholder="JungleHero"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-[#d4e9d4] bg-[#f8fff4] px-4 py-3 shadow-sm outline-none focus:border-[#90be6d]"
              placeholder="hello@jungle.com"
              type="email"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Password</label>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-[#d4e9d4] bg-[#f8fff4] px-4 py-3 shadow-sm outline-none focus:border-[#90be6d]"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Confirm Password</label>
              <input
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-[#d4e9d4] bg-[#f8fff4] px-4 py-3 shadow-sm outline-none focus:border-[#90be6d]"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">Avatar Selection</p>
            <div className="avatar-select mt-3">
              {avatars.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  className={selected === emoji ? 'active' : ''}
                  onClick={() => setSelected(emoji)}
                >
                  <span>{emoji}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setRegistered(true)}
              className="rounded-full bg-gradient-to-r from-[#ffb703] to-[#fb8500] px-6 py-4 text-lg font-semibold text-slate-950 shadow-xl"
            >
              Register
            </button>
            <button
              onClick={() => nav('/login')}
              className="rounded-full border-2 border-[#90be6d] bg-white px-6 py-4 text-lg font-semibold text-[#1b3b2b] shadow-lg"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
