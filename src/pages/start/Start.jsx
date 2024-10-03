import Button from "../../components/Button/Button";
import style from '../../styles/global.module.scss';
import { Link } from "react-router-dom";


const Start = () => {


    return (
     <div className={style.start}>
              <Button value={'Начать тестирование '}/>
     </div>

 
    )

}

export default Start;