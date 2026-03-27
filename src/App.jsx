import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react
import AirFreightPage from './Pages/AirFreightPage'
import SeaFreightPage from './Pages/SeaFreightPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service-air-freight' element={<AirFreightPage />} />
        <Route path='/service-sea-freight' element={<SeaFreightPage />} />


      </Routes>
    </>
  )
}

export default App