import "./App.css";
import React from "react";
import { Layout } from "./Layout/Layout";
import { Chip, Divider, Stack, Button, Grid } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HtmlIcon from "@mui/icons-material/Html";
import TitlebarImageList from "./components/imagen";
import FixedBottomNavigation from "./components/imagen";
function App() {
  return (
    <Layout>
    <div className="App">
      <Grid container justifyContent='center' 
          alignItems='center' >
         <Grid item borderColor='#00000'>  
        
         </Grid>   
        <Grid item>
          <h1> hola</h1>
          <FixedBottomNavigation />
        </Grid>

      </Grid>
      
    </div>
    </Layout>
  );
}

export default App;

//
//layout  que este anidado como hijop un componente para quie siempre tenga el appbar
// drawer que salga las opciones
// pie de pag al layout foother
// agregarle mas pag
