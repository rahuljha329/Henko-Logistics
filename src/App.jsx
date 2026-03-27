import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage' 

import { Routes, Route } from 'react-router-dom'  
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App