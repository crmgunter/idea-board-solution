import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import IdeaPage from './components/IdeaPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/users/:userId" component={IdeaPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
