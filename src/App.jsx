import { useState } from 'react'
import './App.css'
import Navbar from './components/Navegacion/navbar.component'
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal.component'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <PaginaPrincipal/>
    </div>
  )
}

export default App
