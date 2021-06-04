import React, { CSSProperties } from 'react'

import Button from '@material-ui/core/Button';
import SimplePopper from '../gamerules';



export default function mainContent() {
    return (
        <div style={divstyle}> 

        <Button style={buttons} variant="contained" color="secondary">Play</Button>
        <Button style={buttons} variant="contained" color="secondary">Shop</Button>
        <Button style={buttons} variant="contained" color="primary"><SimplePopper/>Rules</Button>
   
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
