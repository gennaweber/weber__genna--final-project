import React, { useEffect, useState } from 'react'
import { parseJwt } from '../../helpers/authHelper.js'
import { useHistory } from 'react-router-dom'
import { v4 as uuid4 } from 'uuid'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SimpleFooter from '../../components/SimpleFooter'
import CustomButton from '../Button'

const Entries = ({auth, setAuth}) => {

  let history = useHistory();
  const token = sessionStorage.getItem('token')
  const user = parseJwt(token).email
  const [listing, setListing] = useState([])

  //Redirect to login screen when auth is false
  if (!auth){
    history.push("/login")
  }

  const logout = (event) => {
      event.preventDefault()
      sessionStorage.removeItem('token')
      history.push("/login")
      setAuth(false)
  }


  //TODO: LOG OUT USER AFTER CERTAIN TIME

  useEffect(() => {
      const getData = async () => {
          const response = await fetch(`${process.env.REACT_APP_API}/contact_form/entries`, {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          const data = await response.json()
          setListing(data)
      }
      getData()
  }, [token])


  return (
    <>
    <main className="block-container">
      <div className="container-wide">
        <h2>Contact Form Entries</h2>
          <div className="full-width">
            <p className="sub-text left">Logged in as {user}</p>
          </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><h6>Name</h6></TableCell>
                <TableCell><h6>Email</h6></TableCell>
                <TableCell><h6>Message</h6></TableCell>
                <TableCell><h6>Submit Time</h6></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listing.length ===  0 && <TableRow><TableCell>No entries yet</TableCell></TableRow>}
              {listing.length > 0 &&
                listing.map(entry => 
                <TableRow key={uuid4()}>
                  <TableCell>{entry.entryName}</TableCell>
                  <TableCell>{entry.entryEmail}</TableCell>
                  <TableCell>{entry.entryContent}</TableCell>
                  <TableCell>{entry.entrySubmitTime}</TableCell>
                </TableRow>)
              }
            </TableBody>
          </Table>
        </TableContainer>
        <div className="full-width">
          <CustomButton position="right" onclick={logout}>LOGOUT</CustomButton>
        </div>
      </div>
    </main>
    <SimpleFooter 
      auth={auth} 
      setAuth={setAuth}
    />
    </>
  )
}

export default Entries