let date = new Date();
let year = date.getFullYear();

function handleClick(){

  document.addEventListener("click", function displayOverlay (e){
    let target = e.target
    let src = "";
    let id = target.getAttribute("id")
    target.getAttribute("src") ? src = target.getAttribute("src") : src = "";

    if (id !== "popup-copy" && id !== "website-popup" && id !== "popup-link" && id !== "popup-description"){
      document.getElementById("website-popup").style.display= "none";
      document.getElementById("overlay").style.display = "none";
    }

    if (target.tagName === "IMG") {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("website-popup").style.display = "block";
      document.getElementById("popup-img").src = src; 

      if (src === "images/email.jpg") {
        document.getElementById("popup-link").setAttribute("href", "https://gennasemailcollector.herokuapp.com/");
        document.getElementById("popup-title").innerHTML = "Email Collector";
        document.getElementById("popup-description").innerHTML = "A Simple Subscription Website";
        document.getElementById("popup-copy").innerHTML = "This is a simple website I designed using Bootstrap. The backend is configured using Node.js to communicate with the Mailchimp API to manage an email subscription list."
    }

      else if (src === "images/todo.jpg") {
        document.getElementById("popup-link").setAttribute("href", "https://gennastodolist.herokuapp.com");
        document.getElementById("popup-title").innerHTML = "Todo List";
        document.getElementById("popup-description").innerHTML = "A Simple and Clean Web App";
        document.getElementById("popup-copy").innerHTML = "This little web app has a backend created using Node.js and MongoDB to store the data."
    }

      else if (src === "images/lessons.jpg"){
        document.getElementById("popup-link").setAttribute("href", "https://plautdietsch-lessons.onrender.com/app/home");
        document.getElementById("popup-title").innerHTML = "Low German Lesson Website";
        document.getElementById("popup-description").innerHTML = "A Resource for Language Learners";
        document.getElementById("popup-copy").innerHTML =  "This website was a labour of love for the language of my heritage. Built with React, it uses Gatsby to pull data from Wordpress with GraphQL to programmatically create static web pages. The site is protected using simple user athentication and conditional client-side rendering. To top it off, the site is integrated with Algolia for a smooth search experience." 
    }

      else if (src === "images/gallery.jpg") {
        document.getElementById("popup-link").setAttribute("href", "http://www.duchmorri.com/Groupproject/index.html");
        document.getElementById("popup-title").innerHTML = "Nature Gallery";
        document.getElementById("popup-description").innerHTML = "A Beautiful Photosharing Website"
        document.getElementById("popup-copy").innerHTML = "This is my first group project and good practice with Git, css, and Javascript. Everyone in the team worked together to create a website that looks good and functions as intended." 
    }
    }

  });
}

document.getElementById("myName").addEventListener("input", function (e){

  let valueName = document.getElementById("myName").value;

  if (valueName.length < 2 || valueName.length > 40) {
    document.getElementById("myName").setCustomValidity("Tell me your name!");
    return errorField = "name";
  }

  else if(valueName.length >= 2) {
    document.getElementById("myName").setCustomValidity("");
  }

});

document.getElementById("myEmail").addEventListener("input", function(e){

  let valueEmail = document.getElementById("myEmail").value;

  if (valueEmail.length < 2 || valueEmail.length > 40) {
    document.getElementById("myEmail").setCustomValidity("Please provide a valid email");
     return errorField = "email"
  }

  else if (valueEmail.length >= 2 && valueEmail.includes("@") && valueEmail.includes(".")) {
    document.getElementById("myEmail").setCustomValidity("");
  }

  else {
    document.getElementById("myEmail").setCustomValidity("Please provide a valid email");
    return errorField = "email";
  }

})

document.getElementById("myComments").addEventListener("input", function(e){
  let valueComments = document.getElementById("myComments").value;
  
if (valueComments.length < 15) {
  document.getElementById("myComments").setCustomValidity("Tell me more!");
  return errorField = "comment"
}

else {
  document.getElementById("myComments").setCustomValidity("");
}

})


function submitData(e) {
  let valueComments = document.getElementById("myComments").value;
  let valueEmail = document.getElementById("myEmail").value;
  let valueName = document.getElementById("myName").value;

  console.log(valueComments.length);

  if (document.getElementById("contactForm").validity !== "valid" && (valueComments.length === 0 || valueEmail.length === 0 || valueName.length === 0)) {
    e.preventDefault();
    alert("Please check that you've filled everything out correctly.");
  }

}

function displayHelloText(){
    
  }
  
document.getElementById("copyright").innerHTML = "Copyright " + year;

handleClick();