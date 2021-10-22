import React, { useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage'
import SimpleFooter from '../SimpleFooter'
import CustomButton from '../Button'

const Login = ({auth, setAuth }) => {  

    let history = useHistory()
    let location = useLocation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [attemptedAuth, setAttemptedAuth] = useState(false)

    const loginSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`${process.env.REACT_APP_API}/auth`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({email, password})
      })

      const payload = await response.json()
      if (response.status === 200) {
        setAuth(true)
        sessionStorage.setItem('token', payload.token)
        let { from } = location.state || { from: { pathname: "/admin"} }
        history.replace(from)
      } else {
        setAttemptedAuth(true)
      }
    }

  return (
      <>
        <main className="block-container">
          <div className="contact-container">
            <h2>Login</h2>
            <form onSubmit={loginSubmit}>
              <input className="light-form" type="text" id="myEmail" name="myEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
              <input className="light-form" type="password" id="myPassword" name="myPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
              {!auth && attemptedAuth && <ErrorMessage message="Invalid credentials"/>}
              <CustomButton type="submit" position="right">SIGN IN</CustomButton>
            </form>
          </div>
        </main>
        <SimpleFooter 
          auth={auth} 
          setAuth={setAuth}
        />
      </>
  )
}

export default Login