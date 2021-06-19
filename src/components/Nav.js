import React from 'react'

const Nav = () => {
  return (
    <>
    <header>
      <nav className="nav-bar">
        <ul className="nav-container">
          <li><a href="#home"><h3>HOME</h3></a></li>
          <li><a href="#portfolio"><h3>PORTFOLIO</h3></a></li>
          <li><a href="#about"><h3>ABOUT</h3></a></li>
          <li><a href="#contact"><h3>CONTACT</h3></a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Nav