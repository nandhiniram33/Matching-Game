import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard'
import { ANIMALS, COLLECTION_REWARDS } from '../data/animals'
import { getResources, loadProgress, unlockAnimal, spendResources, getOwnedAnimals } from '../utils/progress'

export default function Collection(){
  const nav = useNavigate()
  const [resources, setResources] = useState({ coins: 0, gems: 0, stars: 0 })
  const [owned, setOwned] = useState([])
  const [filter, setFilter] = useState('all')
  const [toastMsg, setToastMsg] = useState('')
  const [showDailyShop, setShowDailyShop] = useState(false)

  useEffect(() => {
    refreshData()
    const onFocus = () => refreshData()
    window.addEventListener('focus', onFocus)
    return () => window.removeEventListener('focus', onFocus)
  }, [])

  function refreshData(){
    setResources(getResources())
    setOwned(getOwnedAnimals())
  }

  function handleUnlock(animalId, currency){
    const animal = ANIMALS.find(a => a.id === animalId)
    if(!animal) return

    const cost = currency === 'stars' ? animal.starsCost : animal.diamondsCost
    const resourceName = currency === 'stars' ? 'stars' : 'gems'

    if(resources[resourceName] >= cost){
      if(spendResources({[resourceName === 'stars' ? 'stars' : 'diamonds']: cost})){
        unlockAnimal(animalId)
        refreshData()
        setToastMsg(`🎉 ${animal.name} unlocked!`)
        setTimeout(() => setToastMsg(''), 2500)
      }
    }else{
      setToastMsg(`❌ Not enough ${resourceName}!`)
      setTimeout(() => setToastMsg(''), 2500)
    }
  }

  const ownedCount = owned.length
  const totalCount = ANIMALS.length
  const collectionPercent = Math.round((ownedCount / totalCount) * 100)

  const filteredAnimals = filter === 'all' 
    ? ANIMALS 
    : filter === 'owned' 
    ? ANIMALS.filter(a => owned.includes(a.id))
    : filter === 'common'
    ? ANIMALS.filter(a => owned.includes(a.id) ? a.rarity.label.includes('Common') : false)
    : ANIMALS

  const unlockedRewards = (loadProgress().collectionRewardsGiven || [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-yellow-50 to-orange-100 px-4 py-6">
      <div className="jungle-decor decor-top-left" />
      <div className="jungle-decor decor-top-right" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="glass rounded-3xl p-6 mb-6 neon">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => nav('/home')}
              className="text-2xl hover:scale-110 transition"
            >
              ←
            </button>
            <h1 className="text-3xl font-extrabold">🎪 Animal Collection</h1>
            <div className="text-xl">🎮</div>
          </div>

          {/* Resources Bar */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl p-3 text-center">
              <div className="text-2xl">⭐</div>
              <div className="font-bold">{resources.stars}</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-100 to-blue-200 rounded-xl p-3 text-center">
              <div className="text-2xl">💎</div>
              <div className="font-bold">{resources.gems}</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-200 rounded-xl p-3 text-center">
              <div className="text-2xl">🪙</div>
              <div className="font-bold">{resources.coins}</div>
            </div>
          </div>

          {/* Collection Progress */}
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Collection Progress</span>
              <span className="text-sm font-bold text-purple-600">{ownedCount}/{totalCount}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-400 to-pink-500 h-full transition-all duration-300"
                style={{ width: `${collectionPercent}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 mt-2">{collectionPercent}% Complete</div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="glass rounded-3xl p-6 mb-6 neon">
          <h2 className="text-2xl font-bold mb-4">🏆 Collection Rewards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {COLLECTION_REWARDS.map((reward, idx) => {
              const unlocked = ownedCount >= reward.required
              const rewardGiven = unlockedRewards.includes(idx)
              return (
                <div 
                  key={idx}
                  className={`rounded-xl p-4 text-center transition ${
                    unlocked 
                      ? 'bg-gradient-to-br from-green-200 to-green-100' 
                      : 'bg-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-sm font-bold mb-1">{reward.required} Animals</div>
                  <div className="text-xl mb-2">
                    {reward.reward.stars && '⭐ ' + reward.reward.stars}
                    {reward.reward.diamonds && '💎 ' + reward.reward.diamonds}
                  </div>
                  {rewardGiven && <div className="text-xs text-green-600 font-bold">✓ Claimed</div>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { label: 'All Animals', value: 'all' },
            { label: '✓ Owned', value: 'owned' },
            { label: '⭐ Common', value: 'common' }
          ].map(btn => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 rounded-full font-bold transition whitespace-nowrap ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Daily Shop Button */}
        <button
          onClick={() => setShowDailyShop(!showDailyShop)}
          className="w-full mb-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold hover:shadow-lg transition"
        >
          🔥 Daily Shop (50% OFF!)
        </button>

        {showDailyShop && (
          <div className="glass rounded-2xl p-4 mb-6 border-2 border-orange-400">
            <h3 className="font-bold text-lg mb-3">✨ Featured Today</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                ANIMALS.find(a => a.id === 'tiger'),
                ANIMALS.find(a => a.id === 'unicorn')
              ].filter(Boolean).map(animal => (
                <div key={animal.id} className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-3">
                  <div className="text-3xl text-center mb-2">{animal.emoji}</div>
                  <div className="text-sm font-bold">{animal.name}</div>
                  <div className="text-xs text-red-600 font-bold mb-2">50% OFF</div>
                  <button
                    onClick={() => handleUnlock(animal.id, 'stars')}
                    className="w-full py-1 rounded text-xs font-bold bg-yellow-400 hover:bg-yellow-500 transition"
                  >
                    {Math.floor(animal.starsCost * 0.5)}⭐
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Animals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {filteredAnimals.map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              owned={owned.includes(animal.id)}
              onUnlock={(currency) => handleUnlock(animal.id, currency)}
              level={loadProgress().animals?.[animal.id]?.level || 1}
            />
          ))}
        </div>
      </div>

      {/* Toast Message */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full font-bold animate-bounce">
          {toastMsg}
        </div>
      )}
    </div>
  )
}
