import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
        <BottomNavigation style={backColor}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction //länk till scorePage i footern
                component={Link} //component finnes i browserRouter längre upp
                to="/signal" //val av url
                label="High Score" //text till iconen
                value="signal" //
                icon={<StarIcon />} //namn på icon
            />
            <BottomNavigationAction //länkar till startsidan
            component={Link}
            to="/startPage"
            label="Home"
            value="signal"
            icon={<HomeIcon />}
            />

            <BottomNavigationAction //länk till shopPage i footern
             component={Link}
             to="/shop"
             label="Shop"
             value="signal"
             icon={<ShoppingCartIcon />}
            />
        </BottomNavigation>
    );
}


const backColor: React.CSSProperties = {
    backgroundColor: "green",
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    left: '0',
    bottom: '0',
}

