import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ExpressDeliveryBanner from '../Components/ExpressDelivery/ExpressDeliveryBanner'
import Footer from '../Components/Footer/Footer'
import ExpressDeliveryContent from '../Components/ExpressDelivery/ExpressDeliveryContent'

const ExpressDeliveryPage = () => {
  return (
    <div>
<Navbar />
<ExpressDeliveryBanner />
<ExpressDeliveryContent />
<Footer />
    </div>
  )
}

export default ExpressDeliveryPage