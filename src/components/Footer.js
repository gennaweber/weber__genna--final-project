import React from 'react'

const Footer = () => {
  return (
    <footer class="footer-background">
      <div class="nav-container">
        <div class="left">
          <h3>Genna Weber | Full Stack Web Developer</h3>
          <h5 id="copyright">Copyright</h5>
        </div> 
        <div class="right">
          <ul>
            <div class="footer-list">
              <li>
                <a href="https://www.facebook.com/genna.weber.545/" target="_blank"><i class="fab fa-facebook-square"></i></a>
              </li>
              <li>
                <a href="https://github.com/gennaweber" target="_blank"><i class="fab fa-github"></i></a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer