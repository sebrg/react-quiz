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
import CustomizedSwitches from './toggle';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';
import Font from './font';

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
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={classes.root}>
          <AppBar style={background(theme)} position="static">
            <Toolbar>
              <CustomizedSwitches />
              <Typography style={centerText} variant="h6" className={classes.title}>
                <Font />
              </Typography>
              <Button color="inherit">
                
                
                <AccountCircleIcon /></Button>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}



const centerText: CSSProperties = {
  textAlign: "center"
}

const color: CSSProperties = {
  backgroundColor: "green",
}

const background: ThemedCSSProperties = (theme) => ({
  background: theme.background.secondary,
  color: theme.foreground.primary
})

