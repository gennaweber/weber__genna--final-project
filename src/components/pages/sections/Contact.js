import React, {useState} from 'react'
import ErrorMessage from '../../ErrorMessage'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { validateEmail, validateContent, validateName } from '../../../helpers/validateHelper'
import Button from '../../Button'

const useStyles = makeStyles({
  root: {
    borderColor: 'rgba(198, 95, 99)'
  }
})

const Contact = (props) => {

  const classes = useStyles(props)

  //TODO: CREATE VALUES OBJECT & ERRORS OBJECT FOR MORE REUSABILITY
  const [validContent, setValidContent] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [validName, setValidName] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [submitMessage, setSubmitMessage] = useState("")

  //LOGIC FOR VALIDATING ENTRIES
  const update = (e) => {
    setSubmitMessage("")

    if(e.target.name === "myName"){
      setValidName(validateName(e.target.value))
      setName(e.target.value)
    }

    if(e.target.name === "myEmail"){
      setValidEmail(validateEmail(e.target.value))
      setEmail(e.target.value)
    }

    if(e.target.name === "myComments"){
      setValidContent(validateContent(e.target.value))
      setContent(e.target.value)
    }
  }

  const formSubmit = async event => {
    event.preventDefault()

    if(validName && validEmail && validContent && (submitMessage === "")){
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
            setSubmitMessage(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            setSubmitMessage(`Congrats! Submission submitted with id: ${payload.id}`)
        }
      }
      else{
        setSubmitMessage("Error: Please ensure the form is filled out correctly")
      }
    }

  return (
      <section id="contact">
        <div className="contact-container">
          <h2>GET IN TOUCH</h2>
          <p className="contact-subtext">Have a project in mind? Want to take your website to the next level? Let's chat about it.</p>
          {(submitMessage.length > 1) && (submitMessage.includes("Error") ? <Alert variant="outlined" severity="error" className={classes.root}>{submitMessage}</Alert> : <Alert variant="outlined" severity="success">{submitMessage}</Alert>)}
          <form onSubmit={formSubmit}>
            <input className={!validName ? "error-input" : ""} type="text" id="myName" name="myName" placeholder="Name" value={name} onChange={(e) => update(e)} required/>
            {!validName && <ErrorMessage message="Please include a valid name with more than 1 character"/>}
            <br/>
            <input className={!validEmail? "error-input" : ""} type="email" id="myEmail" name="myEmail" placeholder="Email" value={email} onChange={e => update(e)} required/>
            {!validEmail && <ErrorMessage message="Please include a valid email"/>}
            <br/>
            <textarea className={!validContent ? "error-input" : ""} rows="8" cols="30" id="myComments" name="myComments" placeholder="What can I help you with?" value={content} onChange={e => update(e)} required></textarea>
            {!validContent && <ErrorMessage message="Please include valid comments with more than 15 characters"/>}
            <br/>
            <Button type="submit" position="right">SUBMIT</Button>
          </form>
        </div>
    </section>
  )
}

export default Contact