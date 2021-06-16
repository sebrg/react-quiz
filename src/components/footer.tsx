import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <ThemeContext.Consumer> 
            {({ theme }) => (
                <div className={classes.root}>
                <BottomNavigation style={background(theme)}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction //länk till scorePage i footern
                        component={Link} //component finnes i browserRouter längre upp
                        to="/score" //val av url
                        /* label="High Score"  *///text till iconen
                        value="signal" //
                        icon={<StarIcon htmlColor={theme.foreground.primary} />} //namn på icon
                    />

                    <BottomNavigationAction //länkar till startsidan
                        component={Link}
                        to="/"
                        /* label="Home" */
                        value="signal"
                        icon={<HomeIcon htmlColor={theme.foreground.primary} />}
                    />

                    <BottomNavigationAction //länk till shopPage i footern
                        component={Link}
                        to="/login"
                        /* label="Shop" */
                        value="signal"
                        icon={<ShoppingCartIcon htmlColor={theme.foreground.primary} />}
                    />
                </BottomNavigation>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}


const background: ThemedCSSProperties = (theme) => ({
    background: theme.background.secondary,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    left: '0',
    bottom: '0',
})
