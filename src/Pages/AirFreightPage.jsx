import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AirFreightBanner from '../Components/AirFreight/AirFreightBanner'
import AirFreightContent from '../Components/AirFreight/AirFreightContent'
import Footer from '../Components/Footer/Footer'

const AirFreightPage = () => {
  return (
    <div>
        <Navbar />
       <AirFreightBanner />
       <AirFreightContent />
       <Footer />
    </div>
  )
}

export default AirFreightPage