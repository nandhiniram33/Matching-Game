const STORAGE_KEY = 'ak_progress_v1'

const defaultProgress = () => ({
  coins: 0,
  gems: 0,
  stars: 0,
  completed: {
    easy: [],
    medium: [],
    hard: [],
    master: []
  },
  animals: {},
  collectionRewardsGiven: []
})

const BADGES = [
  { title: 'Easy Master', emoji: '🥉', bg: 'from-[#ffefd5] to-[#ffe9cd]', difficulty: 'easy', requiredLevels: 18, description: 'Complete all 18 Easy levels.' },
  { title: 'Medium Master', emoji: '🥈', bg: 'from-[#d3f9ff] to-[#d8fff1]', difficulty: 'medium', requiredLevels: 15, description: 'Complete all 15 Medium levels.' },
  { title: 'Hard Master', emoji: '🥇', bg: 'from-[#fff2cc] to-[#ffe2b3]', difficulty: 'hard', requiredLevels: 10, description: 'Complete all 10 Hard levels.' },
  { title: 'Ultimate Champion', emoji: '🏆', bg: 'from-[#ffd6e4] to-[#ffe9f4]', difficulty: 'master', requiredLevels: 10, description: 'Complete all 10 Master levels.' }
]

export function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : defaultProgress()
  }catch(e){
    return defaultProgress()
  }
}

export function saveProgress(progress){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function getResources(){
  const p = loadProgress()
  return {
    coins: p.coins || 0,
    gems: p.gems || 0,
    stars: p.stars || 0
  }
}

export function countCompletedLevelsByDifficulty(){
  const p = loadProgress()
  return {
    easy: (p.completed.easy || []).filter(Boolean).length,
    medium: (p.completed.medium || []).filter(Boolean).length,
    hard: (p.completed.hard || []).filter(Boolean).length,
    master: (p.completed.master || []).filter(Boolean).length
  }
}

export function getBadgeProgress(){
  const completed = countCompletedLevelsByDifficulty()
  const nextBadge = BADGES.find(badge => completed[badge.difficulty] < badge.requiredLevels) || null
  return { completed, nextBadge }
}

export function getBadges(){
  const completed = countCompletedLevelsByDifficulty()
  return BADGES.map(badge => ({
    ...badge,
    unlocked: completed[badge.difficulty] >= badge.requiredLevels
  }))
}

export function markLevelCompleted(mode, level){
  const p = loadProgress()
  p.completed[mode] = p.completed[mode] || []
  p.completed[mode][level-1] = true
  saveProgress(p)
  return p
}

export function isLevelUnlocked(mode, level){
  const p = loadProgress()
  if(level === 1) return true
  return !!p.completed[mode] && !!p.completed[mode][level-2]
}

export function award(progressDelta){
  const p = loadProgress()
  p.coins = (p.coins || 0) + (progressDelta.coins || 0)
  p.gems = (p.gems || 0) + (progressDelta.gems || 0)
  p.stars = (p.stars || 0) + (progressDelta.stars || progressDelta.xp || 0)
  saveProgress(p)
  return p
}

export function unlockAnimal(animalId){
  const p = loadProgress()
  if(!p.animals) p.animals = {}
  p.animals[animalId] = {
    owned: true,
    level: 1,
    unlockedAt: new Date().toISOString()
  }
  saveProgress(p)
  return p
}

export function getOwnedAnimals(){
  const p = loadProgress()
  return Object.keys(p.animals || {}).filter(id => p.animals[id].owned)
}

export function getAnimalInfo(animalId){
  const p = loadProgress()
  return p.animals?.[animalId] || null
}

export function upgradeAnimal(animalId){
  const p = loadProgress()
  if(p.animals?.[animalId]){
    p.animals[animalId].level = (p.animals[animalId].level || 1) + 1
    saveProgress(p)
  }
  return p
}

export function spendResources(cost){
  const p = loadProgress()
  if(cost.stars && p.stars >= cost.stars){
    p.stars -= cost.stars
  }else if(cost.diamonds && p.gems >= cost.diamonds){
    p.gems -= cost.diamonds
  }else{
    return false
  }
  saveProgress(p)
  return true
}

export function resetProgress(){
  saveProgress(defaultProgress())
}
