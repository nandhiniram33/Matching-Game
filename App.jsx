import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Game from './pages/Game'
import Stats from './pages/Stats'
import Achievements from './pages/Achievements'
import Leaderboard from './pages/Leaderboard'
import Settings from './pages/Settings'
import LevelSelect from './pages/LevelSelect'
import Collection from './pages/Collection'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Splash/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/levels" element={<LevelSelect/>} />
      <Route path="/dashboard" element={<Home/>} />
      <Route path="/play" element={<Game/>} />
      <Route path="/stats" element={<Stats/>} />
      <Route path="/achievements" element={<Achievements/>} />
      <Route path="/leaderboard" element={<Leaderboard/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/collection" element={<Collection/>} />
    </Routes>
  )
}
