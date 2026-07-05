import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SettingToggle from '../components/SettingToggle'
import SettingSlider from '../components/SettingSlider'
import SettingRadio from '../components/SettingRadio'
import SettingSelect from '../components/SettingSelect'
import { SETTINGS_CONFIG } from '../data/settings'
import { loadSettings, updateSetting, resetSettings, applySettings } from '../utils/settings'
import { musicManager, MUSIC_TRACKS } from '../utils/music'

export default function Settings(){
  const nav = useNavigate()
  const [settings, setSettings] = useState({})
  const [activeCategory, setActiveCategory] = useState('audio')
  const [showReset, setShowReset] = useState(false)

  useEffect(() => {
    const loaded = loadSettings()
    setSettings(loaded)
    applySettings(loaded)
     // Start music on component mount
     if (loaded.musicVolume > 0) {
       musicManager.setVolume(loaded.musicVolume)
       musicManager.play(loaded.musicTrack)
     }
  }, [])

  function handleSettingChange(settingId, value) {
    const updated = updateSetting(settingId, value)
    setSettings(updated)
    applySettings(updated)
   
     // Handle music-specific changes
     if (settingId === 'musicVolume') {
       musicManager.setVolume(value)
       if (value === 0) {
         musicManager.stop()
       } else if (!musicManager.isPlaying) {
         musicManager.play(updated.musicTrack)
       }
     } else if (settingId === 'musicTrack') {
       if (updated.musicVolume > 0) {
         musicManager.play(value)
       }
     } else if (settingId === 'masterVolume') {
       musicManager.setMasterVolume(value)
     }
  }

  function handleReset() {
    const defaults = resetSettings()
    setSettings(defaults)
    applySettings(defaults)
    setShowReset(false)
  }

  const categories = Object.keys(SETTINGS_CONFIG)
  const currentCategory = SETTINGS_CONFIG[activeCategory]

  const renderSetting = (setting) => {
    const value = settings[setting.id]

    switch(setting.type) {
      case 'slider':
        return (
          <SettingSlider
            key={setting.id}
            setting={setting}
            value={value}
            onChange={(v) => handleSettingChange(setting.id, v)}
          />
        )
      case 'toggle':
        return (
          <SettingToggle
            key={setting.id}
            setting={setting}
            value={value}
            onChange={(v) => handleSettingChange(setting.id, v)}
            locked={setting.locked}
          />
        )
      case 'radio':
        return (
          <SettingRadio
            key={setting.id}
            setting={setting}
            value={value}
            onChange={(v) => handleSettingChange(setting.id, v)}
          />
        )
      case 'select':
        return (
          <SettingSelect
            key={setting.id}
            setting={setting}
            value={value}
            onChange={(v) => handleSettingChange(setting.id, v)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen px-4 py-6 transition-colors ${settings.darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 via-green-50 to-purple-50'}`}>
      <div className="jungle-decor decor-top-left" />
      <div className="jungle-decor decor-top-right" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className={`glass rounded-3xl p-6 mb-6 neon ${settings.darkMode ? 'bg-gray-800 text-white' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => nav('/home')}
              className="text-2xl hover:scale-110 transition"
            >
              ←
            </button>
            <h1 className="text-3xl font-extrabold">⚙️ Game Settings</h1>
            <div className="text-xl">🎮</div>
          </div>
          <p className={`text-sm ${settings.darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Customize your jungle experience with audio, visuals, and gameplay preferences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {categories.map(cat => {
              const category = SETTINGS_CONFIG[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-3 rounded-full font-bold whitespace-nowrap transition ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : `${settings.darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100'}`
                  }`}
                >
                  {category.icon} {category.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Settings Content */}
        <div className={`glass rounded-3xl p-6 mb-6 neon ${settings.darkMode ? 'bg-gray-800' : ''}`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            {currentCategory.icon} {currentCategory.label}
          </h2>

          <div className="space-y-4">
            {currentCategory.settings.map(setting => renderSetting(setting))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pb-6">
          <button
            onClick={() => setShowReset(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold hover:shadow-lg transition"
          >
            🔄 Reset to Defaults
          </button>
          <button
            onClick={() => nav('/home')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-lg transition"
          >
            ✓ Back to Home
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showReset && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="glass rounded-3xl p-8 max-w-sm neon">
            <h2 className="text-2xl font-bold mb-4 text-center">🔄 Reset Settings?</h2>
            <p className="text-gray-600 text-center mb-6">
              Are you sure? This will restore all settings to their default values.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowReset(false)}
                className="px-6 py-2 rounded-lg bg-gray-300 text-gray-900 font-bold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold hover:shadow-lg transition"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
