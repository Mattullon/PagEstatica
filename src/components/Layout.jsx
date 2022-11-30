import {
  
  Button,
  IconButton,
  Toolbar,
  
  Drawer,
  CssBaseline,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  
  Fab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AddIcon from '@mui/icons-material/Add';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Footer from "./footer"


export const Layout = ({children}) => {
  
  
  const [open, setOpen] = useState(false);
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

  
  
  return (
    <>
      <CssBaseline />
      
        <Toolbar className="toolbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon> </MenuIcon>
          </IconButton>
          <Button variant="outlined" onClick={handInicio} >
          <IntegrationInstructionsIcon> </IntegrationInstructionsIcon>
            
            Dev.Tech
          </Button>
          <Button variant="text" color="inherit" style={{top:0,right:120  }}> Pricing</Button>
          <Button variant="text" color="inherit" style={{top:0,right:80  }}> About</Button>
          <Button variant="outlined" color="inherit" style={{top:0,right:20  }}> Login  </Button>
          <Button variant="contained">Buy</Button>
        </Toolbar>
      
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Paper style={{ width: 240 }}>
          <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(false)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem disablePadding>
              <ListItemButton onClick={handInicio} >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlogin} >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Ingresar" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handloginUp} >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Crear Cuenta" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handCard}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Cards" />
              </ListItemButton>
            </ListItem>
            
          </List>
        </Paper>
      </Drawer>
      <Fab color="primary" aria-label="add" style={{bottom:50,right:40, position:"fixed"  }}>
              <AddIcon />
      </Fab>
      {children}
      <Footer/>
    </>
  );
};
