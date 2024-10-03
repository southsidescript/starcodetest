import style from '../../styles/global.module.scss'
import { useRef } from 'react';

const Logo = ()=>{



const ref = useRef()


    return(
        <img
        ref={ref}
        src="logo.JPG"
        alt=""
        className={style.logo}
        onLoad={()=>{
          ref.current.style.opacity = 0;
        }} />

    )
}

export default Logo;