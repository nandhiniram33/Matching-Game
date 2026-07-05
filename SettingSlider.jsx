import React from 'react'

export default function SettingSlider({ setting, value, onChange }){
  return (
    <div className="rounded-[20px] bg-white p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{setting.icon}</span>
        <div>
          <p className="font-semibold text-gray-900">{setting.label}</p>
          {setting.description && <p className="text-sm text-gray-600">{setting.description}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min={setting.min}
          max={setting.max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg appearance-none cursor-pointer accent-purple-500"
          style={{
            background: `linear-gradient(to right, #90be6d 0%, #90be6d ${((value - setting.min) / (setting.max - setting.min)) * 100}%, #e5e7eb ${((value - setting.min) / (setting.max - setting.min)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{setting.min}{setting.unit}</span>
          <span className="text-lg font-bold text-purple-600">{value}{setting.unit}</span>
          <span className="text-sm text-gray-500">{setting.max}{setting.unit}</span>
        </div>
      </div>
    </div>
  )
}
