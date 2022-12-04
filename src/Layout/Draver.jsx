import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";

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
    navigate("/LoginUp");
    
  };

  const handCard = () => {
    navigate("/cards");
  };
  return (
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
                <ListItemIcon
                >
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
  )
}

export default Draver