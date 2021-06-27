import React from 'react'
import PatternShape from '../../svgs/PatternShape'
import LightShape from '../../svgs/LightShape'
import SmallShape from '../../svgs/SmallShape'
import GreenShape from '../../svgs/GreenShape'
import Button from '../../Button'

const Home = () => {
  return (
    <section id="home">
      <PatternShape />
      <LightShape />
      <SmallShape />
      <GreenShape />
      <div className="home-container">
        <div className="hello-text">
          <h1 id="hello-text"> 
            Hi. I'm <br/> Genna Weber. 
          </h1>
        </div>
        <div className="sub-text-container">
          <div className="sub-text">
            <h4>I'm a full-stack web developer.</h4>
          </div>
          <Button  
            link="#contact"
          >
          GET IN TOUCH <i className="fas fa-paper-plane"></i>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home