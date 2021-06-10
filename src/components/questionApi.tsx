import React, { CSSProperties } from 'react';
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



interface Props {}



interface State {
    loading: boolean,
    questions: []
    
}

export default class Api extends React.Component<Props, State> {

     constructor(state: State) {
        super(state)
        this.state = {
            loading: false,
            questions: []
        }
        
    }
  
    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple')
        .then(response =>  {
           const data = response.json()
           return data
           
        }) 

        .then(data =>  {
            console.log(data.results)
            this.setState({
                loading: true,
                questions: data.results
            })
            console.log(this.state.questions)             
        })      
    }
    
    render() {
        
         const {loading, questions} = this.state  
          if(!loading) {
              return <div>Loading...</div>
          }
          else {
              return (
                <div style={color}>
                {questions.map(item => (  
                <div>
                <div>
                    
                 {/*    <div>
                       <h2>Level</h2>
                    </div>
                    <div>
                       <h2>Category</h2>
                    </div> */}
                </div>
                <div key={item['question']} style={questionDiv}>
                    <h2> {item['question']} </h2>
                </div>
                <div style={optionDiv}>
                    <Button style={optionDivEx} variant="contained" color="primary"> {item['incorrect_answers'][0]} </Button>
                    <Button style={optionDivEx} variant="contained" color="primary"> {item['incorrect_answers'][2]} </Button>
                </div>
                <div style={optionDiv}>
                    <Button style={optionDivEx} variant="contained" color="primary"> {item['incorrect_answers'][1]} </Button>
                    <Button style={optionDivEx} variant="contained" color="primary"> {item['correct_answer']} </Button>

                </div>
                </div>
                ))}    
            </div>
            
            )

            
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

