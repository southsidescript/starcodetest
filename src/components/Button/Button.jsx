import { useRef } from 'react'
import style from '../../styles/global.module.scss'
import { useNavigate } from 'react-router-dom'


const Button = ({value}) => {

 let ref = useRef()
  
 let navigate = useNavigate()
 
function handleClick(){
    
    let sound = new Audio('./audio/start.mp3')
    sound.play()
    sound.currentTime = 0
    ref.current.classList.add('active')
    setTimeout(() => {
        navigate('/test')
    },1000)

}


    return(
       
        <button ref={ref} onClick={handleClick} className={style.button}>{value}</button>
    )

}


export default Button;