import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Projects from './pages/Projects'
import Header from './components/Header'
import FooterComp from './components/Footer'


export default function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/projects' element={<Projects />} /> 
    </Routes>
    <FooterComp />
  </BrowserRouter>
  )
}
