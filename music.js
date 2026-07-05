/**
 * Music System for Animal Kingdom Game
 * Handles background music playback with volume control
 */

const MUSIC_TRACKS = {
  JUNGLE_ADVENTURE: 'jungle-adventure',
  RAINFOREST: 'rainforest',
  RELAXING_NATURE: 'relaxing-nature',
  EPIC_BATTLE: 'epic-battle'
}

class MusicManager {
  constructor() {
    this.currentTrack = null
    this.audioContext = null
    this.oscillators = []
    this.gainNodes = []
    this.masterGain = null
    this.isPlaying = false
    this.currentTrackName = MUSIC_TRACKS.JUNGLE_ADVENTURE
  }

  initAudioContext() {
    if (!this.audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      this.audioContext = new AudioContext()
      this.masterGain = this.audioContext.createGain()
      this.masterGain.connect(this.audioContext.destination)
    }
  }

  // Generate a simple melody using Web Audio API
  generateMelody(notes, duration = 0.5) {
    if (!this.audioContext) return

    const now = this.audioContext.currentTime
    
    notes.forEach((note, index) => {
      const osc = this.audioContext.createOscillator()
      const gain = this.audioContext.createGain()
      
      osc.type = 'sine'
      osc.frequency.value = note
      
      gain.gain.setValueAtTime(0.1, now + index * duration)
      gain.gain.exponentialRampToValueAtTime(0.01, now + (index + 1) * duration)
      
      osc.connect(gain)
      gain.connect(this.masterGain)
      
      osc.start(now + index * duration)
      osc.stop(now + (index + 1) * duration)
      
      this.oscillators.push(osc)
      this.gainNodes.push(gain)
    })
  }

  playJungleAdventure() {
    // Jungle rhythm - energetic and playful
    const baseNotes = [
      262, 330, 262, 330, // C-E pattern
      294, 330, 262, 330  // D-E pattern
    ]
    
    const loop = () => {
      if (this.isPlaying && this.currentTrackName === MUSIC_TRACKS.JUNGLE_ADVENTURE) {
        this.generateMelody(baseNotes, 0.3)
        setTimeout(loop, 2400) // Loop every 2.4 seconds
      }
    }
    
    loop()
  }

  playRainforest() {
    // Peaceful rainforest - ambient and relaxing
    const baseNotes = [
      330, 392, 330, 392, // E-G pattern
      349, 392, 349, 392  // F-G pattern
    ]
    
    const loop = () => {
      if (this.isPlaying && this.currentTrackName === MUSIC_TRACKS.RAINFOREST) {
        this.generateMelody(baseNotes, 0.4)
        setTimeout(loop, 3200) // Loop every 3.2 seconds
      }
    }
    
    loop()
  }

  playRelaxingNature() {
    // Slow and calming
    const baseNotes = [
      262, 294, 330, 349, // C-D-E-F ascending
      330, 294, 262, 294  // Back down
    ]
    
    const loop = () => {
      if (this.isPlaying && this.currentTrackName === MUSIC_TRACKS.RELAXING_NATURE) {
        this.generateMelody(baseNotes, 0.5)
        setTimeout(loop, 4000) // Loop every 4 seconds
      }
    }
    
    loop()
  }

  playEpicBattle() {
    // Intense and dramatic
    const baseNotes = [
      330, 330, 392, 330, // E-E-G-E pattern
      440, 392, 440, 392  // A-G pattern
    ]
    
    const loop = () => {
      if (this.isPlaying && this.currentTrackName === MUSIC_TRACKS.EPIC_BATTLE) {
        this.generateMelody(baseNotes, 0.25)
        setTimeout(loop, 2000) // Loop every 2 seconds
      }
    }
    
    loop()
  }

  play(trackName = MUSIC_TRACKS.JUNGLE_ADVENTURE) {
    this.initAudioContext()
    
    if (this.isPlaying && this.currentTrackName === trackName) {
      return // Already playing this track
    }
    
    this.currentTrackName = trackName
    this.isPlaying = true

    switch(trackName) {
      case MUSIC_TRACKS.JUNGLE_ADVENTURE:
        this.playJungleAdventure()
        break
      case MUSIC_TRACKS.RAINFOREST:
        this.playRainforest()
        break
      case MUSIC_TRACKS.RELAXING_NATURE:
        this.playRelaxingNature()
        break
      case MUSIC_TRACKS.EPIC_BATTLE:
        this.playEpicBattle()
        break
      default:
        this.playJungleAdventure()
    }
  }

  stop() {
    this.isPlaying = false
    this.oscillators.forEach(osc => {
      try {
        osc.stop()
      } catch (e) {
        // Oscillator already stopped
      }
    })
    this.oscillators = []
    this.gainNodes = []
  }

  setVolume(volume) {
    if (!this.masterGain) return
    
    // Volume is 0-100, convert to 0-1
    const normalizedVolume = Math.max(0, Math.min(1, volume / 100))
    this.masterGain.gain.setTargetAtTime(normalizedVolume, this.audioContext.currentTime, 0.1)
  }

  setMasterVolume(volume) {
    this.setVolume(volume)
  }

  getCurrentTrack() {
    return this.currentTrackName
  }

  getMusicTracks() {
    return [
      { id: MUSIC_TRACKS.JUNGLE_ADVENTURE, label: '🎵 Jungle Adventure', emoji: '🌴' },
      { id: MUSIC_TRACKS.RAINFOREST, label: '🎵 Rainforest', emoji: '🌧️' },
      { id: MUSIC_TRACKS.RELAXING_NATURE, label: '🎵 Relaxing Nature', emoji: '🌿' },
      { id: MUSIC_TRACKS.EPIC_BATTLE, label: '🎵 Epic Battle', emoji: '⚔️' }
    ]
  }
}

// Create singleton instance
export const musicManager = new MusicManager()

// Export for convenience
export { MUSIC_TRACKS }
