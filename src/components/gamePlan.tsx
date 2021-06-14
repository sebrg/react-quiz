import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

//import Box from '@material-ui/core/Box';



export default function GamePlan() {
    
    return(
        
        <div>
            <div>
            <h3 style={h3Head}>Välj en siffra...</h3>
            </div>
            <div style={divPlan}>
                <Link to="/game/1" style={divBlack}>1</Link>
                <div style={divSpace}></div>
                <Link to="/game/2" style={divBlack}>2</Link>
                <div style={divSpace}></div>
                <div style={divSpace}></div>
                <Link to="/game/3" style={divBlack}>3</Link>
                <div style={divSpace}></div>
                <Link to="/game/4" style={divBlack}>4</Link>
                <Link to="/game/5" style={divBlack}>5</Link>
                <div style={divSpace}></div>
                <Link to="/game/6" style={divBlack}>6</Link>
                <div style={divSpace}></div>
                <div style={divSpace}></div>
                <Link to="/game/7" style={divBlack}>7</Link>
                <div style={divSpace}></div>
                <Link to="/game/8" style={divBlack}>8</Link>
                <Link to="/game/9" style={divBlack}>9</Link>
                <div style={divSpace}></div>
                <Link to="/game/10" style={divBlack}>10</Link>
                <div style={divSpace}></div>
         
            </div>

        </div>

    )

}

const h3Head: CSSProperties = {
    color: "red",
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
     
/* export default function GamePlan() {
    return(
        <div>
            <h3 style={h3}>Välj en siffra..</h3>
            <div style={divstyle}>
                <Box style={boxstyleOne} p={1}> 1</Box>
                <Box style={boxstyleTwo} p={1}>2</Box>
                <Box style={boxstyleOne} p={1}>3</Box>
                <Box style={boxstyleTwo} p={1}>4</Box>
                <Box style={boxstyleOne} p={1}>5</Box>
                <Box style={boxstyleTwo} p={1}>6</Box>
                <Box style={boxstyleOne} p={1}>7</Box>
                <Box style={boxstyleTwo} p={1}>8</Box>
                <Box style={boxstyleOne} p={1}>9</Box>
                <Box style={boxstyleTwo} p={1}>10</Box>
            </div>    
        </div>
    ) 
} */

/* export default function Homebutton() {
    let history = useHistory();

    function handleClick() {
        history.push("./MainView/gamePage")
    }

    return (
        <button type="button" onClick={handleClick}>
            Home
        </button>
    );
} */




/* const boxstyleOne: CSSProperties = { 

    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '4em', 
    height: '2em', 
    color: "white",
    backgroundColor: "black",
    borderColor: "red"
    
} 

const boxstyleTwo: CSSProperties = { 

    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '4em', 
    height: '2em', 
    color: "black",
    backgroundColor: "white"
} 

    
const divstyle: CSSProperties = { 
    
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    marginTop: '1em', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center' 
}  */