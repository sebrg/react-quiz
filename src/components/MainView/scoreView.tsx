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
            <h1 style={scoreTitle}>HIGH SCORE</h1>
                <div>1. NAMN</div>
                <div>2. NAMN</div>
                <div>3. NAMN</div>
                <div>4. NAMN</div>
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
}

