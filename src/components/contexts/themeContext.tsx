import { createContext, CSSProperties } from 'react'

interface Themes {
    light: ThemeState
    dark: ThemeState
}

/* detta innehåller ett ThemeState */
export interface ThemeState {
    foreground: {
        primary: string,
        secondary: string,
        darkened: string
    },
    background: {
        primary: string,
        secondary: string,
    },
}

/* teman för light vs dark */
export const themes: Themes = {
    light: {
        foreground: {
            primary: '#0A0A0A',
            secondary: '#1F1F1F',
            darkened: '#000000',
        },
        background: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA',
        },
    }, dark: {
        foreground: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA',
            darkened: '#707070'
        },
        background: {
            primary: '#0A0A0A',
            secondary: '#0A0A0A',
        }
    }
}

/* funktion som tar in ThemeState */
export const ThemeContext = createContext({
    theme: themes.dark, 
    toggleTheme: () => {}, //default tom funktion
})

export type ThemedCSSProperties = (theme: ThemeState) => CSSProperties