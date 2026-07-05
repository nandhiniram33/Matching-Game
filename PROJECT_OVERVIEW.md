# Matching Game - Project Overview

## 📋 Project Description

**Matching Game** is an interactive animal-themed memory matching card game built with React and Vite. Players flip cards to find matching pairs, with various difficulty levels, achievements, and leaderboard features. The game includes customizable settings, statistics tracking, and a collection system.

---

## 🏗️ Project Structure

```
d:\Matching Game
├── index.html                 # Main HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.cjs       # Tailwind CSS configuration
├── postcss.config.cjs        # PostCSS configuration
├── README.md                 # Project README
├── pass.txt                  # Password/credentials file
├── public/                   # Static assets
│   └── assets/              # Images and media files
├── src/
│   ├── main.jsx             # React app entry point
│   ├── App.jsx              # Root component
│   ├── index.css            # Global styles
│   ├── firebase.js          # Firebase configuration
│   ├── components/          # Reusable React components
│   ├── data/                # Game data and configuration
│   ├── pages/               # Page components (routes)
│   └── utils/               # Utility functions
```

---

## 🎮 Key Features

- **Memory Card Game**: Match pairs of animal cards
- **Multiple Difficulty Levels**: Various game board sizes
- **Achievements System**: Track unlocked achievements
- **Leaderboard**: Competitive scoring system
- **Statistics**: Track game statistics and progress
- **Collection System**: Collect and view discovered animals
- **Settings**: Customizable game preferences
- **User Authentication**: Login and registration system
- **Particle Effects**: Visual enhancements
- **Sound Effects & Music**: Audio feedback system
- **Timer**: In-game and level timer

---

## 💻 Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI framework |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Styling and responsive design |
| **Firebase** | Backend services (auth, database) |
| **PostCSS** | CSS processing |
| **JavaScript (ES6+)** | Core language |

---

## 📦 Components Directory (`src/components/`)

| Component | Purpose |
|---|---|
| `AnimalCard.jsx` | Individual card component for displaying animals |
| `Card.jsx` | Base card component |
| `GameBoard.jsx` | Main game board layout and logic |
| `Modal.jsx` | Reusable modal dialog component |
| `Particles.jsx` | Particle effects animation |
| `SettingRadio.jsx` | Radio button setting input |
| `SettingSelect.jsx` | Dropdown select setting input |
| `SettingSlider.jsx` | Slider setting input |
| `SettingToggle.jsx` | Toggle/switch setting input |
| `Timer.jsx` | Game timer display |
| `VictoryModal.jsx` | Victory/completion modal |

---

## 📊 Data Directory (`src/data/`)

| File | Purpose |
|---|---|
| `animals.js` | Animal data and images |
| `levels.js` | Game level configurations (difficulty, board size) |
| `settings.js` | Default game settings |

---

## 🛠️ Utilities Directory (`src/utils/`)

| File | Purpose |
|---|---|
| `gameLogic.js` | Core game mechanics (shuffle, matching, validation) |
| `music.js` | Audio and sound management |
| `progress.js` | User progress and saves |
| `settings.js` | Settings management and persistence |

---

## 📄 Pages Directory (`src/pages/`)

| Page Component | Route Purpose |
|---|---|
| `Home.jsx` | Landing/home page |
| `Game.jsx` | Main game play page |
| `LevelSelect.jsx` | Level selection screen |
| `Settings.jsx` | Game settings configuration |
| `Achievements.jsx` | Achievements and unlockables |
| `Collection.jsx` | Animal collection view |
| `Leaderboard.jsx` | High scores and rankings |
| `Stats.jsx` | Game statistics and progress |
| `Login.jsx` | User login page |
| `Register.jsx` | User registration page |
| `Splash.jsx` | Splash/loading screen |

---

## 🚀 Getting Started

### Installation

```bash
cd "d:\Matching Game"
npm install
```

### Development Server

```bash
npm run dev
```

Starts Vite dev server at: **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

---

## 🔥 Firebase Integration

The project uses Firebase for:
- **Authentication**: User login/registration
- **Database**: Store user progress, achievements, leaderboard scores
- **Storage**: Store user data and collections

Configuration is in `src/firebase.js`

---

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Global styles in `src/index.css`
- **Responsive Design**: Mobile-friendly layouts

---

## 🎯 Game Mechanics

1. **Card Matching**: Players flip two cards to find matching pairs
2. **Level System**: Multiple difficulty levels with different board sizes
3. **Scoring**: Points awarded for matches and speed bonuses
4. **Progress Tracking**: Saves completed levels and achievements
5. **Leaderboard**: Tracks high scores globally

---

## 📱 Key Features Details

### Settings
- Difficulty level adjustment
- Sound on/off toggle
- Music volume control
- Display preferences

### Achievements
- Milestone-based rewards
- Collection unlockables
- Speed-based achievements

### Statistics
- Games played
- Win/loss ratio
- Best times
- Total progress

### Collection
- Animal cards database
- Discovered animals tracking
- Rarity system

---

## 🔐 Authentication Flow

1. User registers with email/password
2. Login via Firebase Auth
3. User session persists via Firebase
4. User data synced with Firebase Database

---

## 📤 Deployment

The project can be deployed to:
- **Vercel**: Zero-config deployment from Git
- **Netlify**: Similar to Vercel
- **Firebase Hosting**: Direct Firebase integration
- **Any static host**: Output in `dist/` folder after build

---

## 🛠️ Development Workflow

1. **Run dev server**: `npm run dev`
2. **Make changes**: Edit files in `src/`
3. **Hot reload**: Changes auto-refresh in browser
4. **Build**: `npm run build` creates optimized `dist/` folder
5. **Deploy**: Push `dist/` to hosting platform

---

## 📝 Notes

- Game data stored in `pass.txt` (credentials/sensitive info)
- All user progress synced with Firebase
- Responsive design works on desktop, tablet, and mobile
- Particle effects enhance visual feedback
- Sound system provides audio cues for actions

---

## 🤝 Contributing

To add new features:
1. Add components in `src/components/`
2. Add new pages in `src/pages/`
3. Update `src/data/` with new game data
4. Modify utilities as needed in `src/utils/`

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Firebase Documentation](https://firebase.google.com/docs)

---

**Last Updated**: 2026-07-05
**Version**: 1.0.0
