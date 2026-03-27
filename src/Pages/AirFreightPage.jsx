import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AirFreightBanner from '../Components/AirFreight/AirFreightBanner'
import AirFreightContent from '../Components/AirFreight/AirFreightContent'

const AirFreightPage = () => {
  return (
    <div>
        <Navbar />
       <AirFreightBanner />
       <AirFreightContent />
    </div>
  )
}

export default AirFreightPage