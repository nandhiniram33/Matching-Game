export const SETTINGS_CONFIG = {
  audio: {
    label: '🔊 Audio',
    icon: '🔊',
    settings: [
      {
        id: 'masterVolume',
        label: 'Master Volume',
        icon: '🔊',
        type: 'slider',
        min: 0,
        max: 100,
        default: 80,
        unit: '%'
      },
      {
        id: 'musicVolume',
        label: 'Background Music',
        icon: '🎵',
        type: 'slider',
        min: 0,
        max: 100,
        default: 60,
        unit: '%',
        description: 'Jungle Adventure, Rainforest, Relaxing Nature, Epic Battle'
      },
       {
         id: 'musicTrack',
         label: 'Music Track',
         icon: '🎶',
         type: 'radio',
         default: 'jungle-adventure',
         options: [
           { value: 'jungle-adventure', label: '🌴 Jungle Adventure' },
           { value: 'rainforest', label: '🌧️ Rainforest' },
           { value: 'relaxing-nature', label: '🌿 Relaxing Nature' },
           { value: 'epic-battle', label: '⚔️ Epic Battle' }
         ]
       },
      {
        id: 'animalSounds',
        label: 'Animal Sounds',
        icon: '🦁',
        type: 'slider',
        min: 0,
        max: 100,
        default: 70,
        unit: '%',
        description: 'Lion roar, monkey chatter, tiger growl'
      },
      {
        id: 'hapticFeedback',
        label: 'Haptic Feedback',
        icon: '📳',
        type: 'toggle',
        default: true,
        description: 'Vibrate on matches and rewards'
      },
      {
        id: 'realAnimalSounds',
        label: 'Real Animal Sound Pack',
        icon: '🔉',
        type: 'toggle',
        default: false,
        description: 'Use authentic animal recordings'
      }
    ]
  },
  visual: {
    label: '✨ Visual',
    icon: '✨',
    settings: [
      {
        id: 'animationQuality',
        label: 'Animation Quality',
        icon: '✨',
        type: 'radio',
        default: 'medium',
        options: [
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' }
        ]
      },
      {
        id: 'particleEffects',
        label: 'Special Effects',
        icon: '🎊',
        type: 'toggle',
        default: true,
        description: 'Confetti, sparkles, rewards animations'
      },
      {
        id: 'screenShake',
        label: 'Screen Shake',
        icon: '💥',
        type: 'toggle',
        default: true,
        description: 'Shake during big wins'
      },
      {
        id: 'darkMode',
        label: 'Dark Jungle Theme',
        icon: '🌙',
        type: 'toggle',
        default: false,
        description: 'Easy on the eyes for night gaming'
      }
    ]
  },
  gameplay: {
    label: '🎮 Gameplay',
    icon: '🎮',
    settings: [
      {
        id: 'difficulty',
        label: 'Difficulty',
        icon: '🎯',
        type: 'radio',
        default: 'normal',
        options: [
          { value: 'easy', label: 'Easy' },
          { value: 'normal', label: 'Normal' },
          { value: 'hard', label: 'Hard' }
        ]
      },
      {
        id: 'hintDelay',
        label: 'Hint Delay',
        icon: '💡',
        type: 'radio',
        default: '10sec',
        options: [
          { value: '5sec', label: '5 seconds' },
          { value: '10sec', label: '10 seconds' },
          { value: '15sec', label: '15 seconds' },
          { value: 'off', label: 'Off' }
        ]
      },
      {
        id: 'purchaseConfirmation',
        label: 'Purchase Confirmation',
        icon: '💎',
        type: 'toggle',
        default: true,
        description: 'Prevent accidental spending'
      },
      {
        id: 'fastRewards',
        label: 'Skip Reward Animations',
        icon: '⚡',
        type: 'toggle',
        default: false,
        description: 'Speed up reward screens'
      }
    ]
  },
  collection: {
    label: '🏆 Collection',
    icon: '🏆',
    settings: [
      {
        id: 'favoriteAnimal',
        label: 'Favorite Animal',
        icon: '❤️',
        type: 'select',
        default: 'panda',
        description: 'Your preferred animal companion'
      },
      {
        id: 'showcaseAnimal',
        label: 'Showcase Animal',
        icon: '🌟',
        type: 'select',
        default: 'tiger',
        description: 'Displayed on your profile'
      }
    ]
  },
  notifications: {
    label: '🔔 Notifications',
    icon: '🔔',
    settings: [
      {
        id: 'dailyReminder',
        label: 'Daily Reward Reminder',
        icon: '🎁',
        type: 'toggle',
        default: true
      },
      {
        id: 'animalUnlock',
        label: 'Animal Ready To Unlock',
        icon: '🐾',
        type: 'toggle',
        default: true
      },
      {
        id: 'eventAlerts',
        label: 'Limited Event Alerts',
        icon: '🔥',
        type: 'toggle',
        default: true
      }
    ]
  },
  accessibility: {
    label: '🌍 Accessibility',
    icon: '🌍',
    settings: [
      {
        id: 'textSize',
        label: 'Text Size',
        icon: '🔠',
        type: 'radio',
        default: 'medium',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' }
        ]
      },
      {
        id: 'colorBlindMode',
        label: 'Color Blind Mode',
        icon: '🎨',
        type: 'radio',
        default: 'normal',
        options: [
          { value: 'normal', label: 'Normal' },
          { value: 'deuteranopia', label: 'Red-Green' },
          { value: 'protanopia', label: 'Protanopia' },
          { value: 'tritanopia', label: 'Blue-Yellow' }
        ]
      },
      {
        id: 'reduceMotion',
        label: 'Reduce Animations',
        icon: '🚶',
        type: 'toggle',
        default: false,
        description: 'Minimize motion and transitions'
      }
    ]
  },
  premium: {
    label: '👑 VIP Settings',
    icon: '👑',
    settings: [
      {
        id: 'goldUITheme',
        label: 'Golden UI Theme',
        icon: '✨',
        type: 'toggle',
        default: false,
        locked: true,
        description: 'Premium exclusive theme'
      },
      {
        id: 'exclusiveSounds',
        label: 'Exclusive Animal Sounds',
        icon: '🎙️',
        type: 'toggle',
        default: false,
        locked: true
      },
      {
        id: 'customBackground',
        label: 'Custom Backgrounds',
        icon: '🖼️',
        type: 'toggle',
        default: false,
        locked: true
      },
      {
        id: 'animatedAvatar',
        label: 'Animated Avatars',
        icon: '🎬',
        type: 'toggle',
        default: false,
        locked: true
      }
    ]
  }
}
