import React from 'react'
import LightShapeAlt from '../../svgs/LightShapeAlt'
import Card from '../../Card'

const skills = {
  client: [
    {name: "HTML5", rating: 4},
    {name: "CSS", rating: 4},
    {name: "Bootstrap", rating: 3},
    {name: "Javascript", rating: 4},
    {name: "React", rating: 4},
    {name: "Gatsby", rating: 4}
  ],

  server: [
    {name: "Node.js", rating: 4},
    {name: "Express.js", rating: 3},
    {name: "PHP", rating: 2},
    {name: "MySQL", rating: 1},
    {name: "MongoDB", rating: 2},
    {name: "Heroku CLI", rating: 1}
  ],

  other: [
    {name: "Git", rating: 4},
    {name: "Traditional Art", rating: 4},
    {name: "Figma", rating: 3},
    {name: "Photoshop", rating: 3},
    {name: "Procreate", rating: 2}
  ]
}


const About = () => {
  return (
    <section id="about">
      <LightShapeAlt />
        <div className="container-wide">
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
            <Card 
              color="purple"  
              icon={<i className="fas fa-laptop-code fa-2x"></i>}
              title="CLIENT SIDE"
              skills={skills.client}
            />
            <Card
              color="blue"
              icon={<i className="fas fa-cogs fa-2x"></i>}
              title="SERVER SIDE"
              skills={skills.server}
            />
            <Card 
              color="grey"
              icon={<i className="far fa-object-ungroup fa-2x"></i>}
              title="DESIGN & MORE"
              skills={skills.other}
            />
        </div>
      </div>
    </section>
  )
}

export default About