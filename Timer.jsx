import React, { useEffect, useState } from 'react'

export default function Timer({ initial=90, paused=false }){
  const [time, setTime] = useState(initial)

  useEffect(()=>{
    if(paused) return
    const t = setInterval(()=>{
      setTime(t=> Math.max(0, t-1))
    }, 1000)
    return ()=> clearInterval(t)
  },[paused])

  const pct = Math.round((time/initial)*100)
  return (
    <div className="flex items-center gap-2">
      <svg width="48" height="48" viewBox="0 0 36 36">
        <path d="M18 2a16 16 0 1 0 0 32 16 16 0 1 0 0-32" fill="none" stroke="#213141" strokeWidth="3" />
        <circle r="14" cx="18" cy="18" fill="none" stroke="#7c5cff" strokeWidth="3" strokeDasharray={`${(pct/100)*88} 88`} transform="rotate(-90 18 18)" />
      </svg>
      <div>{time}s</div>
    </div>
  )
}
