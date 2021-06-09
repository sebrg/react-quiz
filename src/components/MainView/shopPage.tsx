import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  

export default function ShopPage() {

    return (
        
            <div style={shopDivStyle}>
            <div style={titleDiv}><h1>SHOP</h1></div>
            <div style={itemDiv}><h3 style={shopTitle}>shopItem 1</h3></div>
            <div style={itemDiv}><h3 style={shopTitle}>shopItem 2</h3></div>
            <div style={itemDiv}><h3 style={shopTitle}>shopItem 3</h3></div>
            </div>


    )
}

const shopDivStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '3em',
    flexDirection: 'column',
    backgroundColor: 'white'
}

const titleDiv: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'green'
}

const itemDiv: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    marginTop: '-1em',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'lightcoral',
}

const shopTitle: React.CSSProperties = {
    justifyContent: 'space-between',
    alignItems: 'center'
}