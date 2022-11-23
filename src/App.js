import "./App.css";
import { useRef } from "react";
import { MediaCard } from "./components/card";
import { AppBar,Button,IconButton,Toolbar,} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Cardss } from "./components/mediacard";
function App() {
  const inicio = useRef(null);
  const developers = useRef(null);
  const navigate = useNavigate();
  const handlogin=()=>{
    navigate("/login")
  }
  const irAlaSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });

  };
  return (
    <div className="App">
      <div className="hero">
       
        <AppBar position="static" color="primary">
    
            <Toolbar  variant="dense" className="tbar">
            
              <IconButton
                onClick={() => irAlaSeccion(inicio)}
                className="link"
                color="inherit"
              >
                <MenuIcon></MenuIcon> 
              </IconButton>
              <IconButton
                onClick={() => irAlaSeccion(developers)}
                className="link"
                color="inherit"
              >
                FUNDADORES
              </IconButton>
              <IconButton
               
                className="link"
                color="inherit"
              >
                Login
              </IconButton>
              
        
            </Toolbar>
          </AppBar>
       
      </div>
      <div ref={inicio} className="inicio">
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
            process, soft-skills test and a technical assessment.<MediaCard/>
          </p>{" "}
          <p className="parrafo">
           
          </p>{" "}
          
        </div>
        
          <Button onClick={handlogin} variant="contained" color="success" >
            Inscribirse
             </Button>
          
       
      </div> 
      <div>
        
          <Cardss> </Cardss>
        
      
      </div>
    </div>
  );
}

export default App;

