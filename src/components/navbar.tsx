import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CSSProperties } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ErrorBoundary, { testErrorBoundary } from './errorBoundary';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    
      <div className={classes.root}>
        <AppBar style={color} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography style={centerText} variant="h6" className={classes.title}>
              React Quiz
          </Typography>
            <Button color="inherit"><AccountCircleIcon /></Button>
          </Toolbar>
        </AppBar>
      </div>
     

  );
}



const centerText: CSSProperties = {
  textAlign: "center"
}

const color: CSSProperties = {
  backgroundColor: "green",
}