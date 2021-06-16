import React, { CSSProperties } from 'react';
import Button from '@material-ui/core/Button';
import  { Redirect } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


interface Props {}



interface State {
    loading: boolean,
    questions: [],
    score: number,
    question: number,
    disableBtn: boolean
}

export default class Api extends React.Component<Props, State> {

    constructor(state: State) {
        super(state)
        this.state = {
            loading: false,
            questions: [],
            score: 0,
            question: 1,
            disableBtn: false
        } 
    }
  
    handleClick = (value: string) => {
        const { questions } = this.state
        questions.map(item => (  

        setTimeout(() => {
        this.checkifCorrect(value, item['correct_answer'])
        }, 1500)  
                    
        ))
        this.setState( {
        disableBtn: true,           
        })
           
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
            question: this.state.question < 6
            ? this.state.question + 1
            : 6
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

    setTimeout(() => {
        this.setState( {
            disableBtn: false,           
         }) 
    }, 500)     
    }

    endgame = () => {
        return (
            <Redirect to='/'/>
        )
    }
    
    async componentDidMount() {
        await fetch('https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple')
        .then(response =>  {
            const data = response.json()
            return data
           
        }) 

        .then(data =>  {
            /* this.cleanText(data) */
            this.setState({
                loading: true,
                questions: data.results
            })
            console.log("question", this.state.questions)
            /* console.log("data", data)  */ 
            return data          
        })         
        
    }

    cleanText = (htmlOutput: string) => {     
        return htmlOutput
        .replace(/&#039;/g, '')
        .replace(/&quot;/g, '')
        .replace(/&amp;/g, '')
        .replace(/&eacute;/g, 'é')
        .replace(/&rsquo;/g, '')
    }
    
    render() {

        if(this.state.question >= 6) { // satte till 6 tills jag hittar lösning
            console.log("ending game at 5 questions", this.state.question)
            return ( 
                <div>
                    <Redirect to='/'/>
                </div>
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
                        <h2> {this.cleanText(item['question'])} </h2>
                        </div>
                    ))}
                        
                    <div>
                        {myArray.map((element: any) => {
                            
                        return (
                            <Button disabled={this.state.disableBtn} value={element} onClick={() => this.handleClick(element)} style={optionDiv} variant="contained" color="primary"> {this.cleanText(element)} </Button>
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

const color : CSSProperties = {
    color: 'white'
}

