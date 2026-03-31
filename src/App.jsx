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
import WareHousingSolutionPage from './Pages/WareHousingSolutionPage'
import ExpressDeliveryPage from './Pages/ExpressDeliveryPage'
import TransportPage from './Pages/TransportPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TermsBannerPage from './Pages/TermsBannerPage'
import CareerBannerPage from './Pages/CareerBannerPage'


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
        <Route path='/service-warehousing-solutions' element={<WareHousingSolutionPage />} />
        <Route path='/service-express' element={<ExpressDeliveryPage />} />
        <Route path='/service-transport' element={<TransportPage />} />

        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsBannerPage />} />
        <Route path="/CareerBanner" element={<CareerBannerPage />} />


      </Routes>
    </>
  )
}

export default App