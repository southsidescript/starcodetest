import React from "react";
import ReactDOM from "react-dom/client";
import  { Routes,Route,Link,BrowserRouter} from 'react-router-dom'
import Start from "./pages/start/Start";
import Test from "./pages/test/Test";
import './styles/global.css'
import Question from "./components/QuestionWindow/Question";
let root = ReactDOM.createRoot(document.querySelector('#root'));


root.render(
    
    <BrowserRouter>   
       <Routes>
          <Route path="/" element={<Start/>} ></Route>
          <Route path="/test" element={<Test/>} ></Route>
   
        </Routes>
         
    </BrowserRouter>

)

