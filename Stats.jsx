import React from 'react'

export default function Stats(){
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass p-4 rounded-2xl">Total games played: 0</div>
        <div className="glass p-4 rounded-2xl">Accuracy: 0%</div>
      </div>
    </div>
  )
}
