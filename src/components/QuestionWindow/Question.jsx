import { useRef, useState } from 'react';
import style from '../../styles/global.module.scss';
import Congratulate from '../../components/Congratulate/Congratulate';


const Question = ({question})=>{
    
    const ref = useRef()

    const [showResults,setShowResults] = useState(false)

    const [score,setScore] = useState(0)

    const [ count,setCount] = useState(0)
 
    function handleClick(e){
         
        let click = new Audio('./audio/click.mp3');
        click.play()
       let selectedAnswer = e.target.innerText

       if(selectedAnswer == question[count].currentAnswer){
        setScore(score=>score + 1)
        console.log(score)
       }
        const nextQuestion = count + 1;
        if(nextQuestion < question.length){
        setCount(nextQuestion)
        }else{
            setShowResults(true)
        }
        
    }
    
  

return( 
<>
{showResults ? <Congratulate score={score}/>:  <div  ref={ref} className={style.question}>
    <div className={style.question_title}>{question[count].question}</div>
    <div  className={style.question_answers}>{question[count].answers.map(n=><button onClick={handleClick} key={'key'+n}>{n}</button>)}</div>
</div>}

</>
   
  
)



}



export default Question;