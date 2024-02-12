import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stats from './pages/Stats-Folder/Stats.jsx'
import Background from './pages/Background-Folder/Background.jsx'
import Spells from './pages/Spells-Folder/Spells.jsx'

function App() {
  return (
    <>
    <div class="Heading">
      <button>Stats</button>
      <button>Background</button>
      <button>Spells</button>
    </div>
    <div>
      <Stats />
      <Background />
      <Spells />
    </div>
    </>
  )
}

export default App
