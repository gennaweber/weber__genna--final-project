import React from 'react'

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer-background">
      <div className="nav-container">
        <div className="left">
          <h3>Genna Weber | Full Stack Web Developer</h3>
          <h5 id="copyright">Copyright {year} </h5>
        </div> 
        <div className="right">
          <ul>
            <div className="footer-list">
              <li>
                <a href="https://www.facebook.com/genna.weber.545/" rel="noreferrer" target="_blank"><i className="fab fa-facebook-square"></i></a>
              </li>
              <li>
                <a href="https://github.com/gennaweber" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer