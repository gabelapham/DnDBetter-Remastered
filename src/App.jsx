import { useState } from 'react'
import './App.css'

// Page Import
import Stats from './pages/Stats-Folder/Stats.jsx'
import Background from './pages/Background-Folder/Background.jsx'
import Spells from './pages/Spells-Folder/Spells.jsx'
import './page.css'

// Picture Import
import download_image from './assets/download_image.png'

// Script Import
import nameInput from './scripts/NameInput.jsx'

function App() {
  const [statsVis, setStats] = useState(1);
  const [backgroundVis, setBackground] = useState(0);
  const [spellsVis, setSpells] = useState(0);
  const [characterName, setCharacterName] = useState("Click to enter name...")

  return (
    <>
    <div id='root'>
      <h1 id='title'>DnDBetter</h1>
      <p style={{ color:'white' }}>[Remastered]</p>
      <button id='tab_button' title='Stats' onClick={() => 
        {setStats(1);
        setBackground(0);
        setSpells(0)}}>Stats</button>
      <button id='tab_button' title='Background' onClick={() => 
        {setStats(0);
        setBackground(1);
        setSpells(0)}}>Background</button>
      <button id='tab_button' title='Spells' onClick={() => 
        {setStats(0);
        setBackground(0);
        setSpells(1)}}>Spells</button>
    </div>
    {/* On click, this should save the character sheet to a pdf for the user to download. */}
    <button id='save_button' title='Save'><img id='save_image'src={download_image}/></button>

    {/* Pages displayed when the individual button is clicked. */}
    <div id='page' style={{ display: statsVis ? "block" : "none"}}>
      <Stats />
      <p id='char_name_stat' contentEditable='false' onClick={() => setCharacterName(nameInput())}>{characterName}</p>
    </div>
    <div id='page' style={{ display: backgroundVis ? "block" : "none"}}>
      <Background />
      <p id='char_name_back' contentEditable='false' onClick={() => setCharacterName(nameInput())}>{characterName}</p>
    </div>
    <div id='page' style={{ display: spellsVis ? "block" : "none"}}>
      <Spells />
    </div>
    </>
  )
}

export default App
