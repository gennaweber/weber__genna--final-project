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
    padding: 10,
    fontSize: 14
  },

  margin: {
    marginBottom: 10
  },

  form: {
    margin: 0,
    padding: 0
  }, 

  width: {
    width: "75%"
  }
}));

const EditRow = ({handleSkillChange, updateSkill}) => {

  const classes = useStyles();

  return (
      <>
        <TableCell>
              <TextField 
                className={classes.textField}
                id={`name${updateSkill.id}`}
                name="name"
                value={updateSkill.name}
                onChange={(e) => handleSkillChange(e)}
              />
          </TableCell>
          <TableCell>
              <TextField 
                className={`rating${updateSkill.id}`}
                id={updateSkill.id}
                name="rating"
                value={updateSkill.rating}
                onChange={(e) => handleSkillChange(e)}
              />
          </TableCell>
          <TableCell>
              <TextField 
                className={classes.textField}
                id={`category${updateSkill.id}`}
                name="category"
                value={updateSkill.category}
                onChange={(e) => handleSkillChange(e)}
              />
          </TableCell>
    </>
  )
}

export default EditRow