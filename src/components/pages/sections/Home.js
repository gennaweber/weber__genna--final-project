import React from 'react'
import PatternShape from '../../svgs/PatternShape'
import LightShape from '../../svgs/LightShape'
import SmallShape from '../../svgs/SmallShape'
import GreenShape from '../../svgs/GreenShape'
import CustomButton from '../../Button'

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
          <CustomButton  
            link="#contact"
          >
          GET IN TOUCH <i className="fas fa-paper-plane"></i>
          </CustomButton>
        </div>
      </div>
    </section>
  )
}

export default Home