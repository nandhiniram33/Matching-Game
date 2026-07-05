export const LEVELS = {
  easy: [
    { level: 1, cards: 4, rewards: { coins: 20, gems: 2 } },
    { level: 2, cards: 6, rewards: { coins: 20, gems: 2 } },
    { level: 3, cards: 8, rewards: { coins: 20, gems: 2 } },
    { level: 4, cards: 10, rewards: { coins: 20, gems: 2 } },
    // levels 5-18 -> 12 cards
    ...Array.from({ length: 14 }).map((_, i) => ({ level: 5 + i, cards: 12, rewards: { coins: 20, gems: 2 } }))
  ],
  medium: [
    { level: 1, cards: 8, rewards: { coins: 40, gems: 4 } },
    { level: 2, cards: 10, rewards: { coins: 40, gems: 4 } },
    { level: 3, cards: 12, rewards: { coins: 40, gems: 4 } },
    { level: 4, cards: 14, rewards: { coins: 40, gems: 4 } },
    // 5-15 -> 14 cards
    ...Array.from({ length: 11 }).map((_, i) => ({ level: 5 + i, cards: 14, rewards: { coins: 40, gems: 4 } }))
  ],
  hard: [
    { level: 1, cards: 12, rewards: { coins: 80, gems: 8 } },
    { level: 2, cards: 14, rewards: { coins: 80, gems: 8 } },
    { level: 3, cards: 16, rewards: { coins: 80, gems: 8 } },
    { level: 4, cards: 18, rewards: { coins: 80, gems: 8 } },
    // 5-10 -> 18 cards
    ...Array.from({ length: 6 }).map((_, i) => ({ level: 5 + i, cards: 18, rewards: { coins: 80, gems: 8 } }))
  ],
  master: [
    { level: 1, cards: 16, rewards: { coins: 150, gems: 15 } },
    { level: 2, cards: 18, rewards: { coins: 150, gems: 15 } },
    { level: 3, cards: 20, rewards: { coins: 150, gems: 15 } },
    { level: 4, cards: 22, rewards: { coins: 150, gems: 15 } },
    // 5-10 -> 22 cards
    ...Array.from({ length: 6 }).map((_, i) => ({ level: 5 + i, cards: 22, rewards: { coins: 150, gems: 15 } }))
  ]
}

export function getLevel(mode, levelNumber){
  const list = LEVELS[mode] || []
  return list.find(l => l.level === levelNumber) || null
}
