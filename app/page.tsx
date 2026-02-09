import About from '@/components/About'
import CallToAction from '@/components/CalltoAction'
import Certification from '@/components/Certification'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Nav'
import WhoItsFor from '@/components/WhoItsFor'
import WhyTranzyte from '@/components/WhyTranzyte'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyTranzyte />
      <About />
      <Courses />
      <WhoItsFor />
      <Certification/>
      <CallToAction />
      <Footer />
    </div>
      
    
  )
}

export default page
