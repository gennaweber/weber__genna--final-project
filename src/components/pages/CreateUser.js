import React, { useState } from 'react'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'
import ErrorMessage from '../ErrorMessage'
import SimpleFooter from '../SimpleFooter'
import { validatePassword, validateName, validateEmail } from '../../helpers/validateHelper'
import Button from '../Button'

const useStyles = makeStyles({
  root: {
    borderColor: 'rgba(198, 95, 99)'
  }
})

const CreateUser = (props) => {

  const classes = useStyles(props)

  //TODO: SIMPLIFY INTO OBJECTS
  const [validEmail, setValidEmail] = useState(true)
  const [validName, setValidName] = useState(true)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitMessage, setSubmitMessage] = useState("")

  const formSubmit = async event => {

    event.preventDefault()

    if(validName && validEmail && (passwordError.length === 0) && (submitMessage === "")){
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setSubmitMessage(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            setSubmitMessage(`Congrats! User created with id: ${payload.id}`)
        }
      }
      else{
        setSubmitMessage("Error: Please ensure the form is filled out correctly")
      }
    }

  const update = (e) => {

    //reset submit message on change
    setSubmitMessage("")

    if(e.target.name === "myName"){
      setValidName(validateName(e.target.value))
      setName(e.target.value)
    }

    if(e.target.name === "myEmail"){
      setValidEmail(validateEmail(e.target.value))
      setEmail(e.target.value)
    }

    if(e.target.name === "myPassword"){
      if(!validatePassword(e.target.value)){
        setPasswordError("Please include a password with more than 8 characters")
      }
      else { 
      setPasswordError("")
      }
      setPassword(e.target.value)
    }

    if(e.target.name === "myPassword2"){
      if(e.target.value !== password){
        setPasswordError("Passwords do not match")
      }
      else{
        setPasswordError("")
      }
    }
  }

    return (
      <>
        <main className="block-container">
          <div className="contact-container">
            <h2>Create User</h2>
            {(submitMessage.length > 1) && (submitMessage.includes("Error") ? <Alert variant="outlined" severity="error" className={classes.root}>{submitMessage}</Alert> : <Alert variant="outlined" severity="success">{submitMessage}</Alert>)}
            <form onSubmit={formSubmit}>
              <input className="light-form" type="text" id="myName" name="myName" placeholder="Name" value={name} onChange={e => update(e)} required/>
              {!validName && <ErrorMessage message="Please include a valid name with more than 1 character"/>}
              <input className="light-form" type="text" id="myEmail" name="myEmail" placeholder="Email" value={email} onChange={e => update(e)} required/>
              {!validEmail && <ErrorMessage message="Please include a valid email"/>}
              <input className="light-form" type="password" id="myPassword" name="myPassword" placeholder="Password" value={password} onChange={e => update(e)} required/>
              <input className="light-form" type="password" id="myPassword2" name="myPassword2" placeholder="Retype Password" onChange={e => update(e)} required/>
              {(passwordError.length > 0) && <ErrorMessage message={passwordError}/>}
              <Button type="submit" position="right">SIGN IN</Button>
          </form>
          </div>
        </main>
        <SimpleFooter/>
    </>
  )
}

export default CreateUser