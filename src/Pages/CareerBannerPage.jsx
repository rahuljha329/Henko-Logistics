import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CareerBanner from '../Components/CareerBanner/CareerBanner'
import CareerAbout from '../Components/CareerAbout/CareerAbout'
import CareerJoin from '../Components/CareerJoin/CareerJoin'
import CareerOpportunities from '../Components/CareerOpportunities/CareerOpportunities'
import CareerCTA from '../Components/CareerCTA/CareerCTA'

const CareerBannerPage = () => {
  return (
    <div>
      <Navbar />
      <CareerBanner />
      <CareerAbout />
      <CareerCTA />
       <CareerOpportunities />
      <CareerJoin />
      <Footer />  
    </div>
  )
}

export default CareerBannerPage