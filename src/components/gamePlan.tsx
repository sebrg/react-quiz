
import React, { CSSProperties } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';


//Props skickar vidare
interface Props {
   // levels: string[],
}

export interface State {
    levels: string [],
}



export default class GamePlan extends React.Component <Props, State> {

    constructor (state: State) {
        super(state);
        

       /*  const levelsArray = [
            {level: '1'},
            {level: '2'},
            {level: '3'},
            {level: '4'},
            {level: '5'},
            {level: '6'},
            {level: '7'},
            {level: '8'},
            {level: '9'},
            {level: '10'},
        ]; */
        
        let levelsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

     this.state={
         
            levels: levelsArray
        };
        
        
 
        /* console.log(this.state.levels); */

    }
   
      
    render() {
        const{levels}=this.state 

        return(
            <div style={divPlan}>
                {levels.map((level) =>
             
                    <div style={divSpace}>
                    <Link to={`/game/${level}`} style={divBlack}>{level}</Link>
               
                    </div>

                )}
            </div>
            
        );
    }
    
}




const divPlan: CSSProperties  = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'lightgray',
    
}
const divBlack: CSSProperties = {
    width: '24%',
    height: '4em',
    display: 'flex',
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
}

const divWhite: CSSProperties = {
    width: '24%',
    height: '4em',
    display: 'flex',
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
}

const divSpace: CSSProperties = {
    width: '25%',
    height: '4em',
    backgroundColor: 'White',
}