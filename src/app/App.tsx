import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Container, Drawer, List, ListItem } from '@material-ui/core'
import recipes from "../recipes/index"
import profile from "../profile/index"
import './styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Wellness.com
            </Typography>
          </Toolbar>
        </AppBar>
      <Drawer
        variant="permanent"
      >
            <Switch>
            <List>
              <Link to="/">
                <ListItem button >Home</ListItem>
              </Link>
              <Link to="/profile">
                <ListItem button >Profile</ListItem>
              </Link>
              </List>
            </Switch>
      </Drawer>
      <main >
        <div className="content" >
          <Container maxWidth="lg" >
            <Switch>
              <Route exact path="/" component={recipes} />
              <Route exact path="/profile" component={profile} />
            </Switch>
          </Container >
        </div>
      </main>
      </Router>
    </div>
  );
}

export default App;
