import "./style/style.scss"
import { Navbar } from './components/navBar/nav'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Alle } from './pages/alle'
import { Indland } from './pages/indland'
import { Udland } from './pages/udland'
import { Teknologi } from './pages/teknologi'
import { Sport } from './pages/sport'
import { Politik } from './pages/politik'
import { Samfund } from './pages/samfund'
import { Artikel } from './pages/artikel'
import { Footer } from './components/footer/footer'
import { ArticleCards } from './components/cards/cards'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Alle/>}/>
      <Route path="/indland" element={<Indland/>}/>
      <Route path="/udland" element={<Udland/>}/>
      <Route path="/teknologi" element={<Teknologi/>}/>
      <Route path="/sport" element={<Sport/>}/>
      <Route path="/politik" element={<Politik/>}/>
      <Route path="/samfund" element={<Samfund/>}/>
      <Route path="/artikel/:slug" element={<Artikel/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
