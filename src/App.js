import "./App.css";
import { useRef } from "react";
import { MediaCard, MediaCard2, MediaCard3,MediaCard4,MediaCard5 } from "./components/card";
import { AppBar,Grid,IconButton,Toolbar,} from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  const inicio = useRef(null);
  const developers = useRef(null);
  
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
            <IconButton size="large" edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} />
               <MenuIcon />
              <IconButton
                onClick={() => irAlaSeccion(inicio)}
                className="link"
                color="inherit"
              >
                INICIO{" "}
              </IconButton>
              <IconButton
                onClick={() => irAlaSeccion(developers)}
                className="link"
                color="inherit"
              >
                FUNDADORES
              </IconButton>
              <Link 
          component="button"
          variant="body2" to="login"> INSCRIPCION </Link>
        
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
            process, soft-skills test and a technical assessment.
          </p>{" "}
          <p className="parrafo">
           
          </p>{" "}
          <Link 
          component="button"
          variant="body2" to="cardss"> hola </Link>
        </div>
        
          
          
       
      </div> 
      <div>
        
          <Cardss> </Cardss>
        
      
      </div>
    </div>
  );
}

export default App;

const Cardss = ()=>  <div  className="fundadores">
<h3 className="strong"> DEVELOPERS </h3>
<Grid container spacing={4} justifyContent={"center"}>
  <Grid item  >
    <MediaCard />
  </Grid>
  <Grid item >
    <MediaCard2 />
  </Grid>
  <Grid item>
    <MediaCard3 />
  </Grid>
  <Grid item>
    <MediaCard4 />
  </Grid>
  <Grid item>
    <MediaCard5 />
  </Grid>
</Grid>
</div>