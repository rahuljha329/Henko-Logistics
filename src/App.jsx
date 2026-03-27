import { useState } from 'react'
import './App.css'
// import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react
import IncotermsPage from './Pages/IncotermsPage'
import ContainerSpecificationsPage from './Pages/ContainerSpecificationsPage'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/Resources/incoterms' element={<IncotermsPage />}/>
        <Route path='/Resources/ContainerSpecifications' element={<ContainerSpecificationsPage />}/>
      </Routes>
    </>
  )
}

export default App