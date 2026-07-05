import React, { useState } from 'react'
import GameBoard from '../components/GameBoard'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLevel, LEVELS } from '../data/levels'
import { award, markLevelCompleted } from '../utils/progress'
import VictoryModal from '../components/VictoryModal'
import { musicManager } from '../utils/music'
import { loadSettings } from '../utils/settings'

export default function Game(){
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state || {}
  const mode = state.mode || 'easy'
  const levelNum = state.level || 1
  const levelDef = getLevel(mode, levelNum) || (LEVELS[mode] && LEVELS[mode][0])
  const cards = state.cards || (levelDef ? levelDef.cards : null)

  const [paused, setPaused] = useState(false)
  const [seed, setSeed] = useState(Date.now())
  const [showWin, setShowWin] = useState(false)
  const [lastWinData, setLastWinData] = useState(null)
  const [timedOut, setTimedOut] = useState(false)

    // Initialize music on component mount
    React.useEffect(() => {
      const settings = loadSettings()
      if (settings.musicVolume > 0) {
        musicManager.setMasterVolume(settings.masterVolume)
        musicManager.setVolume(settings.musicVolume)
        musicManager.play(settings.musicTrack)
      }
    
      return () => {
        // Stop music when leaving game
        musicManager.stop()
      }
    }, [])
  function handleWin(stats){
    const def = getLevel(mode, levelNum)
    const rewards = def ? def.rewards : { coins: 20, gems: 2 }
    const cardCount = cards || (levelDef ? levelDef.cards : 0)
    const minMoves = Math.ceil(cardCount / 2)
    let earnedCoins = rewards.coins || 0
    let earnedGems = rewards.gems || 0
    let earnedStars = 5

    if (stats.moves <= minMoves + 1) {
      earnedStars += 5
      earnedCoins += 10
    }

    if (stats.moves === minMoves) {
      earnedStars += 10
      earnedCoins += 20
    }

    if (stats.time <= cardCount * 3) {
      earnedStars += 3
    }

    if (stats.combo >= 3) {
      earnedStars += Math.min(6, stats.combo * 2)
      earnedCoins += 10
    }

    award({ coins: earnedCoins, gems: earnedGems, stars: earnedStars })
    markLevelCompleted(mode, levelNum)
    setLastWinData({ stats, rewards: { coins: earnedCoins, gems: earnedGems, stars: earnedStars } })
    setTimedOut(false)
    setShowWin(true)
  }

  function handleTimeout(stats){
    setLastWinData({ stats, rewards: { coins: 0, gems: 0, stars: 0 } })
    setTimedOut(true)
    setShowWin(true)
  }

  function handleNext(){
    setShowWin(false)
    // determine next level
    const nextLevel = levelNum + 1
    const list = LEVELS[mode] || []
    const nextDef = list.find(l=> l.level === nextLevel)
    if(nextDef){
      navigate('/play', { state: { mode, level: nextLevel, cards: nextDef.cards } })
    } else {
      // completed mode
      // navigate back to levels screen
      navigate('/levels')
    }
  }

  return (
    <div className="game-page min-h-screen px-4 py-6">
      <div className="jungle-decor decor-top-left" />
      <div className="jungle-decor decor-top-right" />
      <div className="jungle-decor decor-bottom-left" />
      <div className="jungle-decor decor-bottom-right" />

      <div className="game-page-wrapper mx-auto max-w-7xl space-y-6">
        <section className="game-page-header glass overflow-hidden">
          <div className="header-main">
            <div>
              <div className="difficulty-pill">🌿 {mode.toUpperCase()}</div>
              <h1 className="level-title">Level {levelNum}</h1>
              <p className="level-text">Complete the jungle challenge and show the animals how clever you are!</p>
            </div>

            <div className="header-actions">
              <button onClick={() => setPaused(p => !p)} className="action-btn pause-btn">{paused ? 'Resume' : 'Pause'}</button>
              <button onClick={() => { setPaused(false); setSeed(Date.now()) }} className="action-btn restart-btn">Restart</button>
            </div>
          </div>

          <div className="mascot-card">
            <div className="mascot-face">🐯</div>
            <p className="mascot-text">Ready to roar?</p>
          </div>
        </section>

        <section className="game-board-section glass p-5 sm:p-6">
          <GameBoard key={`${mode}-${levelNum}-${seed}`} difficulty={mode} paused={paused} cardsCount={cards} onWin={handleWin} onTimeout={handleTimeout} />
        </section>
      </div>

      {showWin && <VictoryModal
        title={timedOut ? '⏱️ Time‘s Up!' : undefined}
        subtitle={timedOut ? 'The timer expired. Tap OK to continue to the next level.' : undefined}
        stats={lastWinData?.stats}
        rewards={lastWinData?.rewards}
        onClose={timedOut ? handleNext : () => setShowWin(false)}        onOk={() => navigate('/levels')}        onNext={handleNext}
        okText={timedOut ? 'Next Level' : 'OK'}
        showNext={!timedOut}
        nextLabel={levelNum < (LEVELS[mode] || []).length ? 'Next Level' : 'Back to Worlds'}
      />}
    </div>
  )
}
