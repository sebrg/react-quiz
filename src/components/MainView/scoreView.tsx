import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function ScorePage() {
    
    let storedUser:any = localStorage.getItem('user') //hämtat från localstorage
    let parsedObject = JSON.parse(storedUser) //hämtat från localstorage

    const highscoreArray = [parsedObject];

    const highscoreArrayMap = highscoreArray.map((parsedObject) => (<li> {parsedObject.username} {parsedObject.score} p</li>));


    return (

        <div style={divstyleScore}>
            <div style={scoreStyle}>
                <h1 style={scoreTitle}>HIGH SCORE</h1>
                <div><ul>{highscoreArrayMap}</ul>  </div>
    
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