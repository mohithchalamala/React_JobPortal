import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx'
import Navbar from './comp/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    <footer>Footer</footer>
  </BrowserRouter>
)
