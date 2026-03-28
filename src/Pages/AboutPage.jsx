import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Aboutbanner from '../Components/About/Aboutbanner'
import AboutDetails from '../Components/About/AboutDetails'
import WhyChooseUs from '../Components/About/WhyChooseUs'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Aboutbanner />
      <AboutDetails />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default Home
