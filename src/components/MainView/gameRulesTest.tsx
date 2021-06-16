import React from 'react';


export default function GameRulesTest() {

    return (
        
        <div style={modalis}>
        <h1>GameRulesTest funktion</h1>
        </div>
        
    )
}

const modalis: React.CSSProperties = {
    backgroundColor: 'lightblue',
    padding: '20px',
    width: '80%',
    zIndex: 20,   
}  

const styleModal: React.CSSProperties = {
    display: 'none',
    position: 'fixed',
    paddingTop: '100px',
    left: '0',
    top: '0',
    zIndex: 10,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'green', 
}
