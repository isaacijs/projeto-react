import React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
    children?: React.ReactNode;
}

class TopBar extends React.Component<IProps>{
    render() {
        return (
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/News'>News</Link></li>
          </ul>
        )
    }
}

export default TopBar;