
import Button from '@material-ui/core/Button';
import React, { CSSProperties } from 'react';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';
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
}



export default class GamePlan extends React.Component <Props, State> {

    constructor (state: State) {
        super(state);
        
        
        let levelsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        this.state={        
            levels: levelsArray,
        };      
       
    }
    
    removeDoneLvls = (value: number) => { 
    
    let storedLevel: any = localStorage.getItem('levels')
    let parseMe = JSON.parse(storedLevel)
    /* console.log(parseMe) */ 
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
       /*  console.log(levels)
        console.log(this.state.levels, 'in state') */
        
    }
}

    handleClick = () => { 
        localStorage.removeItem('levels')
        let storedUser:any = localStorage.getItem('user')
        let parsedObject = JSON.parse(storedUser)      
        this.saveData(parsedObject)
        parsedObject.score = 0
        localStorage.setItem('user', JSON.stringify(parsedObject))
        window.location.reload()
    }

     saveData = (data: object) => {
        let storedA: any = localStorage.getItem('highscore')
        if(storedA == null || storedA == 'null') {
            let a: any = [];
            a.push(data);
            localStorage.setItem('highscore', JSON.stringify(a));
        }

        else {

            let a = [];
    
            let storedArr: any = localStorage.getItem('highscore')
            a = JSON.parse(storedArr)
         
            a.push(data);
            localStorage.setItem('highscore', JSON.stringify(a));
        }
        
    }
   
      
render() {
    let storedLevel: any = localStorage.getItem('levels')
    let parseMe = JSON.parse(storedLevel)
    if(storedLevel) {
        
        for (let i = 0; i < parseMe.length; i++) {
            const element = parseMe[i];
            
            this.removeDoneLvls(element)
        }
        console.log(parseMe) 
    }

    if(storedLevel && parseMe.length >= 10) {
        return (
            <div style={{ ...fullScreen, ...columnFlex, ...centerStyle }}>
                <Button onClick={() => this.handleClick()} variant="contained" color="primary">Play again & submit score</Button>
            </div>
        )
    }
    
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

            <ThemeContext.Consumer> 
            {({ theme }) => (
                <div style={{...fullScreen, ...columnFlex, ...centerStyle }}>
                    <div style={anotherDiv}>
                    <h4 style={background(theme,)}/* style={h3Div} */> user: {parsedObject.username} </h4>
                    <h5 style={background(theme)}> score: {parsedObject.score} </h5>
                    </div>
                  <h3 style={background(theme)}>Choose level...</h3>
                  <div style={gamePlan}>
                  <div style={divPlan}>
                      
                      {levels.map((level) =>
                          <div style={divWhite}>
                          <Link onClick={() => this.removeDoneLvls(level)} to={`/game/${level}`}> <button value={level} style={{...divBlack, ...btnHover}}>  {level} </button></Link>
                          </div>

                    )}
                      </div> 

                  </div>
                  </div>

                )}
                </ThemeContext.Consumer>

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

const anotherDiv: CSSProperties = {
    color: 'white',
}

const gamePlan: CSSProperties = {
    width: '100vw', 
    height: '70vh', 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center',  
}


const divPlan: CSSProperties  = {
    width: '60%', 
    height: '65%', 
    margin: 0, 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center',  
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
    width: '27%',
    height: '1em',
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

const background: ThemedCSSProperties = (theme) => ({
    color: theme.foreground.primary,
    fontFamily: 'sans-serif',
    
})