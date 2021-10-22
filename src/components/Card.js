import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'

const Card = ({ color, icon, title, skillID }) => {

  const [skills, setSkills] = useState([])

  const multiplyStars = (amount) => {
    return "⭐".repeat(amount)
  }

  const fetchSkills = async (skillID) => {
    const res = await fetch(`${process.env.REACT_APP_API}/resume/skills/${skillID}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    res.json().then((res) => setSkills(res))
    .catch((err)=>console.log(err));
  }

  useEffect(()=>{
    fetchSkills(skillID)
  }, [skillID]);

  return (
    <div className="skill-box">
      <div className={(color === "purple" && "color-block-1") || (color === "blue" && "color-block-2") || (color === "grey" && "color-block-3")}>
        <h3 dangerouslySetInnerHTML={{__html: icon}}></h3>
        <h3>{title}</h3>
      </div>
        <ul className="list-container">
          {(skills.length > 1) && skills.map(skill =><li key={uuid4()}>{skill.skillName}<span className="right">{multiplyStars(skill.skillRating)}</span></li>)}
        </ul>
    </div>    
  )
}

export default Card