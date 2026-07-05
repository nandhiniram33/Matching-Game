export const RARITIES = {
  COMMON: { label: '⚪ Common', color: '#888888', multiplier: 1 },
  RARE: { label: '🟢 Rare', color: '#2ecc71', multiplier: 1.5 },
  EPIC: { label: '🔵 Epic', color: '#3498db', multiplier: 2 },
  LEGENDARY: { label: '🟣 Legendary', color: '#9b59b6', multiplier: 3 },
  MYTHIC: { label: '🟡 Mythic', color: '#f39c12', multiplier: 4 }
}

export const ANIMALS = [
  {
    id: 'panda',
    emoji: '🐼',
    name: 'Panda',
    rarity: RARITIES.COMMON,
    starsCost: 100,
    diamondsCost: 10,
    description: 'Gentle giant of the bamboo forest'
  },
  {
    id: 'lion',
    emoji: '🦁',
    name: 'Lion',
    rarity: RARITIES.RARE,
    starsCost: 200,
    diamondsCost: 20,
    description: 'King of the jungle with a mighty roar'
  },
  {
    id: 'tiger',
    emoji: '🐯',
    name: 'Tiger',
    rarity: RARITIES.EPIC,
    starsCost: 400,
    diamondsCost: 40,
    description: 'Striped hunter of the wild'
  },
  {
    id: 'dragon',
    emoji: '🐲',
    name: 'Dragon',
    rarity: RARITIES.LEGENDARY,
    starsCost: 800,
    diamondsCost: 80,
    description: 'Mythical beast of legends'
  },
  {
    id: 'unicorn',
    emoji: '🦄',
    name: 'Unicorn',
    rarity: RARITIES.MYTHIC,
    starsCost: 1500,
    diamondsCost: 150,
    description: 'Magical creature from dreams'
  },
  {
    id: 'elephant',
    emoji: '🐘',
    name: 'Elephant',
    rarity: RARITIES.COMMON,
    starsCost: 120,
    diamondsCost: 12,
    description: 'Majestic tusked wanderer'
  },
  {
    id: 'giraffe',
    emoji: '🦒',
    name: 'Giraffe',
    rarity: RARITIES.RARE,
    starsCost: 220,
    diamondsCost: 22,
    description: 'Tallest animal with spotted coat'
  },
  {
    id: 'monkey',
    emoji: '🐵',
    name: 'Monkey',
    rarity: RARITIES.COMMON,
    starsCost: 90,
    diamondsCost: 9,
    description: 'Playful tree swinger'
  },
  {
    id: 'eagle',
    emoji: '🦅',
    name: 'Eagle',
    rarity: RARITIES.RARE,
    starsCost: 250,
    diamondsCost: 25,
    description: 'Soaring predator of the skies'
  },
  {
    id: 'shark',
    emoji: '🦈',
    name: 'Shark',
    rarity: RARITIES.EPIC,
    starsCost: 450,
    diamondsCost: 45,
    description: 'Ancient ocean predator'
  },
  {
    id: 'phoenix',
    emoji: '🔥',
    name: 'Phoenix',
    rarity: RARITIES.LEGENDARY,
    starsCost: 900,
    diamondsCost: 90,
    description: 'Reborn from flames'
  },
  {
    id: 'penguin',
    emoji: '🐧',
    name: 'Penguin',
    rarity: RARITIES.COMMON,
    starsCost: 110,
    diamondsCost: 11,
    description: 'Cute waddler of ice lands'
  },
  {
    id: 'bear',
    emoji: '🐻',
    name: 'Bear',
    rarity: RARITIES.RARE,
    starsCost: 210,
    diamondsCost: 21,
    description: 'Powerful forest guardian'
  },
  {
    id: 'wolf',
    emoji: '🐺',
    name: 'Wolf',
    rarity: RARITIES.EPIC,
    starsCost: 380,
    diamondsCost: 38,
    description: 'Mysterious night hunter'
  },
  {
    id: 'kraken',
    emoji: '🐙',
    name: 'Kraken',
    rarity: RARITIES.LEGENDARY,
    starsCost: 1000,
    diamondsCost: 100,
    description: 'Tentacled deep sea monster'
  }
]

export const COLLECTION_REWARDS = [
  { required: 5, reward: { stars: 100, message: '🎉 Collect 5 Animals' } },
  { required: 10, reward: { diamonds: 50, message: '🎉 Collect 10 Animals' } },
  { required: 15, reward: { stars: 250, message: '🎉 Collect 15 Animals' } },
  { required: 20, reward: { diamonds: 100, message: '🎉 Collect All Animals' } }
]

export const DAILY_SHOP = [
  {
    id: 'daily-1',
    animal: 'tiger',
    discount: 50,
    refreshTime: 24 * 60 * 60 * 1000
  },
  {
    id: 'daily-2',
    animal: 'unicorn',
    discount: 0,
    refreshTime: 24 * 60 * 60 * 1000
  }
]
