import React from 'react'

const Popup = ({ isPopupOpen, togglePopup, clickedImg }) => {

  //TODO: Add more images for each example as a carousel gallery

  const copy = [
      { 
        id: "email",
        name: "Email Collector",
        link: "https://gennasemailcollector.herokuapp.com/",
        src: "./images/email.jpg",
        alt: "Simple subscription form for a newletter",
        subtitle: "A Simple Subscription Website",
        description: "This is a simple website I designed using Bootstrap. The backend is configured using Node.js to communicate with the Mailchimp API to manage an email subscription list."
      },
      {
        id: "todo",
        name: "Todo List",
        link: "https://gennastodolist.herokuapp.com",
        src: "./images/todo.jpg",
        alt: "Purple todo list with date on the top",
        subtitle: "A Simple and Clean Web App",
        description: "This little web app has a backend created using Node.js and MongoDB to store the data." 
      },
      {
        id: "lg",
        name: "Low German Lesson Website",
        link: "https://plautdietsch-lessons.onrender.com/app/home",
        src: "./images/lessons.jpg",
        alt: "Simple, mainly text website with green header",
        subtitle: "A Resource for Language Learners",
        description: "This website was a labour of love for the language of my heritage. Built with React, it uses Gatsby to pull data from Wordpress with GraphQL to programmatically create static web pages. The site is protected using simple user athentication and conditional client-side rendering. To top it off, the site is integrated with Algolia for a smooth search experience."
      },
      {
        id: "gallery",
        name: "Nature Gallery",
        link: "http://www.duchmorri.com/Groupproject/index.html",
        src: "./images/gallery.jpg",
        alt: "Gallery website with a photograph of a leaf in the background overlaid with a welcome message",
        subtitle: "A Beautiful Photosharing Website",
        description: "This is my first group project created to get more practice with Git, css, and Vanilla Javascript. Everyone in the team worked together to create a website that looks good and functions as intended."
      }
    ]

  //data for popup found based on id of img clicked, state managed in App
  const findImg = (clickedImg) => {
    let foundImg = copy.find( ({ id }) => id === clickedImg)
    return foundImg
  }

  //TODO: Clicking outside of popup also tiggers togglePopup to close popup

  return (
    <>
    { isPopupOpen &&
    <div id="overlay">
      <div id="website-popup">
        <button onClick={togglePopup} className="exit"><i className="fas fa-times"></i></button>
        <article>
        <figure>
          <img id={findImg(clickedImg).id} src={findImg(clickedImg).src} alt={findImg(clickedImg).alt} height="200" width="300" />
            <div className="website-text">
              <a href={findImg(clickedImg).link} target="_blank" rel="noreferrer">
                <h4>{findImg(clickedImg).name}</h4>
              </a>
              <h5>{findImg(clickedImg).subtitle}</h5>
              <figcaption>{findImg(clickedImg).description}</figcaption>
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