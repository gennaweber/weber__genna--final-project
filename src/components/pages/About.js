import React from 'react'
import LightShapeAlt from '../svgs/LightShapeAlt'
import BigLightBlueShape from '../svgs/BigLightBlueShape'

const About = () => {
  return (
    <section id="about">
      <LightShapeAlt />
        <div class="container-wide">
          <BigLightBlueShape />
          <h2>ABOUT</h2>
          <div class="profile-container">
            <img class="profile-img" src="images/profile.jpg" alt="Headshot of Genna Weber, a young white female with culy hair wearing a floral shirt." width="200" height="200" /> 
            <p class="profile-text">Hi, I'm Genna Weber. I'm a 23-year-old web developer in Southwestern Ontario. I'm currently a student at York University School of Continuing Studies in the Full Stack Web Development certificate program set to graduate Dec 2021.
            <br /> 
            <br />
            I've been working remotely for the past 4 years working as a Medical Language Specialist. I'm passionate about coding and eager to keep learning.</p>
          </div>
          <h4>MY SKILLS</h4>
          <div class="skill-container">
            <div class="skill-box">
              <div class="color-block-1">
                <h3><i class="fas fa-laptop-code fa-2x"></i></h3>
                <h3>CLIENT-SIDE</h3>
              </div>
              <ul class="list-container">
                <li>
                  HTML5 <span class="right">⭐⭐⭐⭐⭐</span>
                </li>
                <li>
                  CSS <span class="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Bootstrap <span class="right">⭐⭐⭐</span>
                </li>
                <li>
                  Javascript <span class="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  React <span class="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Gatsby <span class="right">⭐⭐⭐⭐</span>
                </li>
              </ul>
            </div>
          <div class="skill-box">
              <div class="color-block-2">
                <h3><i class="fas fa-cogs fa-2x"></i></h3>
                <h3>SERVER-SIDE</h3>
              </div>
                <ul class="list-container">
                <li>
                  Node.js <span class="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Express.js <span class="right">⭐⭐⭐</span>
                </li>
                <li>
                  PHP <span class="right">⭐⭐</span>
                </li>
                <li>
                  MySQL<span class="right">⭐</span>
                </li>
                <li>
                  MongoDB <span class="right">⭐⭐</span>
                </li>
                <li>
                  Heroku CLI <span class="right">⭐</span>
                </li>
              </ul>
            </div>
          <div class="skill-box">
            <div class="color-block-3">
              <h3><i class="far fa-object-ungroup fa-2x"></i></h3>
              <h3>DESIGN & MORE</h3>
            </div>
              <ul class="list-container">
                <li>
                  Git <span class="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Traditional art <span class="right">⭐⭐⭐⭐</span>
                </li>
                <li>
                  Figma <span class="right">⭐⭐⭐</span>
                </li>
                <li>
                  Photoshop <span class="right">⭐⭐⭐</span>
                </li>
                <li>
                  Procreate <span class="right">⭐⭐⭐</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About