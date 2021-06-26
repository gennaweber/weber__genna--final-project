import React from 'react'

const Image = ({ src, alt, togglePopup, setClickedImg, id }) => {

  const handleClick = (e) => {
    togglePopup()
    setClickedImg(id)
  }

  return (
    <figure tabIndex="0" onKeyDown={handleClick} className="img-helper"><img className="portfolio-img" onClick={handleClick} src={src} alt={alt} /></figure>
  )
}

export default Image
