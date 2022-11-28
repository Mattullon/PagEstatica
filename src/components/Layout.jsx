import {
  
  Button,
  IconButton,
  Toolbar,
  Typography,
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
export const Layout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handlogin = () => {
    navigate("login");
    
  };
  const handInicio = () => {
    navigate("loginsd");
    
  };
  const handloginUp = () => {
    navigate("LoginUp");
    
  };

  const handCard = () => {
    navigate("cards");
  };

  
  
  return (
    <>
      <CssBaseline />
      
        <Toolbar>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
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
    </>
  );
};
