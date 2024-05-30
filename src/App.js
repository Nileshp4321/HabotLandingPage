import React from 'react'
import Header from './HabotPages/Header'
import HeroSection from './HabotPages/HeroSection'
import Requirments from './HabotPages/Requirments'
import GetVerify from './HabotPages/GetVerify'
import HowItWorks from './HabotPages/HowItWorks'
import AboutHabot from './HabotPages/AboutHabot'
import Footer from './HabotPages/Footer'

function App() {
  return (
    <div style={{overflowX:'hidden'}}>
    <Header/>
    <HeroSection/>
    <AboutHabot/>
    <Requirments/>
    <GetVerify/>
    <HowItWorks/>
    <Footer/>
    </div>
  )
}

export default App