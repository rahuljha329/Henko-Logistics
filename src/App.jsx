import { useState } from 'react'
import './App.css'
// import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react
import IncotermsPage from './Pages/IncotermsPage'
import ContainerSpecificationsPage from './Pages/ContainerSpecificationsPage'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage' 


function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/Resources/incoterms' element={<IncotermsPage />}/>
        <Route path='/Resources/ContainerSpecifications' element={<ContainerSpecificationsPage />}/>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App