import React from 'react'
import { ANIMALS } from '../data/animals'

export default function SettingSelect({ setting, value, onChange }){
  const animals = ANIMALS

  return (
    <div className="rounded-[20px] bg-white p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{setting.icon}</span>
        <div>
          <p className="font-semibold text-gray-900">{setting.label}</p>
          {setting.description && <p className="text-sm text-gray-600">{setting.description}</p>}
        </div>
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {animals.map(animal => (
          <option key={animal.id} value={animal.id}>
            {animal.emoji} {animal.name}
          </option>
        ))}
      </select>

      {value && (
        <div className="mt-3 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-center">
          <div className="text-3xl mb-1">
            {animals.find(a => a.id === value)?.emoji}
          </div>
          <p className="text-sm font-bold text-purple-900">
            {animals.find(a => a.id === value)?.name}
          </p>
        </div>
      )}
    </div>
  )
}
