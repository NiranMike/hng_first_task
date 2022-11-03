import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import LinkSection from './Components/LinkSection'
import ProfileSection from './Components/ProfileSection'
import SocialSection from './Components/SocialSection'
import ContactMe from './Page/ContactMe'
import Home from './Page/Home'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<ContactMe />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App