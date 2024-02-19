import './Stats.css'
import './../page.css'
import { useEffect, useState } from 'react'
import stats_image from './../../assets/stats_image.png'

function Stats() {

  const [characterName, setCharacterName] = useState("Click to enter name...")

    return (
      <>
        <img src={stats_image} id='background_image'/>
        <p id='char_name' contentEditable='false' onClick={() => {
          let name = prompt("Insert your character's name.")
          if (name == "" || name.length == 0 || name.startsWith(" ")) {
            setCharacterName("Click to enter name...")
          } else {
            setCharacterName(name)
          }
        }}>{characterName}</p>
        <button id='char_button' onClick={() => {
        }}>Button.</button>
      </>
    )
  }
  
  export default Stats