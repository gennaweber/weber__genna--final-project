import React from 'react'

const Popup = () => {
  return (
    <div id="overlay">
      <div id="website-popup">
        <i id="exit" class="fas fa-times"></i>
        <img id="popup-img" src="images/placeholder.png" alt="placeholder image" height="200" width="300" />
        <article class="website-text">
          <a id="popup-link" href="#" target="_blank">
            <h4 id="popup-title">Title</h4>
          </a>
          <h5 id="popup-description"></h5>
          <p id="popup-copy"></p>
        </article>
      </div>
    </div>
  )
}

export default Popup