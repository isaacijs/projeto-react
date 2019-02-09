import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import { Router, Switch, Route } from 'react-router';
import Home from './containers/pages/Home/Home';
import createBrowserHistory from 'history/createBrowserHistory';
import About from './containers/pages/About/About';
import News from './containers/pages/News/News';

const history = createBrowserHistory();

class App extends Component {
  render(){
    return(
      <div>
        <Router history={history}>
          <div>
            <TopBar/>
            <Switch>
              <Route path='/' component={Home} exact={true}/>
              <Route path='/about' component={About}/>
              <Route path='/News' component={News}/>
            </Switch>
          </div>
      </Router>
      </div>
    )
  }

}

export default App;
