import React from 'react';

interface IProps {
    children: React.ReactNode;
}

class About extends React.Component<IProps>{
    render() {
        return (
            <h1>About</h1>
        )
    }
}

export default About;
