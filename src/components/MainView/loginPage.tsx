import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';

export default class User extends React.Component {
 
  
    State = {
        'user': String,
        'score': Number,
    }
    
    
    handleChange = (event: any) => {
        const input = event.target
        const value = input.value
        
        this.setState({
            user: value,
            score: 'empty'
        })
        console.log(this.state)
    }
    
    handleFormSubmit = () => {
        localStorage.setItem("user", JSON.stringify(this.state))  
    }

    render() {
        return (
            <div style={divstyleLogin}>
                <form style={formedDiv} onSubmit={this.handleFormSubmit}>
                    <label style={lableStyle}> Write your name to play</label>
                    <input style={inputStyle} placeholder="YOUR NAME" name="user" onChange={this.handleChange} />
                    <Button style={btnStyle} variant="contained" type="submit" color="primary">Play</Button>

                </form>
            </div>

        );
    }
}




const divstyleLogin: React.CSSProperties = {
    width: '90%',
    height: '100%',
    display: 'flex',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

const formedDiv: React.CSSProperties = {
    width: '375px',
    borderRadius: '25px',
    height: '100%',
    display: 'flex',
    backgroundColor: '#EAEAEA',
    marginTop: '1em',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
}

const btnStyle: React.CSSProperties = {
    display: 'flex',
    width: '60%',
    height: '6vh',
    margin: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    textDecoration: 'none'
}

const inputStyle: React.CSSProperties = {
    display: 'flex',
    width: '58%',
    height: '4vh',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
}

const lableStyle: React.CSSProperties = {
    fontFamily: 'Bungee',
}