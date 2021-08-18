import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const SimpleFooter = ({auth, setAuth}) => {

  let history = useHistory();
  const logout = (event) => {
      event.preventDefault()
      sessionStorage.removeItem('token')
      history.push("/login")
      setAuth(false)
  }
  return (
    <footer className="simple-footer">
      <nav className="container-skinny">
        <ul>
          <div className="footer-list">
            <li><Link className="footer-link" to="/">HOME</Link></li>
            {auth ?<li><Link className="footer-link" to="/login" onClick={(e)=>logout(e)}>LOGOUT</Link></li> : <li><Link className="footer-link" to="/login">LOGIN</Link></li>}
            <li><Link className="footer-link" to="/create-user">CREATE USER</Link></li>
            <li><Link className="footer-link" to="/entries">ENTRIES</Link></li>
            <li><Link className="footer-link" to="/admin">MANAGE CONTENT</Link></li>
          </div>
        </ul>
      </nav>
    </footer>
  )
}

export default SimpleFooter