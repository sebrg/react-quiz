import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


interface Props {

}

interface State {
    loading: boolean,
    questions: []
    
}

export default class GamePage extends React.Component<Props, State> {

     constructor(state: State) {
        super(state)
        this.state = {
            loading: false,
            questions: []
        }
    }

   
    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple')
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
                  <div>
                    
                    
                    {questions.map(item => (  
                        <div>
                        <li>
                            {item['question']}
                        </li>

                            <button>
                                {item['incorrect_answers']}
                                {/* {item['correct_answer']} */}
                            </button>
                        </div>  
                    ))}
            
                  </div>
              )
          }
        
    }

}  
