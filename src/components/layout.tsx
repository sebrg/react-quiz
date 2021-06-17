import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";

import React, { CSSProperties } from 'react';
import Header from './navbar'
import Footer from './footer';
import StartPage from "./MainView/startPage";
import SignIn from "./MainView/loginPage";
/*import ShopPage from "./MainView/shopPage";*/
import GamePlan from "./gamePlan";
import GamePage from "./MainView/gamePage";
import ScorePage from './MainView/scoreView'
import ErrorBoundary from './errorBoundary';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';
import Api from "./questionApi";


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
                            <Route exact path="/game/:questionNo" component={GamePage}/>
                        
                            <Route exact path="/plan">
                                <GamePlan/>
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
