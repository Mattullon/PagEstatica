import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import ImageAvatars from './avatar';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Draver = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handlogin = () => {
    navigate("/login");
    
  };
  const handInicio = () => {
    navigate("/loginsd");
    
  };
  const handloginUp = () => {
    navigate("/LoginUpdsd");
    
  };

  const handCard = () => {
    navigate("/cards");
  };
  return (
    <>
    <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
            
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
            <ImageAvatars></ImageAvatars>
          </div>
          <Divider />
          <List>
          <ListItem disablePadding>
              <ListItemButton onClick={handCard} >
                <ListItemIcon
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlogin} >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handloginUp} >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary="Mis validaciones" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlogin}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar Sesion" />
              </ListItemButton>
            </ListItem>
            
          </List>
        </Paper>
      </Drawer>
    <IconButton sx={{marginLeft: 'auto'}} onClick={()=>setOpen(true)}>
      <MenuIcon className='icon' />
    </IconButton>
    </>
  )
}

export default Draver