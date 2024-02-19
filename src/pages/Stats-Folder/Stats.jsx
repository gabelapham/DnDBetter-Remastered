import './Stats.css'
import './../page.css'
import { useEffect, useState } from 'react'
import stats_image from './../../assets/stats_image.png'

function Stats() {

  const [characterName, setCharacterName] = useState("Enter name here...")

    return (
      <>
        <img src={stats_image} id='background_image'/>
        <p id='char_name' contentEditable='false' onClick={() => {
          var name = prompt("Insert your character's name.")
          if (name.length() == 0) {
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