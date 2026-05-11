import { useState } from 'react'
import "./style/style.scss"
import { Navbar } from './components/navBar/nav'
import { BrowserRouter } from 'react-router'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App
