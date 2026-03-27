import { useState } from 'react'
import './App.css'
// import Home from './Pages/Home'

import IncotermsPage from './Pages/IncotermsPage'
import ContainerSpecificationsPage from './Pages/ContainerSpecificationsPage'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react
import AirFreightPage from './Pages/AirFreightPage'
import SeaFreightPage from './Pages/SeaFreightPage'
import AboutPage from './Pages/AboutPage' 
import ContactPage from './Pages/ContactPage' 


function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/Resources/incoterms' element={<IncotermsPage />}/>
        <Route path='/Resources/ContainerSpecifications' element={<ContainerSpecificationsPage />}/>
        <Route path='/' element={<Home />} />
        <Route path='/service-air-freight' element={<AirFreightPage />} />
        <Route path='/service-sea-freight' element={<SeaFreightPage />} />


        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App