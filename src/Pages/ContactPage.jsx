import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ContactBanner from '../Components/Contact/ContactBanner'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <ContactBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
