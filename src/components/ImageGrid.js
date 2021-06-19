import React from 'react'
import Image from './Image'

const ImageGrid = ({togglePopup, setClickedImg}) => {
  return (
    <div className="img-container">
      <Image 
        src="images/todo.jpg"
        alt="Purple todo list with date on the top"
        id="todo"
        togglePopup={togglePopup}
        setClickedImg={setClickedImg}
      />
      <Image 
        src="images/email.jpg"
        alt="Simple subscription form for a newletter"
        id="email"
        togglePopup={togglePopup}
        setClickedImg={setClickedImg}
      />
      <Image 
        src="images/lessons.jpg"
        alt="Simple, mainly text website with green header"
        id="lg"
        togglePopup={togglePopup}
        setClickedImg={setClickedImg}
      />
      <Image 
        src="images/gallery.jpg"
        alt="Gallery website with a photograph of a leaf in the background overlaid with a welcome message"
        id="gallery"
        togglePopup={togglePopup}
        setClickedImg={setClickedImg}
      />
      <p className="sub-copy">Click the images to learn more about each site I've created or helped create. This particular website was built first using vanilla Javascript and later refactored to use React.</p>
    </div>
  )
}

export default ImageGrid