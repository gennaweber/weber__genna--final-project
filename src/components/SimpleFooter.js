import React from 'react'

const SimpleFooter = () => {
  return (
    <footer className="simple-footer">
      <nav className="container-skinny">
        <ul>
          <div className="footer-list">
          <li><a className="footer-link" href="/">HOME</a></li>
          <li><a className="footer-link" href="/login">LOGIN</a></li>
          <li><a className="footer-link" href="/create-user">CREATE USER</a></li>
          <li><a className="footer-link" href="/entries">ENTRIES</a></li>
          </div>
        </ul>
      </nav>
    </footer>
  )
}

export default SimpleFooter