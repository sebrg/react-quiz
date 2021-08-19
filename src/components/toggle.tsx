import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ThemeContext } from '../components/contexts/themeContext'


const AntSwitch = withStyles((theme) => ({
  root: {
    width: 36,
    height: 23,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 2,
    color: 'white',
    '&$checked': {
      transform: 'translateX(12px)',
      color: 'white', 
      '& + $track': {
        opacity: 1,
        backgroundColor: '#212121',
        border: 'none',
      },
    },
  },
  thumb: {
    width: 20,
    height: 19,
  },
  track: {
    border: `none`,
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: '#C5C7C4',
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <ThemeContext.Consumer>
      {({ toggleTheme}) => (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>

          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} onClick= {toggleTheme} name="checkedC" />
          </Grid>

        </Grid>
      </Typography>
    </FormGroup>
    )}
    </ThemeContext.Consumer>
  );
}
