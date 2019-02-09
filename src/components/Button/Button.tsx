import React from 'react';

interface IProps{
    onClick: () => void;
    children: any;
}

class Button extends React.Component<IProps>{
    render() {
        return (<button onClick={this.props.onClick}>{this.props.children}</button>)
    }
}

export default Button;
