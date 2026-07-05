import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl rounded-[36px] bg-white/95 p-8 shadow-[0_24px_80px_rgba(36,105,69,0.12)] border border-[#d8f1d4]">
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ffeed1] px-4 py-2 text-sm font-semibold text-[#9b4a05]">
            <span>🐾</span>
            <span>Welcome back explorer!</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900">Login to your jungle dashboard</h1>
          <p className="text-slate-600">Enter your email and password to jump back into the game.</p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-3xl border border-[#d4e9d4] bg-[#f8fff4] px-4 py-3 shadow-sm outline-none focus:border-[#90be6d]"
            placeholder="hello@jungle.com"
            type="email"
          />

          <label className="block text-sm font-semibold text-slate-700">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded-3xl border border-[#d4e9d4] bg-[#f8fff4] px-4 py-3 shadow-sm outline-none focus:border-[#90be6d]"
            placeholder="••••••••"
            type="password"
          />

          <button type="button" className="text-sm font-semibold text-[#5a8f64] hover:text-[#3e6f45]">Forgot password?</button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => nav('/home')}
            className="rounded-full bg-gradient-to-r from-[#90be6d] to-[#8eecf5] px-6 py-4 text-lg font-semibold text-slate-950 shadow-xl"
          >
            Login
          </button>
          <button
            onClick={() => nav('/register')}
            className="rounded-full border-2 border-[#ffb703] bg-white px-6 py-4 text-lg font-semibold text-[#6f4523] shadow-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
