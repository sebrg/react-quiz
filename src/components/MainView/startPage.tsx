import { CSSProperties, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';
import Modal from "../modal";
import GameRulesTest from './gameRulesTest'


export default function StartPage() {

    const [isModalOpen, setIsModalOpen] = useState(false)


    return (

        /*<GamePlan />*/


        <div style={divstyleStart}>

            {
                isModalOpen ? (
                    <Modal shouldClose={() => { }}><GameRulesTest />
                        <Button style={closeBtn} onClick={() => setIsModalOpen(false)} variant="contained" color="primary" href="#contained-buttons">Close</Button>
                    </Modal>
                ) : undefined
            }

            {/* <Link style={linkButton} to="/game">
                <Button style={buttons} variant="contained" color="secondary">P L A Y</Button>
            </Link> */}
            <Link style={linkButton} to="/plan">
                <Button style={buttons} variant="contained" color="secondary">PLAY GAME</Button>
            </Link>

            <Link style={linkButton} to="/score">
                <Button style={buttons} variant="contained" color="secondary">HIGHSCORE</Button>
            </Link>

            <Button onClick={() => setIsModalOpen(true)} style={buttonRule} variant="contained" color="primary">RULES</Button>

        </div>


    )

}


const divstyleStart: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '3em',
    marginBottom: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const buttons: CSSProperties = {
    width: '80%',
    height: '10vh',
    margin: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    fontSize: '17px',
    backgroundColor: '#1a237e'
}

const linkButton: CSSProperties = {
    display: 'flex',
    width: '80%',
    height: '10vh',
    margin: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    textDecoration: 'none'
}

const buttonRule: CSSProperties = {
    width: '64%',
    height: '10vh',
    margin: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee',
    fontSize: '17px',
    backgroundColor: '#3f51b5'
}

const closeBtn: CSSProperties = {
    fontFamily: 'Bungee',
    fontSize: '10px',
    backgroundColor: '#3f51b5',
}
