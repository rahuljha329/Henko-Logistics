import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react
import AirFreightPage from './Pages/AirFreightPage'
import SeaFreightPage from './Pages/SeaFreightPage'
import AboutPage from './Pages/AboutPage' 
import WareHousingSolutionPage from './Pages/WareHousingSolutionPage'
import ExpressDeliveryPage from './Pages/ExpressDeliveryPage'
import TransportPage from './Pages/TransportPage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service-air-freight' element={<AirFreightPage />} />
        <Route path='/service-sea-freight' element={<SeaFreightPage />} />
        <Route path='/service-warehousing-solutions' element={<WareHousingSolutionPage />} />
        <Route path='/service-express' element={<ExpressDeliveryPage />} />
        <Route path='/service-transport' element={<TransportPage />} />

        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App