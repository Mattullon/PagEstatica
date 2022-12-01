import "./App.css";
import React from "react";
import { Grid } from "@mui/material";
function App() {
 

  return (
<Grid container className="tabla" 
flexDirection={"column"} 
justifyItems={"center"}


>
  
  <Grid item className="caja1">
    instagram
  </Grid>
  
  <Grid item className="caja2">
    facebbok
  </Grid>
  
  <Grid item className="caja3">
    telegram
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
