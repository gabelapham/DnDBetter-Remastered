import './Background.css'
import './../page.css'
import background_image from './../../assets/background_image.png'


function Background() {
    return (
      <>
        <img src={background_image} id='background_image'/>
      </>
    )
  }
  
  export default Background