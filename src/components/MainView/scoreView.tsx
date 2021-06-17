import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function ScorePage() {

    return (

        <div style={divstyleScore}>
            <div style={scoreStyle}>
                <h1 style={scoreTitle}>HIGH SCORE</h1>
                <div>1. NAMN</div>
                <div>2. NAMN</div>
                <div>3. NAMN</div>
                <div>4. NAMN</div>
            </div>
        </div>


    )
}

const divstyleScore: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '1em',
    marginBottom: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const scoreTitle: React.CSSProperties = {
    fontFamily: 'Bungee',
    marginTop: '0px',
}

const scoreStyle: React.CSSProperties = {
    width: '375px',
    height: '100%',
    display: 'flex',
    backgroundColor: '#EAEAEA',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
}