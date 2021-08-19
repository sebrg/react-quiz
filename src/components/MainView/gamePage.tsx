
import Api from '../questionApi'
import { RouteComponentProps } from 'react-router-dom'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import ErrorBoundary from '../errorBoundary';


export interface Props {
    link: RouteComponentProps
    match: any
}

export default function GamePage(props: Props) {
    /* console.log(props.match.params) */
        
    function saveData(data: number) {
        let storedA: any = localStorage.getItem('levels')
        if(storedA == null || storedA == 'null') {
            let a: any = [];
            a.push(data);
            localStorage.setItem('levels', JSON.stringify(a));
        }

        else {

            let a = [];
    
            let storedArr: any = localStorage.getItem('levels')
            a = JSON.parse(storedArr)
         
            a.push(data);
            localStorage.setItem('levels', JSON.stringify(a));
        }
        
    }


    let url: string = 'null'
    
    saveData(props.match.params.questionNo)
    /* localStorage.setItem('levels', props.match.params.questionNo) */

    if (props.match.params.questionNo === '1') {
        url = 'https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple'
        console.log("level 1")
    }
    if (props.match.params.questionNo === '2') {
        url = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple'
        console.log("level 2")
    }
    if (props.match.params.questionNo === '3') {
        url = 'https://opentdb.com/api.php?amount=1&category=12&difficulty=medium&type=multiple'
        console.log("level 3")
    }
    if (props.match.params.questionNo === '4') {
        url = 'https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple'
        console.log("level 4")
    }
    if (props.match.params.questionNo === '5') {
        url = 'https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple'
        console.log("level 5")
    }
    if (props.match.params.questionNo === '6') {
        url = 'https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple'
        console.log("level 6")
    }
    if (props.match.params.questionNo === '7') {
        url = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple'
        console.log("level 7")
    }
    if (props.match.params.questionNo === '8') {
        url = 'https://opentdb.com/api.php?amount=1&category=24&difficulty=medium&type=multiple'
        console.log("level 8")
    }
    if (props.match.params.questionNo === '9') {
        url = 'https://opentdb.com/api.php?amount=1&category=26&difficulty=medium&type=multiple'
        console.log("level 9")
    }
    if (props.match.params.questionNo === '10') {
        url = 'https://opentdb.com/api.php?amount=1&category=27&difficulty=medium&type=multiple'
        console.log("level 10")
    }

    return (
        <ErrorBoundary>
            <Api url={url} />
        </ErrorBoundary>
    )
}