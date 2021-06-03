import React, { CSSProperties } from 'react';
import Header from './navbar'
import MainContent from './MainView/mainView'


export default function layout() {
    return (
        <div style={{...fullScreen, ...columnFlex, ...background}}>
            <Header/>
            <MainContent/>
            
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
    height: '100%'
}