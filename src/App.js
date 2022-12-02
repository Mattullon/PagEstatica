import "./App.css";
import React from "react";
import { Button, Grid } from "@mui/material";
function App() {
  

  return (

  <Grid container spacing={8}
  direction="column"
  justifyContent="center"
  alignContent="center"
  style={{minHeight:'100vh'}}
  > 
  <Grid item > 
    <Button  color='inherit' className="caja" href="https://www.instagram.com/"> instagram </Button>
  
  </Grid>

  <Grid item>

    <Button  color='inherit' className="caja" href="https://www.instagram.com/"> facebook </Button>

  </Grid>
  
  <Grid item>
    <Button  color='inherit' className="caja" href="https://www.instagram.com/"> whasaap </Button>

  </Grid>

  
  

    </Grid>
  
  

  


  );
}

export default App;

//
//layout  que este anidado como hijop un componente para quie siempre tenga el appbar
// drawer que salga las opciones
// pie de pag al layout foother
// agregarle mas pag
