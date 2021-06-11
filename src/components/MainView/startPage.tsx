import React, { CSSProperties } from 'react'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';
import ErrorBoundary from '../errorBoundary';
import SimplePopper from '../gamerules'




export default function StartPage() {

    return (

        <div style={divstyleStart}>

            <Link style={linkButton} to="/game">
                <Button style={buttons} variant="contained" color="secondary">P L A Y</Button>
            </Link>

            <Link style={linkButton} to="/score">
                <Button style={buttons} variant="contained" color="secondary">H I G H  S C O R E</Button>
            </Link>

            <Button style={buttonRule} variant="contained" color="primary">R U L E S<SimplePopper/></Button>

        </div>


    )

}


const divstyleStart: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '3em',
    marginBottom: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const buttons: CSSProperties = {
    width: '80%',
    height: '10vh',
    margin: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    fontSize: '17px'
}

const linkButton: CSSProperties = {
    display: 'flex',
    width: '80%',
    height: '10vh',
    margin: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    textDecoration: 'none'
}

const buttonRule: CSSProperties = {
    display: 'flex',
    width: '63.6%',
    height: '10vh',
    margin: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    fontSize: '17px'
}
 
