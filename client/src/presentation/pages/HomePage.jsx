import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'
import SectionService from '../components/SectionService'

function HomePage() {
  return (
    <div className='relative bg-linear-to-bl from-light-red to-dark-red flex flex-col justify-between *:scroll-smooth'>

      <Navbar />  

      <SectionHome />

      <SectionAbout />

      <SectionService />

      <Footer />
      
    </div>
  )
}

export default HomePage