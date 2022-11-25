import React from 'react'
import "../App.css"
const Footer = () => {
  return (
    <div className="container" >
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Inicio</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"> Ingresar</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Crear Cuenta</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Cards</a></li>
    </ul>
    <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
  </footer>
</div>
  )
}

export default Footer