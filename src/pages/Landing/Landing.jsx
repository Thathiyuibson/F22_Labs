import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Announcement from '../../components/Announcement/Announcement'
import FeaturedPage from '../../components/FeaturedPage/FeaturedPage'
import Services from '../../components/Services/Services'
import Domains from '../../components/Domains/Domains'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import TechExpertise from '../../components/TechExpertise/TechExpertise'
import TeamMembers from '../../components/TeamMembers/TeamMembers'
import Contact from '../../components/Contact/Contact'

const Landing = () => {
  return (
    <div className=''>
      <Navbar />
      <Announcement />
      <FeaturedPage />
      <Services />
      <Domains />
      <FeaturedProducts />
      <TechExpertise />
      <TeamMembers />
      <Contact />
      <Footer />
    </div>
  )
}

export default Landing
