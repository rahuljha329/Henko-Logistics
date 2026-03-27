import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'  // Import Route from react-router-dom, not lucide-react

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App