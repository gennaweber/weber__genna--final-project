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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import DescriptionTable from '../../DescriptionTable';
import CustomButton from '../../Button';
import DeletePopup from '../../DeletePopup';


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
  const [addState, setAddState] = useState(false)
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteID, setDeleteID] = useState(0)

  //TODO: LOG OUT USER AFTER CERTAIN TIME

  //prevent accidental deletion
    const handlePop = (event, skillID) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      setDeleteID(skillID)
    };


  //get array of skills
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

  const addNewSkill = () => {
    setAddState(!addState)
    setUpdateSkill({name: "", rating:"", categoryRef:1, resumeID:resume[0].resumeID})
  }

  const addSkillSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/resume/newskill/${user}`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(updateSkill)
      })
  
      if (response.status === 201) {
          setSavedRes(response)
          setAddState(false)
          setStatus("success")
          setErrorMessage("New skill successfully created!")
      } else {
          setSavedRes(response)
          setStatus("error")
          setErrorMessage("New skill could not be created.")
      }
    }

    const handleDelete = async (id) => {
      const response = await fetch (`http://localhost:5000/resume/skills/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        }
      })
  
      if (response.status === 200) {
          setSavedRes(response)
          setEditStateSkill(false)
          setStatus("success")
          setErrorMessage("Content deleted.")
      } else {
          setSavedRes(response)
          setStatus("error")
          setErrorMessage("Content could not be deleted.")
      }
    }

  return (
    <div>
        {!status || <Alert fullWidth className={classes.margin} severity={status || "info"}>{errorMessage}</Alert>}
        <DescriptionTable 
          user={user}
          section="resume"
          title="Resume"
        />
        <TableContainer className={classes.margin} component={Paper}>
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
                      <Select
                        required
                        fullWidth
                        labelId="category-select"
                        id="category-select"
                        name="categoryRef"
                        value={updateSkill.categoryRef}
                        onChange={(e) => handleSkillChange(e)}
                      >
                        <MenuItem value={1}>Client Side</MenuItem>
                        <MenuItem value={2}>Server Side</MenuItem>
                        <MenuItem value={3}>Other</MenuItem>
                      </Select>                
                    </TableCell>
                    : 
                    <TableCell>{skill.category}</TableCell>
                  }
                  <TableCell>
                    {editStateSkill && (updateSkill.id === skill.id) ?
                    <Button onClick={(e)=>skillEditSubmit(e)} disabled={addState || (editStateSkill && (updateSkill.id !== skill.id))} variant="contained" color="primary">
                      Submit
                    </Button>
                    :
                    <Button onClick={()=>toggleSkillEdit(skill.id)} disabled={addState || (editStateSkill && (updateSkill.id !== skill.id))} variant="contained" color="primary">
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
                    <>
                    <Button onClick={(e)=>handlePop(e, skill.id)} variant="contained" color="secondary">
                      Delete
                    </Button>
                    <DeletePopup 
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        handleDelete={handleDelete}
                        deleteID={deleteID}
                    />
                    </>
                    }
                  </TableCell>
                </TableRow>)}
                {addState &&
                <TableRow>
                  <TableCell>
                    <TextField 
                      id={"newName"}
                      fullWidth
                      placeholder="Skill name"
                      name="name"
                      value={updateSkill.name}
                      onChange={(e) => handleSkillChange(e)}
                    />
                  </TableCell>
                  <TableCell>
                      <TextField 
                        placeholder="Rating 1 - 5"
                        id={`rating${updateSkill.id}`}
                        fullWidth
                        name="rating"
                        value={updateSkill.rating}
                        onChange={(e) => handleSkillChange(e)}
                      />
                  </TableCell>
                  <TableCell>
                    <Select
                      required
                      fullWidth
                      labelId="category-select"
                      id="category-select"
                      name="category"
                      value={updateSkill.categoryRef}
                      onChange={(e) => handleSkillChange(e)}
                    >
                      <MenuItem value={1}>Client Side</MenuItem>
                      <MenuItem value={2}>Server Side</MenuItem>
                      <MenuItem value={3}>Other</MenuItem>
                      </Select> 
                  </TableCell>
                  <TableCell>
                    <Button onClick={(e)=>addSkillSubmit(e)} disabled={false} variant="contained" color="primary">
                      Submit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>addNewSkill()} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
                }
                {(!addState && !editStateSkill)&&
                <TableRow>
                  <TableCell align="center" colSpan="5">
                    <CustomButton onclick={addNewSkill}>Add new skill</CustomButton>
                  </TableCell>
                </TableRow>
                }
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default ResumeAdmin