import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react
import AirFreightPage from './Pages/AirFreightPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service-airfreight' element={<AirFreightPage />} />

      </Routes>
    </>
  )
}

export default App