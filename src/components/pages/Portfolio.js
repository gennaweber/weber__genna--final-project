import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div class="container-skinny">
        <h2>PORTFOLIO</h2>
        <ul>
          <div class="portfolio-text-container">
            <li>
              <h5>Javascript</h5>
            </li>
            <li>
              <h5>/</h5>
            </li>
            <li>
              <h5>Node.js</h5>
            </li>
            <li>
              <h5>/</h5>
            </li>
            <li>
              <h5>React</h5>
            </li>
          </div>
        </ul>
        <div class="img-container">
          <div class="img-helper"><img src="images/todo.jpg" alt="Todo Website" /></div>
          <div class="img-helper"><img src="images/email.jpg" alt="Subscription Website" /></div>
          <div class="img-helper"><img src="images/lessons.jpg" alt="Lesson Website" /></div>
          <div class="img-helper"><img src="images/gallery.jpg" alt="Gallery Website" /></div>
          <p class="sub-copy">Click the images to learn more about each site I've created or helped create. This particular website is built using React.</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio