import React, { useState } from 'react'
import Nav from '../Nav'
import Home from './sections/Home'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from '../Footer'
import Popup from '../Popup'

function Main() {

  //manage popup for portfolio section when images are clicked
  //popup is closed by default
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  const [clickedImg, setClickedImg] = useState("todo")

  return (
    <>
      <Nav />
      <main>
        <Home />
        <Portfolio 
          togglePopup={togglePopup}
          setClickedImg={setClickedImg}
        />
        <About />
        <Contact />
        <Popup 
          togglePopup={togglePopup} 
          isPopupOpen={isPopupOpen}
          clickedImg={clickedImg}
        />
      </main>
      <Footer />
    </>
  );
}

export default Main;