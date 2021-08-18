import React, { useState, useEffect, useCallback } from 'react'
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

  //TODO: CREATE HOOKS FOLDER
  //TODO: ADD CLICK-OFF HOOK AS WELL
  //close popup with esc key
  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      setIsPopupOpen(false)
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [isPopupOpen, escFunction])

  const [clickedImg, setClickedImg] = useState("todo")

  //TODO: PARALLAX ANIMATION ON SCROLL?

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
  )
}

export default Main