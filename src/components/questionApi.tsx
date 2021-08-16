import React, { CSSProperties } from 'react';
import Button from '@material-ui/core/Button';
import  { Redirect } from 'react-router-dom'
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';


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

    
    countScore = () => { //börjar om vid ny level
        let x: any  = localStorage.getItem('user')
        let parsedObject = JSON.parse(x)
        parsedObject.score = this.state.score
        console.log(parsedObject.score)
        let currentUser = {
            'username': parsedObject.username,
            'score': parsedObject.score

        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser))

    }


    render() {

        this.countScore()

        if(this.state.question >= 6) { // satte till 6 tills jag hittar lösning
            console.log("ending game at 5 questions", this.state.question)  
            let x: any  = localStorage.getItem('user')
            let y: any  = localStorage.getItem('currentUser')
            let parsedObject = JSON.parse(x)
            let parsedObject2 = JSON.parse(y)  
            let user = {
                'username': parsedObject.username,
                'score': parsedObject2.score + parsedObject.score
    
            }
            localStorage.setItem('user', JSON.stringify(user))
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
                return <div style={color}>Loading...</div>
            }

            else {
                return (

                    <ThemeContext.Consumer> 
                         {({ theme }) => (
                    <div style={{ ...color, ...MainDiv}}>
                    <div style={questionDiv}>
                    <h2 style={background(theme)}>Question: {this.state.question} / 5 </h2>
                    <h2  style={scoreColor}>Score : {this.state.score}</h2>
                    <div style={category}>
                        <h2 >Category: {this.state.category} </h2>
                    </div>

                    {questions.map(item => (  
                        <div style={queSize}key={item['question']}>
                        <h2 style={background(theme)}> {this.cleanText(item['question'])} </h2>
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

                    )}
                    </ThemeContext.Consumer>
                    
                )                  
            }      
        }
    }  
}

const MainDiv : CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%', 
}

const questionDiv : CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    marginTop: '0.4em',
}

const optionDiv : CSSProperties = {
    width: '75vw',
    display: 'flex',
    justifyContent: 'flex',
    alignItems: 'center',
    marginTop: '0.2em',
    marginBottom: '0.2em',
    margin: '0.5em'
}

const color : CSSProperties = {
    color: 'white',
    textAlign: 'center'
} 

const rmargin: CSSProperties = {
    margin: '0',
    color: 'white',
    fontSize: '1.4em',
    display: 'flex',
    alignItems: 'center',
    padding: '0.8em',
}

const scoreColor: CSSProperties = {
    color: 'green',
    marginTop: '-0.5em', 
}

const category: CSSProperties = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1em',
    backgroundColor: 'white',
    color: '#3f51b5',
    fontSize: '0.8em',
    marginTop: '1.9em', 
}

const queSize: CSSProperties = {
    maxWidth: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8em',
}

const background: ThemedCSSProperties = (theme) => ({
    color: theme.foreground.primary,
    
})