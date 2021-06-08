
import Api from '../questionApi'
import React from 'react';

import { Category } from '@material-ui/icons';
import React, { CSSProperties } from 'react';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";





export default function GamePage() {
 
    
    return (
        <div>
            <div>
                <div>
                   <h2>Level</h2>
                </div>
                <div>
                   <h2>Category</h2>
                </div>
            </div>
            <div style={questionDiv}>
                <h3>Question...</h3>
            </div>
            <div style={optionDiv}>
                <div style={optionDivEx}>Option 1</div>
                <div style={optionDivEx}>Option 2</div>
            </div>
            <div style={optionDiv}>
                <div style={optionDivEx}>Option 3</div>
                <div style={optionDivEx}>Option 4</div>
            </div>    
        </div>

    )
}

const questionDiv : CSSProperties = {
    width: '100%',
    height: '20em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',


}

const optionDiv : CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex',
    alignItems: 'center',
    marginTop: '0.3em',

}

const optionDivEx : CSSProperties = {
    width: '40%',
    height: '4em',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em',
}

