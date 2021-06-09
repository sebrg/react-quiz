import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import React, { CSSProperties } from 'react';
import Header from './navbar'
import Footer from './footer';
import StartPage from "./MainView/startPage";
import ShopPage from "./MainView/shopPage";
import GamePage from "./MainView/gamePage";
import ErrorBoundary from './errorBoundary';


export default function layout() {
    return (
        <div style={{ ...fullScreen, ...columnFlex, ...background }}>
            <Router>
            <ErrorBoundary>  <Header /> </ErrorBoundary>  
                <Switch>
                    <Route exact path="/">
                        <StartPage />
                    </Route>
                    <Route exact path="/game">
                        <GamePage />
                    </Route>
                    
                    <Route path="/shop">
                     <ShopPage />
                    </Route>

                        <Route path="/rules">
                        <h1>rules</h1>
                    </Route>
                </Switch>
                
                        <Footer />
                        
            </Router>
        </div>
    )
}

const columnFlex: CSSProperties = {
                    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
                    background: '#1f1f1f'
}

const fullScreen: CSSProperties = {
                    width: '100%',
    height: '100%',
    margin: '0'
}