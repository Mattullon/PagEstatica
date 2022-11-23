import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Login  from './logins/login';
import LoginUp from './logins/loginUp';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter> 
    
    <Routes>
        <Route index element={<App />}></Route>
        <Route path="login/LoginUp" element={<LoginUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        
    </Routes>

   </BrowserRouter>

    
  
);


