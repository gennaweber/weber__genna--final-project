import React, { useState } from 'react'
import { parseJwt } from '../../helpers/authHelper.js'
import { useHistory } from 'react-router-dom'

import SimpleFooter from '../../components/SimpleFooter'
import ResumeAdmin from './sections/ResumeAdmin.js';

const Admin = ({auth, setAuth}) => {

  let history = useHistory();
  const token = sessionStorage.getItem('token')
  const user = parseJwt(token).email

  const [portfolio, setPortfolio] = useState([])

  //Redirect to login screen when auth is false
  if (!auth){
    history.push("/login")
  }

  //TODO: LOG OUT USER AFTER CERTAIN TIME

  return (
    <>
    <main className="block-container">
      <div className="container-wide">
        <h2>Manage Content</h2>
          <div className="full-width">
            <p className="sub-text left">Logged in as {user}</p>
          </div>
        <ResumeAdmin user={user}/>
      </div>
    </main>
      <SimpleFooter 
        auth={auth} 
        setAuth={setAuth}
      />
    </>
  )
}

export default Admin