import React, { useEffect, useState } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: '24px'
  },

}))(TableCell);

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "41.75vw",
  },

  margin: {
    marginBottom: 10
  },

  form: {
    margin: 0,
    padding: 0,
  }, 

  width: {
    width: "75%",
  },
  
}));

const DescriptionTable = ({user, section, title}) => {

  const classes = useStyles();

  const [savedRes, setSavedRes] = useState("")
  const [editStateDes, setEditStateDes] = useState(false)
  const [rawDesc, setRawDesc] = useState("Loading...")
  const [updateDesc, setUpdateDesc] = useState({})
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  console.log(section)

  useEffect(()=>{
    const fetchResumeDesc = async () => {
    const desc = await fetch(`http://localhost:5000/${section}/description`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    desc.json().then((desc) => setRawDesc(desc))
    .catch((err)=>console.log(err));
  }
    fetchResumeDesc()
  }, [user, section, savedRes]);

    const toggleEdit = () => {
      setUpdateDesc(rawDesc.resumeDescription || rawDesc.description)
      setEditStateDes(!editStateDes)
    }

    const handleDescChange = (e) => {
      let value = e.target.value
      setUpdateDesc(value)
   }

    const descFormSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/${section}/description/${rawDesc.resumeID || rawDesc.portfolioID}`, 
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({desc: updateDesc})
      })
  
      if (response.status === 200) {
          setSavedRes(response)
          setEditStateDes(false)
          setStatus("success")
          setErrorMessage("Content updated!")
      } else {
          setSavedRes(response)
          setStatus("error")
          setErrorMessage("Content could not be updated.")
      }
    }

  return (
    <div>
        {!status || <Alert fullWidth className={classes.margin} severity={status || "info"}>{errorMessage}</Alert>}
        <TableContainer className={classes.margin} component={Paper}>
          <form className={classes.form} onSubmit={(e)=>descFormSubmit(e)}>
          <Table>
            <TableHead>
            <TableRow><StyledTableCell colSpan="3"><h3>{title}</h3></StyledTableCell></TableRow>
              <TableRow>
                <TableCell className={classes.width}><h6>Description</h6></TableCell>
                <TableCell colSpan="2"><h6>Actions</h6></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {editStateDes? 
                <>
                <TableCell className={classes.width}>
                      <TextField 
                        className={classes.textField}
                        id="desc"
                        fullWidth
                        multiline
                        value={updateDesc}
                        onChange={(e)=>handleDescChange(e)}
                      />
                  </TableCell>
                </>
                : <TableCell className={classes.width}>{rawDesc.resumeDescription || rawDesc.description}</TableCell>}
                <TableCell>
                  <Button onClick={()=>toggleEdit()}variant="contained" color="primary">
                    {!editStateDes ? "Edit" : "Cancel"}
                  </Button>
                </TableCell>
                {editStateDes && <TableCell><Button type="submit" variant="contained">Submit</Button></TableCell>}
              </TableRow>
            </TableBody>
          </Table>
          </form>
        </TableContainer>
    </div>
  )
}

export default DescriptionTable