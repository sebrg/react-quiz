import React from 'react';


export default function GameRulesTest() {

    return (

        <div style={modalStyle}>
            <h1 style={ruleGameTitle}>- Game Rules - </h1>
            <p style={pstyle}></p><h4>Step 1 - Push PLAY GAME and enter your name</h4>
            <p style={pstyle}><h4>Step 2 - Choose open level and the quiz start </h4></p>
            <p style={pstyle}><h4>Step 3 - On every level you answer 5 questions and scores saves</h4></p>
            <p style={pstyle}><h4>Step 4 - start the game</h4></p> 
        </div>

    )
}

const modalStyle: React.CSSProperties = {
    backgroundColor: 'lightblue',
    width: '30%',
    zIndex: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
} 


const ruleGameTitle: React.CSSProperties = {
    fontFamily: 'Bungee',
} 

const pstyle: React.CSSProperties = {
    fontFamily: 'sans-serif',
    padding: '10px',
    marginTop: '-50px'
} 