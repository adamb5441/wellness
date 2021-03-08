import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import recipes from "../recipes/index"
import profile from "../profile/index"
import './styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">profile</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={recipes} />
            <Route exact path="/profile" component={profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
