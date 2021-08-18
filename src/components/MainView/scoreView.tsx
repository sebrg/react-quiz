import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function ScorePage() {
    
    let getHighscore = JSON.parse(localStorage.getItem('highscore') as string)

    return (

        <div style={divstyleScore}>
            <div style={scoreStyle}>
                <h1 style={scoreTitle}>HIGH SCORE</h1>
                {getHighscore.map((element: any) =>
                          <div>
                              {element.username} {element.score}p
                          </div>
                    )}
    
            </div>
        </div>

    )
}

const divstyleScore: React.CSSProperties = {
    width: '100%',
    height: '80vh',
    display: 'flex',
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