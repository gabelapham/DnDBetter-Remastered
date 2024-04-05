import './Stats.css'
import { useEffect, useState } from 'react'
import stats_image from './../../assets/stats_image.png'
import inspiration from './../../assets/inspiration.png'
import ClassSelect from '../../scripts/ClassSelect'

function Stats() {

    const [classPop, setClassPop] = useState(false)
    const [userClass, setClass] = useState('Barbarian')
    const [userSecondClass, setSecondClass] = useState('null')
    const [userLevel, setLevel] = useState(1)
    const [userSecondLevel, setSecondLevel] = useState('null')

    return (
      <>
      <div>
        <img src={stats_image} id='image_css'/>
        <input type='checkbox' id='insp' ></input>

        <p id='class_p' onClick={() => setClassPop(true)}>{userClass}</p>
        <p id='level_p'>{userLevel}</p>
        <div id='script_div'>
          <ClassSelect trig={classPop} setTrig={setClassPop} set={setClass} curr={userClass} multiset={setSecondClass} multicurr={userSecondClass}/>
        </div>
      </div>
      </>
    )
  }
  
  export default Stats