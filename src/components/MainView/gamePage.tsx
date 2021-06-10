
import Api from '../questionApi'

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
      <Api/>
    )
}

/* const questionDiv : CSSProperties = {
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
 */
