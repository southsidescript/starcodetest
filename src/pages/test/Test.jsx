import { useRef, useState } from 'react'
import style from '../../styles/global.module.scss';
import Question from '../../components/QuestionWindow/Question';
import Logo from '../../components/Logo/Logo';
import { useEffect } from 'react';
import Congratulate from '../../components/Congratulate/Congratulate';


const Test = () => {

  

  const questions = [
    {
      question:'Что выполняет комбинация CTRL+V ?',
      answers:['Вставляет скопированный текст','Удаляет выделенный текст','Копирует выделенный текст '],
      currentAnswer:'Вставляет скопированный текст'
    },
    {
      question:'50% от числа 120 равно:',
      answers:[12,6,60],
      currentAnswer:60
    },
    {
      question:'Какая кнопка подтверждает действие ?',
      answers:['Esc','V','Enter'],
      currentAnswer:'Enter'
    },
    {
      question:'Какой из нижеперечисленных является языком программирования ?',
      answers:['JavaScript','CoffeeBlock','Roblox'],
      currentAnswer:'JavaScript'
    },
    {
      question:'Что такое программное обеспечение?',
      answers:['Набор микросхем','Программы и приложения','Кабели для подключения к интернету'],
      currentAnswer:'Программы и приложения'
    },
    {
      question:'Что такое алгоритм?',
      answers:['Язык программирования','Пошаговая инструкция','Вид компьютерной игры'],
      currentAnswer:'Пошаговая инструкция'
    },
    {
      question:`Решите задачу: В программе есть переменные x = 10 и y = 5.Какой будет результат выражения x / y?`,
      answers:['5','2','10'],
      currentAnswer:'2'
    },
    {
      question:`Какое устройство отвечает за вывод информации на экран?`,
      answers:['Процессор','Мышь','Монитор'],
      currentAnswer:'Монитор'
    }
  ]


  const [scenes,setScenes] = useState([
    <Logo/>,

    <Question
        question={questions}
        answers={questions} 
    
         />,
        <Congratulate/>]);
    

    
  const [currentScene,setCurrentScene] = useState(0);





  useEffect(()=>{
   
    setTimeout(()=>{
      setCurrentScene(currentScene => currentScene + 1)
    },3000)

  },[])
   










return(

 
    <div className={style.test}>
        
          {scenes[currentScene]}
        
    </div>


)

}


export default Test;