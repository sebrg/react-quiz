import React, {Component, CSSProperties} from 'react';

interface Props {}

interface State {
    hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
    
    constructor(props: Props) { 
        super(props)

        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

      componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
      }
      
    render () {
        if(this.state.hasError === true) {
            return <h1 style={errorMassages}>!Can't find the object!</h1>
        } 

        return this.props.children
    }
}

export function testErrorBoundary() { //testar errorB
    const nullVariable: any = null;
    console.log(nullVariable.testarError)
} 

const errorMassages: CSSProperties = {
    display: 'flex',
    backgroundColor: 'red', 
    color: 'white'
};