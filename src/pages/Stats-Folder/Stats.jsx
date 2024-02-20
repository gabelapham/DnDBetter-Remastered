import './Stats.css'
import { useEffect, useState } from 'react'
import stats_image from './../../assets/stats_image.png'
import inspiration from './../../assets/inspiration.png'

function Stats() {
    const [inspTrig, setInsp] = useState(false)
    return (
      <>
      <div>
        <img src={stats_image} id='image_css'/>
        <input type='checkbox' id='insp' ></input>
        
      </div>
      </>
    )
  }
  
  export default Stats