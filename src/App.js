import React from 'react'
import Footer from './Components/Footer'
import LinkSection from './Components/LinkSection'
import ProfileSection from './Components/ProfileSection'
import SocialSection from './Components/SocialSection'

const App = () => {
  return (
    <div>
        <ProfileSection />
        <LinkSection />
        <SocialSection />
        <Footer />
    </div>
  )
}

export default App