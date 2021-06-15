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
import SignIn from "./MainView/loginPage";
import GamePage from "./MainView/gamePage";
import ScorePage from './MainView/scoreView'
import ErrorBoundary from './errorBoundary';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';


export default function layout() { 
    return (

        <ThemeContext.Consumer>
            {({ theme }) => (

                <div style={{ ...fullScreen, ...columnFlex, ...background(theme) }}>
                    <Router>
                        <ErrorBoundary>  <Header /> </ErrorBoundary>
                        <Switch>
                            <Route exact path="/">
                                <StartPage />
                            </Route>
                            <Route exact path="/game">
                                <GamePage />
                            </Route>

                            <Route path="/score">
                                <ScorePage />
                            </Route>

                            <Route path="/login">
                                <SignIn /> 
                            </Route>

                            <Route path="/rules">
                                <h1>rules</h1>
                            </Route>
                
                </Switch>

                    <Footer />
                        
            </Router>
        </div>
        )}
        </ThemeContext.Consumer>
    )
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: ThemedCSSProperties = (theme) => ({
    background: theme.background.secondary,
    
})

const fullScreen: CSSProperties = {
    width: '100%',
    height: '100%',
    margin: '0'
}
