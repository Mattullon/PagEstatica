import React from 'react'
import "../App.css"
import {Divider} from "@mui/material"
const Footer = () => {
  return (
    
  <footer className="footer">
    <Divider></Divider>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li >Inicio</li>

      <li > Ingresar</li>
      <li >Crear Cuenta</li>
      
      <li >Cards</li>
    </ul>
    <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
    
  </footer>

  )
}

export default Footer