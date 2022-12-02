import "./App.css";
import React from "react";
import { Button, Grid } from "@mui/material";
function App() {
 

  return (
<Grid container
  spacing={4}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}


>
  
  <Grid item className="caja1" >
    instagram
  </Grid>
  
  <Grid item className="caja2">
    
    facebbok
  </Grid>
  <Button > hola</Button>
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
