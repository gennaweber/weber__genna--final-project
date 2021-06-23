import React, { useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {  

    let history = useHistory()
    let location = useLocation()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/auth`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({username, password})
      })

      const payload = await response.json()
      if (response.status >= 400) {
        setAuth(false)
      } else {
        sessionStorage.setItem('token', payload.token)

        let { from } = location.state || { from: { pathname: "/"} }
        history.replace(from)
      }
    }

  return (
      <div className="contact-container">
        <h2>Login</h2>
        {!auth && <p>Invalid credentials</p>}
        <form onSubmit={loginSubmit}>
          <input className="light-form" type="text" id="myUsername" name="myUsername" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)}/>
          <br/>
          <input className="light-form" type="password" id="myPassword" name="myPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <br/>
          <button type="submit" className="submit"><h3>Sign In</h3></button>   
        </form>
      </div>
  )
}

export default Login