import "./App.css";
import React, { useState} from 'react';
import {Button} from "@mui/material"
import NavTabs from "./components/Layout copy";
function App() {
  const dark = "App-theme";
  const light = "App";
  const [mode,setMode]=useState(true);
  
  
  
  return (
    <div className={mode ? light : dark }>
      <NavTabs></NavTabs>
      
             <Button onClick={()=>setMode(!mode)}> Darkmode </Button>
     <div  className="inicio">
        <h3 className="big"> BIENVENIDOS ! </h3>
        <h4 className="big">
          Este seria el Primer Torneo Para Desarrolladores de Apps En Todo el
          Paraguay !
        </h4>
        <div className="Tparrafo">
          <p className="parrafo">
            Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p>{" "}
          <p className="parrafo">
          Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p>
          <p className="parrafo">
          Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p>
          <p className="parrafo">
          Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p>
          
        </div>
        
          
       
      </div> 
     

      
    
    </div>
  );
}

export default App;

//  
//layout  que este anidado como hijop un componente para quie siempre tenga el appbar
// drawer que salga las opciones 
// pie de pag al layout foother 
// agregarle mas pag 
