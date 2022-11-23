import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Login  from './logins/login';
import LoginUp from './logins/loginUp';
import { Cardss } from './components/mediacard';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter> 
    
    <Routes>
      

         <Route path='*' element={<App />}>
             <Route path='cards' element={<Cardss />}></Route>
         </Route>
         <Route path="login" element={<Login />}></Route>    
         <Route path="login/LoginUp" element={<LoginUp />}></Route>
    
      
    </Routes>


   </BrowserRouter>

    
  
);


