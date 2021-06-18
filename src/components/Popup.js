import React from 'react'

const Popup = ({ isPopupOpen, togglePopup }) => {

  const copy = [
      { 
        id: 1,
        name: "Email Collector",
        link: "https://gennasemailcollector.herokuapp.com/",
        subtitle: "A Simple Subscription Website",
        description: "This is a simple website I designed using Bootstrap. The backend is configured using Node.js to communicate with the Mailchimp API to manage an email subscription list."
      },
      {
        id: 2,
        name: "Todo List",
        link: "https://gennastodolist.herokuapp.com",
        subtitle: "A Simple and Clean Web App",
        description: "This little web app has a backend created using Node.js and MongoDB to store the data." 
      },
      {
        id: 3,
        name: "Low German Lesson Website",
        link: "https://plautdietsch-lessons.onrender.com/app/home",
        subtitle: "A Resource for Language Learners",
        description: "This website was a labour of love for the language of my heritage. Built with React, it uses Gatsby to pull data from Wordpress with GraphQL to programmatically create static web pages. The site is protected using simple user athentication and conditional client-side rendering. To top it off, the site is integrated with Algolia for a smooth search experience."
      },
      {
        id: 4,
        name: "Nature Gallery",
        link: "http://www.duchmorri.com/Groupproject/index.html",
        subtitle: "A Beautiful Photosharing Website",
        description: "This is my first group project created to get more practice with Git, css, and Vanilla Javascript. Everyone in the team worked together to create a website that looks good and functions as intended."
      }
    ]
  return (
    <>
    { isPopupOpen &&
    <div id="overlay">
      <div id="website-popup">
        <button onClick={togglePopup} class="exit"><i class="fas fa-times"></i></button>
        <img id="popup-img" src="" alt="placeholder" height="200" width="300" />
        <article class="website-text">
          <a id="popup-link" href="#" target="_blank">
            <h4 id="popup-title">Title</h4>
          </a>
          <h5 id="popup-description">Sample subheading</h5>
          <p id="popup-copy">Sample copy</p>
        </article>
      </div>
    </div>
    }
    </>
  )
}

export default Popup