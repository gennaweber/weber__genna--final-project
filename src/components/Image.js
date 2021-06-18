import React from 'react'

const Image = ({ src, alt, togglePopup, setClickedImage, id }) => {

  const handleClick = (e) => {
    togglePopup()
  }

  return (
    <div class="img-helper"><img onClick={handleClick} src={src} alt={alt} /></div>
  )
}

export default Image
