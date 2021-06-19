import React from 'react'
import LightShapeAlt from '../svgs/LightShapeAlt'
import BigLightBlueShape from '../svgs/BigLightBlueShape'

const About = () => {
  return (
    <section id="about">
      <LightShapeAlt />
        <div className="container-wide">
          <BigLightBlueShape />
          <h2>ABOUT</h2>
          <div className="profile-container">
            <img className="profile-img" src="images/profile.jpg" alt="Headshot of Genna Weber, a young white female with culy hair wearing a floral shirt." width="200" height="200" /> 
            <p className="profile-text">Hi, I'm Genna Weber. I'm a 23-year-old web developer in Southwestern Ontario. I'm currently a student at York University School of Continuing Studies in the Full Stack Web Development certificate program set to graduate Dec 2021.
            <br /> 
            <br />
            I've been working remotely for the past 4 years working as a Medical Language Specialist. I'm passionate about coding and eager to keep learning.</p>
          </div>
          <h4>MY SKILLS</h4>
          <div className="skill-container">
            <div className="skill-box">
              <div className="color-block-1">
                <h3><i className="fas fa-laptop-code fa-2x"></i></h3>
                <h3>CLIENT-SIDE</h3>
              </div>
              <ul className="list-container">
                <li>
                  HTML5 <span className="right">⭐⭐⭐⭐⭐</span>
                </li>
                <li>
                  CSS <span className="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Bootstrap <span className="right">⭐⭐⭐</span>
                </li>
                <li>
                  Javascript <span className="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  React <span className="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Gatsby <span className="right">⭐⭐⭐⭐</span>
                </li>
              </ul>
            </div>
          <div className="skill-box">
              <div className="color-block-2">
                <h3><i className="fas fa-cogs fa-2x"></i></h3>
                <h3>SERVER-SIDE</h3>
              </div>
                <ul className="list-container">
                <li>
                  Node.js <span className="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Express.js <span className="right">⭐⭐⭐</span>
                </li>
                <li>
                  PHP <span className="right">⭐⭐</span>
                </li>
                <li>
                  MySQL<span className="right">⭐</span>
                </li>
                <li>
                  MongoDB <span className="right">⭐⭐</span>
                </li>
                <li>
                  Heroku CLI <span className="right">⭐</span>
                </li>
              </ul>
            </div>
          <div className="skill-box">
            <div className="color-block-3">
              <h3><i className="far fa-object-ungroup fa-2x"></i></h3>
              <h3>DESIGN & MORE</h3>
            </div>
              <ul className="list-container">
                <li>
                  Git <span className="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Traditional art <span className="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Figma <span className="right">⭐⭐⭐</span>
                </li>
                <li>
                  Photoshop <span className="right">⭐⭐⭐</span>
                </li>
                <li>
                  Procreate <span className="right">⭐⭐⭐</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About