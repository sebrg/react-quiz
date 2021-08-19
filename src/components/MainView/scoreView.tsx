import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function ScorePage() {
    
    let getHighscore = JSON.parse(localStorage.getItem('highscore') as string)
    if(getHighscore) {

        return (
    
            <div style={divstyleScore}>
                <div style={scoreStyle}>
                    <h1 style={scoreTitle}>HIGH SCORE</h1>
                    {getHighscore.map((element: any) =>
                              <div>
                                  {element.username} {element.score}p
                                  <hr style={hrStyle}></hr>
                              </div>
                        )}
        
                </div>
            </div>
    
        )
    }

    else {

        return (
        <div style={divstyleScore}>
        <div style={scoreStyle}>
            <h1 style={scoreTitle}>HIGH SCORE</h1>
            
                      <div>
                          Highscore list is empty
                          <hr style={hrStyle}></hr>
                      </div>
            

        </div>
    </div>

        )
    }

}

const divstyleScore: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px'
}

const scoreTitle: React.CSSProperties = {
    fontFamily: 'Bungee',
    marginTop: '0px',
}

const scoreStyle: React.CSSProperties = {
    width: '350px',
    height: '100%',
    display: 'flex',
    backgroundColor: '#EAEAEA',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontFamily: 'sans-serif',

}

const hrStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'black',
    height: '2px'
}