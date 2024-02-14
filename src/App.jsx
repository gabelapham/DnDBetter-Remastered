import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stats from './pages/Stats-Folder/Stats.jsx'
import Background from './pages/Background-Folder/Background.jsx'
import Spells from './pages/Spells-Folder/Spells.jsx'

function App() {
  const [statsVis, setStats] = useState(1);
  const [backgroundVis, setBackground] = useState(0);
  const [spellsVis, setSpells] = useState(0);

  return (
    <>
    <div class="heading">
      <h1>DnDBetter V2</h1>
      <button onClick={() => 
        {setStats(1);
        setBackground(0);
        setSpells(0)}}>Stats</button>
      <button onClick={() => 
        {setStats(0);
        setBackground(1);
        setSpells(0)}}>Background</button>
      <button onClick={() => 
        {setStats(0);
        setBackground(0);
        setSpells(1)}}>Spells</button>
    </div>
    <div style={{ display: statsVis ? "block" : "none"}}>
      <Stats />
    </div>
    <div style={{ display: backgroundVis ? "block" : "none"}}>
      <Background />
    </div>
    <div style={{ display: spellsVis ? "block" : "none"}}>
      <Spells />
    </div>
    </>
  )
}

export default App
