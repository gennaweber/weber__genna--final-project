import React, {useState, useEffect} from 'react'

const Popup = ({ isPopupOpen, togglePopup, clickedImg }) => {

  //TODO: ADD MORE IMAGES FOR EACH EXAMPLE IN CAROUSEL FORMAT
  //TODO: ADD ANIMATION ON OPEN
  //TODO: Clicking outside of popup also tiggers togglePopup to close popup

  const [project, setProject] = useState({});

  const fetchProject = async (id) => {
    const pro = await fetch(`${process.env.REACT_APP_API}/portfolio/project/${id}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    pro.json().then((pro) => setProject(pro))
    .catch((err)=>console.log(err));
  }

  
  useEffect(()=>{
    fetchProject(clickedImg)
  }, [clickedImg]);

  return (
    <>
    { isPopupOpen &&
    <div id="overlay">
      <div id="website-popup">
        <button onClick={togglePopup} className="exit"><i className="fas fa-times"></i></button>
        <article>
        <figure>
          <img id={project.id} src={project.src} alt={project.alt} height="200" width="300" />
            <div className="website-text">
              <a href={project.link} target="_blank" rel="noreferrer">
                <h4>{project.name}</h4>
              </a>
              <h5>{project.subtitle}</h5>
              <figcaption>{project.description}</figcaption>
            </div>
          </figure>
        </article>
      </div>
    </div>
    }
    </>
  )
}

export default Popup