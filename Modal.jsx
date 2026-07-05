import React from 'react'

export default function Modal({ children, onClose }){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
      <div className="glass p-6 rounded-lg max-w-lg w-full neon relative">
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  )
}
