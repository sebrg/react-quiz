import React, { CSSProperties } from 'react';
import Button from '@material-ui/core/Button';
import  { Redirect } from 'react-router-dom'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




interface Props {
    url: string
}

interface State {
    loading: boolean,
    questions: [],
    score: number,
    question: number,
    category: string
    disableBtn: boolean,
}

export default class Api extends React.Component<Props, State> {

    constructor(state: State, props: Props) {
        super(props)
        this.state = {
            loading: false,
            questions: [],
            score: 0,
            question: 1,
            category: 'GetFromApi',
            disableBtn: false,
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
  
    async componentDidMount() {
        const url = this.props.url
        await fetch(url)
        .then(response =>  {
            const data = response.json()
            return data  
        }) 

        .then(data =>  {
            this.setState({
                loading: true,
                questions: data.results,
                category: data.results[0].category
            })
            console.log("question", this.state.questions) 
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
                <Redirect to='/plan'/>         
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
                    <div style={{...color, ...MainDiv}}>
                    <div style={questionDiv}>
                    <h2 >Question: {this.state.question} / 5 </h2>
                    <h2  style={scoreColor}>Score : { this.state.score}</h2>
                    <h2 >Category: {this.state.category} </h2>

                    {questions.map(item => (  
                        <div key={item['question']}>
                        <h2 style={rmargin}> {this.cleanText(item['question'])} </h2>
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
                    </div>
                    
                )                  
            }      
        }
    }  
}

const MainDiv : CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '85vh',
}

const questionDiv : CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

const optionDiv : CSSProperties = {
    width: '75vw',
    display: 'flex',
    justifyContent: 'flex',
    alignItems: 'center',
    marginTop: '0.3em',
    marginBottom: '0.3em',
    margin: '0.5em'
}

const color : CSSProperties = {
    color: 'white',
    textAlign: 'center'
}

const rmargin: CSSProperties = {
    margin: '0',
}

const scoreColor: CSSProperties = {
    color: 'green'
}

