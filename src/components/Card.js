import React from 'react'
import { v4 as uuid4 } from 'uuid'

const Card = ({ color, icon, title, skills }) => {

  const multiplyStars = (amount) => {
    return "⭐".repeat(amount)
  }

  return (
    <div className="skill-box">
      <div className={(color === "purple" && "color-block-1") || (color === "blue" && "color-block-2") || (color === "grey" && "color-block-3")}>
        <h3>{icon}</h3>
        <h3>{title}</h3>
      </div>
        <ul className="list-container">
          {skills.map(skill =><li key={uuid4()}>{skill.name}<span className="right">{multiplyStars(skill.rating)}</span></li>)}
        </ul>
    </div>    
  )
}

export default Card