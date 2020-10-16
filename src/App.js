import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header/Header.component';
import Home from './pages/homepage/Homepage.component.js';
import Page2 from './pages/page-2/page-2.component.js';
import Search from './components/Search/Search.component';
import {withRouter} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.location.pathname !== '/search' && <Header />}
        <Switch>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);