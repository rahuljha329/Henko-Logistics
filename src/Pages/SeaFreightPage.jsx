import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SeaFreightBanner from '../Components/SeaFreight/SeaFreightBanner'
import SeaFreightContent from '../Components/SeaFreight/SeaFreightContent'
import Footer from '../Components/Footer/Footer'

const SeaFreightPage = () => {
  return (
    <div>
      <Navbar />
     <SeaFreightBanner />
     <SeaFreightContent />
     <Footer />
    </div>
  )
}

export default SeaFreightPage