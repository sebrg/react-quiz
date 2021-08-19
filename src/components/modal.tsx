import React, { Component } from 'react';
import ReactDOM from 'react-dom';


interface Props {
    /** Using a persistent modal may cause it to never close if not handled manually */
    persistent?: boolean;
    shouldClose: () => void;
}

interface State {
    isOpen: boolean
}

export default class Modal extends Component<Props> {
    
    element: HTMLDivElement 

    // Create a new div incl an id
    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'modal-root';
        this.state={isOpen: false}
    }

    onclick = () => {
        if (!this.props.persistent) {
            this.props.shouldClose();
        }
    }

    // open the modal
    componentDidMount() {
        document.body.appendChild(this.element);
        document.body.style.overflow = 'hidden'
    }

    // close the modal
    componentWillUnmount() {
        document.body.removeChild(this.element);
        document.body.style.overflow = 'unset'
    }

    render() {
        return ReactDOM.createPortal(
            <div style={styleModal} onClick={this.onclick}>
                {this.props.children}
            </div>,
            this.element,
        );
    }
} 

const styleModal: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    margin: '-10px'
}