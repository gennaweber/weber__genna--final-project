import React, {useState, useEffect} from 'react'
import Image from './Image'

const ImageGrid = ({togglePopup, setClickedImg}) => {

  //TODO: CREATE SORTING FEATURE FOR PROJECTS BASED ON LANGUAGE
  //TODO: ADD MORE PROJECTS IN CAROUSEL

  const [description, setDescription] = useState("Loading...")
  const [images, setImages] = useState([])

    const fetchDesc = async () => {
    const desc = await fetch(`http://localhost:5000/portfolio/description`,
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

    const fetchImgs = async () => {
    const imgs = await fetch(`http://localhost:5000/portfolio/images`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    imgs.json().then((imgs) => setImages(imgs))
    .catch((err)=>console.log(err));
  }

  
  useEffect(()=>{
    fetchDesc();
    fetchImgs();
  }, []);

  return (
    <div className="img-container">
      {(images.length > 1) && images.map(image => 
        <Image 
          src={image.src}
          alt={image.alt}
          id={image.id}
          togglePopup={togglePopup}
          setClickedImg={setClickedImg}
        />
      )}
      <p className="sub-copy">{description}</p>
    </div>
  )
}

export default ImageGrid