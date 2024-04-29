import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CareerAnnouncement from '../../components/CareerAnnouncement/CareerAnnouncement'
import CareerPost from '../../components/CareerPost/CareerPost'
import CareerFooter from '../../components/CareerFooter/CareerFooter'

const Careers = () => {
  return (
    <div>
      <CareerAnnouncement />
      <CareerPost />
      <CareerFooter />
    </div>
  )
}

export default Careers
