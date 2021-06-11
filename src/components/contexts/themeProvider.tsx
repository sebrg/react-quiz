import { dark } from '@material-ui/core/styles/createPalette';
import React, { Component } from 'react';
import { ThemeContext, ThemeState, themes } from './themeContext'; //import från themeContext 

interface Props {}

interface State {
    theme: ThemeState, 
    toggleTheme: () => void
}

export default class ThemeProvider extends Component<Props, State> {

    state: State = {
        theme: themes.dark,
        toggleTheme: this.toggleTheme.bind(this)

    }

    toggleTheme() {
        this.setState((state) => {
            const theme = state.theme === themes.dark ? themes.light : themes.dark
            return { theme }
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
                </ThemeContext.Provider>
        )
    }
}