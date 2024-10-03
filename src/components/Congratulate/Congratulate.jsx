import style from '../../styles/global.module.scss';

const Congratulate = ({score}) => {
    
    
return( <div className={style.notification}>

       <div>Поздравляю!</div> 
       <p>Ваш результат: {score} из 8</p>

</div>
 
)

}

export default Congratulate;