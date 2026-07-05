import React from 'react'

export default function SettingRadio({ setting, value, onChange }){
  return (
    <div className="rounded-[20px] bg-white p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{setting.icon}</span>
        <p className="font-semibold text-gray-900">{setting.label}</p>
      </div>

      <div className="space-y-2">
        {setting.options.map(option => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition">
            <input
              type="radio"
              name={setting.id}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 accent-purple-600 cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
