import React, { CSSProperties } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';

export default function StartPage() {

    return (
        
            <div style={divstyle}>

            <Button style={buttons} variant="contained" color="secondary"><Link to="/game">PLAY</Link></Button>
            <Button style={buttons} variant="contained" color="secondary"><Link to="/shop">SHOP</Link></Button>
            <Button style={buttons} variant="contained" color="primary"><Link to="/rules">RULES</Link></Button>

            </div>


    )
}



const divstyle: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '3em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const buttons: CSSProperties = {
    width: '80%',
    height: '10vh',
    margin: '2em',
    fontFamily: 'verdana'
}
