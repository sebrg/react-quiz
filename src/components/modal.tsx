import React, { Component } from 'react';
import ReactDOM from 'react-dom';


interface Props {
    /** Using a persistent modal may cause it to never close if not handled manually */
    persistent?: boolean;
    shouldClose: () => void;
}

export default class Modal extends Component<Props> {
    
    element: HTMLDivElement 

    // Create a new div incl an id
    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'modal-root';
    }

    onclick = () => {
        if (!this.props.persistent) {
            this.props.shouldClose();
        }
    }

    // open the modal
    componentDidMount() {
        document.body.appendChild(this.element);
    }

    // close the modal
    componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(
            <div onClick={this.onclick}>
                {this.props.children}
            </div>,
            this.element,
        );
    }
}