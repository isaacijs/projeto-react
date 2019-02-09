import React from 'react';

interface IProps{
    children: any;
}

class Total extends React.Component<IProps>{
    render() {
        return (<h1>{this.props.children}</h1>)
    }
}

export default Total;