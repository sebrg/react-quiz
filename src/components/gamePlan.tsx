
import { exit } from 'process';
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
    levels: number [],
    disableBtn: boolean
}



export default class GamePlan extends React.Component <Props, State> {

    constructor (state: State) {
        super(state);
        
        
        let levelsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        this.state={        
            levels: levelsArray,
            disableBtn: false,
        };      
       
    }
    
    removeDoneLvls = (value: number) => { 
    
    let storedLevel: any = localStorage.getItem('levels')
    let parseMe = JSON.parse(storedLevel)
    console.log(parseMe) 
    if(!parseMe == null) {

        for (let i = 0; i < parseMe.length; i++) {
            console.log(parseMe[i])
            
        }
    }    
    const{levels}=this.state
 
    for( var i = 0; i < levels.length; i++){ 
        
        if (levels[i] == value) { 
    
            levels.splice(i, 1); 
                 
            this.setState({
                levels: levels
            })
        
        }          
        console.log(levels)
        console.log(this.state.levels, 'in state')
        
    }
}

   
      
render() {
    let storedLevel: any = localStorage.getItem('levels')
    let parseMe = JSON.parse(storedLevel)
    /* if(!storedLevel == null) { */
        
        for (let i = 0; i < parseMe.length; i++) {
            const element = parseMe[i];
            
            this.removeDoneLvls(element)
        }
        console.log(parseMe) 
    /* } */
    
    const{levels}=this.state      
        /* console.log(levels, '70')  */ 
        let storedUser:any = localStorage.getItem('user')
        let parsedObject = JSON.parse(storedUser)
                        
            if(storedUser == null || storedUser == 'null') {
                return (
                    <div><User/></div>
                    )
                }
                

        else {
            
          return(

                <div style={{ ...fullScreen, ...columnFlex, ...centerStyle }}>
                    <div style={anotherDiv}>
                    <h4 /* style={h3Div} */> user: {parsedObject.username} </h4>
                    <h5 /* style={h3Div} */> score: {parsedObject.score} </h5>
                    </div>
                  <h3 style={h3Div}>Choose level...</h3>
                  <div style={divPlan}>
                      
                      {levels.map((level) =>
                          <div style={divWhite}>
                          <Link onClick={() => this.removeDoneLvls(level)} to={`/game/${level}`} /* style={{...divBlack, ...btnHover}} */> <button value={level} disabled={this.state.disableBtn} style={{...divBlack, ...btnHover}}>  {level} </button></Link>
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
    marginTop: '0em',
}

const anotherDiv: CSSProperties = {
    color: 'white',
    marginTop: '-1em',
   
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