import React, { useEffect, useState } from 'react'
import LightShapeAlt from '../../svgs/LightShapeAlt'
import Card from '../../Card'

const About = () => {

  const [description, setDescription] = useState("Loading...")
  const [categories, setCategories] = useState([])

  const fetchDesc = async () => {
    const desc = await fetch(`http://localhost:5000/resume/description`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    desc.json().then((desc) => setDescription(desc))
    .catch((err)=>console.log(err));
  }

  const fetchCats = async () => {
    const cat = await fetch(`http://localhost:5000/resume/categories`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    cat.json().then((cat) => setCategories(cat))
    .catch((err)=>console.log(err));
  }

  useEffect(()=>{
    fetchDesc();
    fetchCats();
  }, []);

  return (
    <section id="about">
      <LightShapeAlt />
      <div className="container-wide">
        <h2>ABOUT</h2>
        <div className="profile-container">
          <img className="profile-img" src="images/profile.jpg" alt="Headshot of Genna Weber, a young white female with culy hair wearing a floral shirt." width="200" height="200" /> 
          <p className="profile-text" dangerouslySetInnerHTML={{__html: (description.replace("\n", "<br/><br/>"))}}></p>
        </div>
        <h4>MY SKILLS</h4>
        <div className="skill-container">
        {(categories.length > 1) && categories.map(category =>
          <Card 
            color={category.skillCatColor} 
            icon={category.skillCatIcon}
            title={category.skillCatName}
            skillID={category.skillCatID}
          />)}
        </div>
      </div>
    </section>
  )
}

export default About