import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Container, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Mail } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import recipes from "../recipes/index"
import home from "../home/index"
import profile from "../profile/index"
import LoginButton from './components/LoginButton'
import './styles.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Router>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Wellness.com
            </Typography>
            <LoginButton />
          </Toolbar>
        </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
            <Switch>
            <List>
              <Link to="/">
                <ListItem button >
                  <ListItemIcon><Mail /></ListItemIcon>
                  <ListItemText>
                    Home
                  </ListItemText> 
                </ListItem>
              </Link>
              <Link to="/recipe">
                <ListItem button >
                  <ListItemIcon><Mail /></ListItemIcon>
                  <ListItemText>
                    Recipes
                  </ListItemText> 
                </ListItem>
              </Link>
              <Link to="/profile">
                <ListItem button >
                  <ListItemIcon><Mail /></ListItemIcon>
                  <ListItemText>
                    Profile
                  </ListItemText> 
                </ListItem>
              </Link>
              </List>
            </Switch>
          </div>
      </Drawer>
      <main className="content">
          <Container maxWidth="lg" >
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/recipe" component={recipes} />
              <Route exact path="/profile" component={profile} />
            </Switch>
          </Container >
      </main>
      </Router>
    </div>
  );
}

export default App;
