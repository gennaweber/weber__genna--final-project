import React from 'react'

const Image = ({ src, alt, togglePopup, setClickedImg, id }) => {

  const handleClick = (e) => {
    togglePopup()
    setClickedImg(id)
  }

  return (
    <div className="img-helper"><img onClick={handleClick} src={src} alt={alt} /></div>
  )
}

export default Image
