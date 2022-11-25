import "./App.css";
import { Button, Container, Typography} from "@mui/material";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import React from 'react';
import { Layout } from "./components/Layout";
function App() {
  
  
  const navigate = useNavigate();
  const handlogin=()=>{
    navigate("login")
  }
  
  const handCard=()=>{
    navigate('cards')
  }
  

  
  return (
    <div className="App">
      
      <Layout/>
             
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
           
          </p>
          
        </div>
        
          <Button onClick={handlogin} variant="contained" color="success" >
            Inscribirse
             </Button>
           <Button onClick={handCard} variant="contained" color="success" >
            ver cards
             </Button>
          <Link to="login"> Inscribirse
          </Link>
       
      </div> 
      <div>
        
          <Outlet/>
        
      
      </div>
      <footer style={{bottom:0, position:"static", width:'100%'}} >
        <Container  >
          <Typography align="center" > hola soy el pie de pag  </Typography>
          <div className="hola" > holaa </div>
        </Container>
      </footer>
    </div>
   
  );
}

export default App;

//layout  que este anidado como hijop un componente para quie siempre tenga el appbar
// drawer que salga las opciones 
// pie de pag al layout foother 
// agregarle mas pag 
//  
