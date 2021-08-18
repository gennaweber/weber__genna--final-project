import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'

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
import EditRow from '../../EditRow';

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
    // boxSizing: "border-box",
    // margin: 10,
    // left: 10
  },
  
}));

const ResumeAdmin = ({user}) => {

  const classes = useStyles();

  const [resume, setResume] = useState([])
  const [updateResume, setUpdateResume] = useState({})
  const [updateSkill, setUpdateSkill] = useState({})
  const [editStateSkill, setEditStateSkill] = useState(false)
  const [editStateDes, setEditStateDes] = useState(false)
  const [resumeDescription, setResumeDescription] = useState("Loading...")
  const [updateDesc, setUpdateDesc] = useState({})
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  //TODO: LOG OUT USER AFTER CERTAIN TIME

  const fetchResume = async (user) => {
    const res = await fetch(`http://localhost:5000/resume/${user}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    res.json().then((res) => setResume(res))
    .catch((err)=>console.log(err));
  }

  const fetchResumeDesc = async () => {
    const desc = await fetch(`http://localhost:5000/resume/description`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    desc.json().then((desc) => setResumeDescription(desc))
    .catch((err)=>console.log(err));
  }

  useEffect(()=>{
    fetchResume(user)
    fetchResumeDesc()
  }, [user]);

    const toggleEdit = (skillID) => {
      setUpdateDesc(resumeDescription)
      setEditStateDes(!editStateDes)
    }

    const toggleSkillEdit = (skillID) => {
      setEditStateSkill(!editStateSkill)
      if(skillID !== "undefined"){
        setUpdateSkill(resume.find(skill => skill.id === skillID))
      }
    }

    const handleDescChange = (e) => {
      let value = e.target.value
      setUpdateDesc(value)
   }

    const descFormSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/resume/description/${user}`, 
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({desc: updateDesc})
      })
  
      if (response.status === 200) {
          setEditStateDes(false)
          setStatus("success")
          fetchResumeDesc()
          setErrorMessage("Content updated!")
      } else {
          setStatus("error")
          setErrorMessage("Content could not be updated.")
      }
    }



  const handleSkillChange = (e, i) => {
    let value = e.target.value
    let key = e.target.name

    setUpdateSkill((prevData) => ({...prevData, [key]:value}))
  }

  console.log(updateSkill)

  return (
    <div>
        {!status || <Alert fullWidth className={classes.margin} severity={status || "info"}>{errorMessage}</Alert>}
        <TableContainer className={classes.margin} component={Paper}>
          <form className={classes.form} onSubmit={(e)=>descFormSubmit(e)}>
          <Table>
            <TableHead>
            <TableRow><StyledTableCell colSpan="3"><h3>Resume</h3></StyledTableCell></TableRow>
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
                : <TableCell className={classes.width}>{resumeDescription}</TableCell>}
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
                <TableCell size="small"><h6>Skill</h6></TableCell>
                <TableCell size="small"><h6>Rating</h6></TableCell>
                <TableCell size="small"><h6>Category</h6></TableCell>
                <TableCell size="small" colSpan="2"><h6>Actions</h6></TableCell>
            </TableHead>
            <TableBody>
              {resume.length ===  0 && <TableRow><TableCell>No entries yet</TableCell></TableRow>}
              {(resume.length > 0) &&
                resume.map(skill => 
                <TableRow className={classes.width}>
                  {editStateSkill && (updateSkill.id === skill.id ) ? 
                    <TableCell>
                      <TextField 
                        margin="normal"
                        // className={classes.width}
                        id={`name${updateSkill.id}`}
                        fullWidth
                        name="name"
                        value={updateSkill.name}
                        onChange={(e) => handleSkillChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{skill.name}</TableCell>
                  }
                  <TableCell>{skill.rating}</TableCell>
                  <TableCell>{skill.category}</TableCell>
                  <TableCell>
                    <Button onClick={()=>toggleSkillEdit(skill.id)} variant="contained" color="primary">
                      {editStateSkill && (updateSkill.id === skill.id ) ? "Cancel" : "Edit"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default ResumeAdmin