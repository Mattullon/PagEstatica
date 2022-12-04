import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();
  const handlelogin = ()=>{
    navigate("/login")
  }
  const handSin = ()=>{
    navigate("/LoginUp")
  }
  const handini = ()=>{
    navigate("/sd")
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Inicio"  onClick={handini} />
        <LinkTab label="Login"  onClick={handlelogin}/>
        <LinkTab label="singUp"  onClick={handSin} />
      </Tabs>
    </Box>
  );
}