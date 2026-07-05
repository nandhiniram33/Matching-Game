const ANIMALS = [
  { id: 'lion', emoji: '🦁' },
  { id: 'panda', emoji: '🐼' },
  { id: 'elephant', emoji: '🐘' },
  { id: 'tiger', emoji: '🐯' },
  { id: 'rabbit', emoji: '🐰' },
  { id: 'dog', emoji: '🐶' },
  { id: 'cat', emoji: '🐱' },
  { id: 'monkey', emoji: '🐵' },
  { id: 'fox', emoji: '🦊' },
  { id: 'penguin', emoji: '🐧' },
  { id: 'frog', emoji: '🐸' },
  { id: 'koala', emoji: '🐨' },
  { id: 'giraffe', emoji: '🦒' },
  { id: 'owl', emoji: '🦉' },
  { id: 'sloth', emoji: '🦥' },
  { id: 'parrot', emoji: '🦜' },
  { id: 'zebra', emoji: '🦓' },
  { id: 'hippo', emoji: '🦛' },
  { id: 'rhino', emoji: '🦏' },
  { id: 'otter', emoji: '🦦' },
  { id: 'butterfly', emoji: '🦋' },
  { id: 'peacock', emoji: '🦚' },
  { id: 'elephant2', emoji: '🐘' },
  { id: 'otter2', emoji: '🦦' },
  { id: 'koala2', emoji: '🐨' },
  { id: 'camel', emoji: '🐪' },
  { id: 'llama', emoji: '🦙' },
  { id: 'chipmunk', emoji: '🐿️' },
  { id: 'flamingo', emoji: '🦩' },
  { id: 'crab', emoji: '🦀' },
  { id: 'octopus', emoji: '🐙' },
  { id: 'whale', emoji: '🐋' },
  { id: 'dolphin', emoji: '🐬' },
  { id: 'bee', emoji: '🐝' },
  { id: 'squirrel', emoji: '🐿' },
  { id: 'rabbit2', emoji: '🐇' },
  { id: 'hedgehog', emoji: '🦔' },
  { id: 'frog2', emoji: '🐸' },
  { id: 'turtle', emoji: '🐢' },
  { id: 'meerkat', emoji: '🦡' }
]

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

export function generateDeck(difficulty='medium'){
  // support numeric card counts or difficulty keys
  let size
  if(typeof difficulty === 'number') size = difficulty
  else size = difficulty === 'easy' ? 8 : difficulty === 'medium' ? 18 : difficulty === 'hard' ? 32 : 80
  const pairs = Math.min(Math.ceil(size / 2), ANIMALS.length)
  const pool = [...ANIMALS].slice(0, pairs)
  const deck = []
  pool.forEach(a=>{
    deck.push({...a})
    deck.push({...a})
  })
  shuffle(deck)
  // if deck is larger than requested (odd sizes), cut to requested size
  if(typeof size === 'number' && deck.length > size){
    return deck.slice(0, size)
  }
  return deck
}
