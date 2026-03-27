import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Aboutbanner from '../Components/About/Aboutbanner'
import AboutDetails from '../Components/About/AboutDetails'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Aboutbanner />
      <AboutDetails />
      <Footer />
    </div>
  )
}

export default Home
