import React from 'react'
import ImageGrid from '../../ImageGrid'

const Portfolio = ({togglePopup, setClickedImg}) => {
  return (
    <section id="portfolio">
      <div className="container-skinny">
        <h2>PORTFOLIO</h2>
        <ul>
          <div className="portfolio-text-container">
            <li>
              <h5>Javascript</h5>
            </li>
            <li>
              <h5>Node.js</h5>
            </li>
            <li>
              <h5>React</h5>
            </li>
          </div>
        </ul>
      <ImageGrid 
        togglePopup={togglePopup}
        setClickedImg={setClickedImg}
      />
      </div>
    </section>
  )
}

export default Portfolio