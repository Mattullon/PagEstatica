import { Toolbar, Grid, Typography, Tabs, Tab, Button, AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import Draver from "./Draver";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { useNavigate } from "react-router";
import {useTheme, useMediaQuery} from "@mui/material"
import NavTabs from "./Tabs";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Search } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';


export const Layout = ({ children }) => {

  const Theme=useTheme();
  console.log(Theme)
  const isMatch=useMediaQuery(Theme.breakpoints.down('sm'))
  console.log(isMatch)
  const navigate = useNavigate();
  const handlogin = () => {
    navigate("/login");
    
  };
  const handInicio = () => {
    navigate("/loginsd");
    
  };
  const handloginUp = () => {
    navigate("/LoginUp");
    
  };
 
  
  

  const handCard = () => {
    navigate("/cards");
  };
  const [value,setValue]=useState()
  return (
    <>
      
      <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(79,153,192,1) 97%, rgba(0,212,255,1) 100%);'}}>
        <Toolbar>{ isMatch ? 
        <> 
         <Typography>
              <LocalGasStationIcon/>
        </Typography>
        <Search>
            
              <SearchIcon />
           
          </Search>
        <Draver /> 

        </> :
          <Grid  sx={{placeItems:'center'}} container>
            <Grid item xs={2}>
              <Typography>
              <DeveloperModeIcon />
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Tabs  textColor="inherit" value={value} onChange={(e,value)=>setValue(value)}>
                <Tab label="Home" onClick={handInicio}/>
                <Tab label="Cars" onClick={handCard}/>
                <Tab label="Login" onClick={handlogin}/>
                <Tab label="Sing in" onClick={handloginUp}/>

              </Tabs>
            </Grid>
          <Grid item xs={2}/>
            <Grid item xs={3}>
              <Box display="flex">
                <Button sx={{ marginLeft:'auto',background:'rgba(2,0,36,1)'}} variant="contained"> Login </Button>
                <Button sx={{marginLeft:1, background:'rgba(2,0,36,1)'}} variant="contained"> Signup </Button>

              </Box>

            </Grid>
          
          </Grid>
          }
        </Toolbar>
      </AppBar>

      {/* <Fab
        color="primary"
        aria-label="add"
        style={{ bottom: 50, right: 40, position: "fixed" }}
      >
        <AddIcon />
      </Fab> */}
      {children}
      <NavTabs/>
    </>
  );
};

// el fab es la bola flotante esta en position fixed por eso se queda en un lugar fijo
