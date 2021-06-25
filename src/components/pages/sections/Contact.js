import React, {useState} from 'react'
import { validate } from 'uuid'
import ErrorMessage from '../../ErrorMessage'

const Contact = () => {

  const [validContent, setValidContent] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [validName, setValidName] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  //TODO: MOVE TO SEPARATE HELPER FILE
  // logic for validating entries

  const validateName = (name) =>{
    if(name.length <= 1) {
      setValidName(false)  
    } else {
      setValidName(true)
    }
  }

  const validateEmail = (email) => {
    if(!email.includes("@") || !email.includes(".")) {
      setValidEmail(false)
    } else {
      setValidEmail(true)
    }
  }

  const validateContent = (content) => {
    if(content.length > 15){
      setValidContent(true)
    } else {
      setValidContent(false)
    }
  }

  const update = (e) => {
    if(e.target.name === "myName"){
      validateName(e.target.value)
      setName(e.target.value)
    }

    if(e.target.name === "myEmail"){
      validateEmail(e.target.value)
      setEmail(e.target.value)
    }

    if(e.target.name === "myComments"){
      validateContent(e.target.value)
      setContent(e.target.value)
    }
  }

  const formSubmit = async event => {
    event.preventDefault()

    validateName(name)
    validateEmail(email)
    validateContent(content)

    //TODO: FIX BUG WHERE FIRST SUBMIT WORKS -- USE USEEFFECT?
    //TODO: DON'T ALLOW RESUBMISSION UNLESS CHANGE
    if(validName && validEmail && validContent){
        const response = await fetch('http://localhost:5000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
      }

      else {
        alert("Please ensure you've filled everything out!")
      }
    }

  return (
      <section id="contact">
        <div className="contact-container">
          <h2>GET IN TOUCH</h2>
          <p>Have a project in mind? Want to take your website to the next level? Let's chat about it.</p>
          <form onSubmit={formSubmit}>
            <input className={!validName ? "error-input" : ""} type="text" id="myName" name="myName" placeholder="Name" value={name} onChange={(e) => update(e)}/>
            {!validName && <ErrorMessage message="Please include a valid name with more than 1 character"/>}
            <br/>
            <input className={!validEmail? "error-input" : ""} type="email" id="myEmail" name="myEmail" placeholder="Email" value={email} onChange={e => update(e)}/>
            {!validEmail && <ErrorMessage message="Please include a valid email"/>}
            <br/>
            <textarea className={!validContent ? "error-input" : ""} rows="8" cols="30" id="myComments" name="myComments" placeholder="What can I help you with?" value={content} onChange={e => update(e)}></textarea>
            {!validContent && <ErrorMessage message="Please include valid comments with more than 15 characters"/>}
            <br/>
            <button type="submit" className="submit"><h3>SUBMIT</h3></button>   
          </form>
        </div>
    </section>
  )
}

export default Contact