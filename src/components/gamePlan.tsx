
import React, { CSSProperties } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import User from './MainView/loginPage'


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
        let storedUser = localStorage.getItem('user')
        console.log(storedUser)
        
        if(storedUser == null || storedUser == 'null') {
            return (
                <div><User/></div>
            )
        }
        else {
            
          return(

                <div style={{ ...fullScreen, ...columnFlex, ...centerStyle }}>
                  <h3 style={h3Div}>Choose level...</h3>
                  <div style={divPlan}>
                      {levels.map((level) =>

                          <div style={divWhite}>
                          <Link to={`/game/${level}`}  style={{...divBlack, ...btnHover}}>{level}</Link>
                          </div>

                    )};
                      </div>

                  </div>

              );
        }

    }
    
}

const columnFlex: CSSProperties = { 

    display: 'flex', 

    flexDirection: 'column', 

}; 

 
 const fullScreen: CSSProperties = { 
    width: '100%', 
    height: '100%', 
    margin: '0' 

}  

const centerStyle: CSSProperties = { 
    display: 'flex', 
    alignItems: 'center' 

} 



const h3Div: CSSProperties = {
    color: 'white',
    marginTop: '1em',
}


const divPlan: CSSProperties  = {
    width: '22em', 
    height: '30em', 
    marginTop: '1em', 
    margin: 0, 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    alignItems: 'center',  
}

const divBlack: CSSProperties = {
    width: '2em', 
    height: 'auto', 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#1a237e', 
    color: 'white', 
    fontSize: '1.5em', 
    textDecoration: 'none', 
    padding: '15%', 
    marginTop: '1%', 
    marginBottom: '1%', 
    borderRadius: '55%', 
   
}

const btnHover: CSSProperties = {
    cursor: 'pointer',
}

const divWhite: CSSProperties = {
    width: '30%',
    height: '4em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
   //backgroundColor: 'white',
    color: 'black',
}

const divSpace: CSSProperties = {
    width: '25%',
    height: '4em',
    backgroundColor: 'White',
}