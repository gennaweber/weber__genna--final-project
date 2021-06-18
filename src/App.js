import React from 'react'
import './styles.css';

import Nav from './components/Nav'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <body>
      <Nav />
      <main>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </body>
  );
}

export default App;
