import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TermsBanner from '../Components/TermsBanner/TermsBanner'
import Footer from '../Components/Footer/Footer'
import TermsContent from '../Components/TermsContent/TermsContent'

const TermsBannerPage = () => {
  return (
    <div>
        <Navbar />
        <TermsBanner />
        <TermsContent />
        <Footer />

    </div>
  )
}

export default TermsBannerPage