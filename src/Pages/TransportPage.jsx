import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TransportBanner from '../Components/Transport/TransportBanner'
import TransportContent from '../Components/Transport/TransportContent'

const TransportPage = () => {
  return (
    <div>
        <Navbar />
        <TransportBanner />
        <TransportContent />
        <Footer />
    </div>
  )
}

export default TransportPage