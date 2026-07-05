import React from 'react'

export default function SettingToggle({ setting, value, onChange, locked = false }){
  return (
    <div className={`rounded-[20px] bg-white p-4 shadow-sm border border-gray-100 ${locked ? 'opacity-50' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{setting.icon}</span>
            <div>
              <p className="font-semibold text-gray-900">{setting.label}</p>
              {setting.description && <p className="text-sm text-gray-600">{setting.description}</p>}
              {locked && <p className="text-xs text-purple-600 font-bold">👑 Premium</p>}
            </div>
          </div>
        </div>
        <button
          onClick={() => !locked && onChange(!value)}
          disabled={locked}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
            value ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gray-300'
          } ${locked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition ${
              value ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  )
}
