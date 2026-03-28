import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import WareHouseBanner from '../Components/WareHousingSolutions/WareHouseBanner'
import WareHousingContent from '../Components/WareHousingSolutions/WAreHousingContent'

const WareHousingSolutionPage = () => {
  return (
    <div>
        <Navbar />
        <WareHouseBanner />
        <WareHousingContent />
        <Footer />
    </div>
  )
}

export default WareHousingSolutionPage