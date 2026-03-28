import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy'
import Footer from '../Components/Footer/Footer'
import PrivacyContent from '../Components/PrivacyContent/PrivacyContent'

const PrivacyPolicyPage = () => {
  return (
    <div>
        <Navbar />
        <PrivacyPolicy />
        <PrivacyContent />
        <Footer />

    </div>
  )
}

export default PrivacyPolicyPage