import React, { useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage'

const Login = ({auth, setAuth}) => {  

    let history = useHistory()
    let location = useLocation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [attemptedAuth, setAttemptedAuth] = useState(false)

    const loginSubmit = async event => {
      event.preventDefault()
      const response = await fetch ("http://localhost:5000/auth", 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({email, password})
      })

      const payload = await response.json()
      console.log(response.status)
      if (response.status === 200) {
        setAuth(true)
        sessionStorage.setItem('token', payload.token)
        let { from } = location.state || { from: { pathname: "/entries"} }
        history.replace(from)
      } else {
        setAttemptedAuth(true)
      }
    }

  console.log(auth)


  return (
      <div className="contact-container">
        <h2>Login</h2>
        <form onSubmit={loginSubmit}>
          <input className="light-form" type="text" id="myEmail" name="myEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <br/>
          <input className="light-form" type="password" id="myPassword" name="myPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <br/>
          {!auth && attemptedAuth && <ErrorMessage message="Invalid credentials"/>}
          <button type="submit" className="submit"><h3>Sign In</h3></button>   
        </form>
      </div>
  )
}

export default Login