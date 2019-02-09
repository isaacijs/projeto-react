import React from 'react';

interface IProps {
    children: React.ReactNode;
}

class News extends React.Component<IProps>{
    render(){
        return(
            <h1>News</h1>
        )
    }
}

export default News;
