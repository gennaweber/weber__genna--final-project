import React, { useState } from 'react'
import './styles.css';

import Nav from './components/Nav'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Popup from './components/Popup'

function App() {

  //manage popup for portfolio section when images are clicked
  //popup is closed by default
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  const [clickedImg, setClickedImg] = useState(1)

  return (
    <body>
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
    </body>
  );
}

export default App;
