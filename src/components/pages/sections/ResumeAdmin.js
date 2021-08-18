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
import { makeStyles } from '@material-ui/core/styles';

import DescriptionTable from '../../DescriptionTable';


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

const ResumeAdmin = ({user}) => {

  const classes = useStyles();

  const [savedRes, setSavedRes] = useState("")
  const [resume, setResume] = useState([])
  const [updateSkill, setUpdateSkill] = useState({})
  const [editStateSkill, setEditStateSkill] = useState(false)
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  //TODO: LOG OUT USER AFTER CERTAIN TIME

  useEffect(()=>{
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

    fetchResume(user);
  }, [user, savedRes])

    const toggleSkillEdit = (skillID) => {
      setEditStateSkill(!editStateSkill)
      if(skillID !== "undefined"){
        setUpdateSkill(resume.find(skill => skill.id === skillID))
      }
    }


  const handleSkillChange = (e, i) => {
    let value = e.target.value
    let key = e.target.name

    setUpdateSkill((prevData) => ({...prevData, [key]:value}))
  }

    const skillEditSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/resume/skills/${updateSkill.id}`, 
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(updateSkill)
      })
  
      if (response.status === 200) {
          setSavedRes(response)
          setEditStateSkill(false)
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
        <DescriptionTable 
          user={user}
          section={"resume"}
        />
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
                <TableRow id={uuid4()} className={classes.width}>
                  {editStateSkill && (updateSkill.id === skill.id ) ? 
                    <TableCell>
                      <TextField 
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
                  {editStateSkill && (updateSkill.id === skill.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`rating${updateSkill.id}`}
                        fullWidth
                        name="rating"
                        value={updateSkill.rating}
                        onChange={(e) => handleSkillChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{skill.rating}</TableCell>
                  }
                  {editStateSkill && (updateSkill.id === skill.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`category${updateSkill.id}`}
                        fullWidth
                        name="category"
                        value={updateSkill.category}
                        onChange={(e) => handleSkillChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{skill.category}</TableCell>
                  }
                  <TableCell>
                    {editStateSkill && (updateSkill.id === skill.id) ?
                    <Button onClick={(e)=>skillEditSubmit(e)} disabled={editStateSkill && (updateSkill.id !== skill.id)} variant="contained" color="primary">
                      Submit
                    </Button>
                    :
                    <Button onClick={()=>toggleSkillEdit(skill.id)} disabled={editStateSkill && (updateSkill.id !== skill.id)} variant="contained" color="primary">
                      Edit
                    </Button>
                    }
                  </TableCell>
                  <TableCell>
                    {editStateSkill && (updateSkill.id === skill.id) ?
                    <Button onClick={()=>toggleSkillEdit(skill.id)} variant="contained" color="secondary">
                      Cancel
                    </Button>
                    :
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>}
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default ResumeAdmin