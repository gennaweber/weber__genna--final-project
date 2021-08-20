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
import MyDropzone from '../../MyDropzone';


const useStyles = makeStyles((theme) => ({
  textField: {
    width: "41.75vw",
  },

  margin: {
    marginBottom: 10
  },

  bigMargin: {
    marginTop: 50
  },

  form: {
    margin: 0,
    padding: 0,
  }, 

  width: {
    width: "75%",
  },

  img: {
    height: 100,
    width: 100,
  },

  mini: {
    fontSize: "0.1rem"
  }
  
}));

  //TODO: LOG OUT USER AFTER CERTAIN TIME
  //TODO: ADD PAGINATION TO TABLES

const PortfolioAdmin = ({user}) => {

  const classes = useStyles();

  const [savedRes, setSavedRes] = useState("")
  const [portfolio, setPortfolio] = useState([])
  const [updateProject, setUpdateProject] = useState({})
  const [editStateProject, setEditStateProject] = useState(false)
  const [addState, setAddState] = useState(false)
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteID, setDeleteID] = useState(0)

  //prevent accidental deletion
    const handlePop = (event, projectID) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      setDeleteID(projectID)
    };

  //get array of projects for table
  useEffect(()=>{
    const fetchPortfolio = async (user) => {
    const res = await fetch(`http://localhost:5000/portfolio/content/${user}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json'
      }
    })
    res.json().then((res) => setPortfolio(res))
    .catch((err)=>console.log(err));
    }

    fetchPortfolio(user);
  }, [user, savedRes])

    const toggleProjectEdit = (projectID) => {
      setEditStateProject(!editStateProject)
      if(projectID !== "undefined"){
        setUpdateProject(portfolio.find(project => project.id === projectID))
      }
    }

  //updates the temporary project object with each change
  const handleProjectChange = (e, i) => {
    let value = e.target.value
    let key = e.target.name

    setUpdateProject((prevData) => ({...prevData, [key]:value}))
  }

  //submits the temporary project object via the api
    const projectEditSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/portfolio/projects/${updateProject.id}`, 
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(updateProject)
      })
  
      if (response.status === 200) {
          setSavedRes(response)
          setEditStateProject(false)
          setStatus("success")
          setErrorMessage("Content updated!")
      } else {
          setSavedRes(response)
          setStatus("error")
          setErrorMessage("Content could not be updated.")
      }
    }

  //initializes a new project with empty values
  const addNewProject = () => {
    setAddState(!addState)
    setUpdateProject({img: "", name: "", alt:"", subtitle:"", description: "", link:"", displayOrder:100, categoryRef:1, portfolioID:portfolio[0].portfolioID})
  }

  //submits the temporary project object
  const addProjectSubmit = async event => {
      event.preventDefault()
      const response = await fetch (`http://localhost:5000/portfolio/newproject/${user}`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(updateProject)
      })
  
      if (response.status === 201) {
          setSavedRes(response)
          setAddState(false)
          setStatus("success")
          setErrorMessage("New project successfully created!")
      } else {
          setSavedRes(response)
          setStatus("error")
          setErrorMessage("New project could not be created.")
      }
    }

  //sets active to false in the database, removing it from view
    const handleDelete = async (id) => {
      const response = await fetch (`http://localhost:5000/portfolio/projects/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        }
      })
  
      if (response.status === 200) {
          setSavedRes(response)
          setEditStateProject(false)
          setStatus("success")
          setErrorMessage("Content deleted.")
      } else {
          setSavedRes(response)
          setStatus("error")
          setErrorMessage("Content could not be deleted.")
      }
    }

  return (
    <div className={classes.bigMargin}>
        {!status || <Alert fullWidth className={classes.margin} severity={status || "info"}>{errorMessage}</Alert>}
        <DescriptionTable 
          user={user}
          section="portfolio"
          title="Portfolio"
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
                <TableCell size="small"><h6>Image</h6></TableCell>
                <TableCell size="small"><h6>Name</h6></TableCell>
                <TableCell size="small"><h6>Category</h6></TableCell>
                <TableCell size="small"><h6>Subtitle</h6></TableCell>
                <TableCell size="small"><h6>Link</h6></TableCell>
                <TableCell size="small"><h6>Description</h6></TableCell>
                <TableCell size="small"><h6>Alt text</h6></TableCell>
                <TableCell size="small"><h6>Display Priority</h6></TableCell>
                <TableCell size="small" colSpan="2"><h6>Actions</h6></TableCell>
            </TableHead>
            <TableBody>
              {portfolio.length ===  0 && <TableRow><TableCell>No entries yet</TableCell></TableRow>}
              {(portfolio.length > 0) &&
                portfolio.map(project => 
                <TableRow id={uuid4()} className={classes.width}>
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                    </TableCell>
                    : 
                    <TableCell><img className={classes.img} src={project.img} alt={project.alt}/></TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`name${updateProject.id}`}
                        multiline
                        fullWidth
                        name="name"
                        value={updateProject.name}
                        onChange={(e) => handleProjectChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{project.name}</TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <Select
                        required
                        fullWidth
                        multiline
                        labelId="category-select"
                        id="category-select"
                        name="category"
                        value={updateProject.categoryRef}
                        onChange={(e) => handleProjectChange(e)}
                      >
                        <MenuItem value={1}>Javascript</MenuItem>
                        <MenuItem value={2}>Node.js</MenuItem>
                        <MenuItem value={3}>React</MenuItem>
                      </Select>                
                    </TableCell>
                    : 
                    <TableCell>{project.category}</TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`subtitle${updateProject.id}`}
                        multiline
                        fullWidth
                        name="subtitle"
                        value={updateProject.subtitle}
                        onChange={(e) => handleProjectChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{project.subtitle}</TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`link${updateProject.id}`}
                        multiline
                        fullWidth
                        name="link"
                        value={updateProject.link}
                        onChange={(e) => handleProjectChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{project.link}</TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`desc${updateProject.id}`}
                        multiline
                        fullWidth
                        name="description"
                        value={updateProject.description}
                        onChange={(e) => handleProjectChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{project.description}</TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`alt${updateProject.id}`}
                        fullWidth
                        multiline
                        name="alt"
                        value={updateProject.alt}
                        onChange={(e) => handleProjectChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{project.alt}</TableCell>
                  }
                  {editStateProject && (updateProject.id === project.id ) ? 
                    <TableCell>
                      <TextField 
                        id={`order${updateProject.id}`}
                        fullWidth
                        multiline
                        name="displayOrder"
                        value={updateProject.displayOrder}
                        onChange={(e) => handleProjectChange(e)}
                      />
                    </TableCell>
                    : 
                    <TableCell>{project.displayOrder}</TableCell>
                  }
                  <TableCell>
                    {editStateProject && (updateProject.id === project.id) ?
                    <Button onClick={(e)=>projectEditSubmit(e)} disabled={addState || (editStateProject && (updateProject.id !== project.id))} variant="contained" color="primary">
                      Submit
                    </Button>
                    :
                    <Button onClick={()=>toggleProjectEdit(project.id)} disabled={addState || (editStateProject && (updateProject.id !== project.id))} variant="contained" color="primary">
                      Edit
                    </Button>
                    }
                  </TableCell>
                  <TableCell>
                    {editStateProject && (updateProject.id === project.id) ?
                    <Button onClick={()=>toggleProjectEdit(project.id)} variant="contained" color="secondary">
                      Cancel
                    </Button>
                    :
                    <>
                    <Button onClick={(e)=>handlePop(e, project.id)} variant="contained" color="secondary">
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
                    <MyDropzone 
                      portfolioID={portfolio[0].portfolioID}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField 
                      multiline
                      id="newName"
                      fullWidth
                      placeholder="Project name"
                      name="name"
                      value={updateProject.name}
                      onChange={(e) => handleProjectChange(e)}
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      required
                      fullWidth
                      labelId="category-select"
                      id="category-select"
                      name="categoryRef"
                      value={updateProject.categoryRef}
                      onChange={(e) => handleProjectChange(e)}
                    >
                      <MenuItem value={1}>Client Side</MenuItem>
                      <MenuItem value={2}>Server Side</MenuItem>
                      <MenuItem value={3}>Other</MenuItem>
                      </Select> 
                  </TableCell>
                  <TableCell>
                      <TextField 
                        multiline
                        placeholder="Subtitle"
                        id={`subtitle${updateProject.id}`}
                        fullWidth
                        name="subtitle"
                        value={updateProject.subtitle}
                        onChange={(e) => handleProjectChange(e)}
                      />
                  </TableCell>
                  <TableCell>
                      <TextField
                        multiline
                        placeholder="URL"
                        id={`link${updateProject.id}`}
                        fullWidth
                        name="link"
                        value={updateProject.link}
                        onChange={(e) => handleProjectChange(e)}
                      />
                  </TableCell>
                  <TableCell>
                      <TextField 
                        multiline
                        placeholder="Description"
                        id={`desc${updateProject.id}`}
                        fullWidth
                        name="description"
                        value={updateProject.description}
                        onChange={(e) => handleProjectChange(e)}
                      />
                  </TableCell>
                  <TableCell>
                      <TextField 
                        multiline
                        placeholder="Img alt text"
                        id={`alt${updateProject.id}`}
                        fullWidth
                        name="alt"
                        value={updateProject.alt}
                        onChange={(e) => handleProjectChange(e)}
                      />
                  </TableCell>
                  <TableCell>
                    <Button onClick={(e)=>addProjectSubmit(e)} disabled={false} variant="contained" color="primary">
                      Submit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>addNewProject()} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
                }
                {(!addState && !editStateProject) &&
                <TableRow>
                  <TableCell align="center" colSpan="10">
                    <CustomButton onclick={addNewProject}>Add new project</CustomButton>
                  </TableCell>
                </TableRow>
                }
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default PortfolioAdmin