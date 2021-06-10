import React, { CSSProperties } from 'react';
import Button from '@material-ui/core/Button';
import Startpage from './MainView/startPage'
import  { Redirect } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Color } from '@material-ui/core';

interface Props {}

interface State {
    loading: boolean,
    questions: [],
    score: number,
    question: number,
}

export default class Api extends React.Component<Props, State> {

     constructor(state: State) {
        super(state)
        this.state = {
            loading: false,
            questions: [],
            score: 0,
            question: 1,
        } 
    }
  
    handleClick = (value: string) => {
        const { questions } = this.state
        questions.map(item => (  

        setTimeout(() => {
            this.checkifCorrect(value, item['correct_answer'])
        }, 2000)  
                    
        ))  
        console.log(value)
        console.log("here", questions)    
          
      }

    checkifCorrect = (answer: string, correctAnswer: string) => {
        if(answer === correctAnswer) {
            console.log("correct answer")
            this.setState( {
               score: this.state.score + 1,
                    
            }) 
            this.setState({
                question: this.state.question < 5
                  ? this.state.question + 1
                  : 5
              });
            
        }
        else {
            console.log("wrong answer")
            this.setState({
                question: this.state.question < 6 //satte till 6 tills jag hittar lösning
                  ? this.state.question + 1
                  : 6
              });
            
        }
     
    this.componentDidMount()       
    }

    endgame = () => {
        return (
            <Redirect to='/'/>
        )
    }
    
    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple')
        .then(response =>  {
           const data = response.json()
           return data
           
        }) 

        .then(data =>  {
            /* console.log(data.results) */
            this.setState({
                loading: true,
                questions: data.results
            })
            console.log("question", this.state.questions)  
                      
        })         
        
    }
    
    render() {

        if(this.state.question >= 6) { // satte till 6 tills jag hittar lösning
            console.log("hereawd", this.state.question)
            return (
                <Redirect to='/'/>
            )
        }

        else {

        let myArray: any = []
            
        const {loading, questions} = this.state
        
        questions.map(item => (    

            myArray.push(item['incorrect_answers'][0],
            item['incorrect_answers'][1], 
            item['incorrect_answers'][2], 
            item['correct_answer']) 

            ))

            myArray = myArray.sort(() => Math.random() - 0.5) //Shuffla index
           

                if(!loading) {
                return <div>Loading...</div>
                }

                else {
                    return (
                        <div style={color}>
                            <h1> Score : {this.state.score} Question: {this.state.question} / 5 </h1>
                        {questions.map(item => (  
                        <div key={item['question']} style={questionDiv}>
                            <h2> {item['question']} </h2>
                        </div>
                        ))}
                        <div>
                        {myArray.map((element: any) => {
                            
                            return (
                                <Button value={element} onClick={() => this.handleClick(element)} style={optionDiv} variant="contained" color="primary"> {element} </Button>
                            ) 
                            
                        })}
                        </div>
                    </div>
                    
                    )                  
            }      
        }
    }  
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
    width: '50%',
    margin: '10px',
    height: '4em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0em 1em',
}

const color : CSSProperties = {
    color: 'white'
}

