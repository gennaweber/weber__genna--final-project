import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  margin: {
    marginBottom: 10
  }
}));

export default function DeletePopup( { anchorEl, setAnchorEl, handleDelete, deleteID }) {
  const classes = useStyles();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleCancle = () => {
    setAnchorEl(null)
  }

  const handleClick = () => {
    handleDelete(deleteID)
    handleCancle();
  }


  return (
    <div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper>
          <div className={classes.paper}>
            <p className={classes.margin}>Are you sure you want to delete?</p>
            <Button onClick={()=>handleClick()} className={classes.margin} fullWidth variant="contained" color="secondary">CONFIRM DELETE</Button>
            <Button onClick={()=>handleCancle()} className={classes.margin} fullWidth variant="contained">CANCEL</Button>
          </div>
        </Paper>
      </Popper>
    </div>
  );
}