import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import HomeAbout from '../Components/HomeAbout/HomeAbout'
import Footer from '../Components/Footer/Footer'
import HomeServices from '../Components/HomeServices/HomeServices'
import HomeWhyChooseUs from '../Components/HomeWhyChooseUs/HomeWhyChooseUs'
import HomeAction from '../Components/HomeAction/HomeAction'
import HOMEourclient from '../Components/HomeOurClient/HomeOurClient'
import HomeFaq from '../Components/HomeFaq/HomeFaq'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeAction />
      <HomeWhyChooseUs />
      <HOMEourclient />
      <HomeFaq />
      <Footer />

   
    </div>
  )
}

export default Home
