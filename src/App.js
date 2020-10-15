import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header/Header.component';
import MainSection from './components/MainSection/MainSection.component';
import Home from './pages/homepage/Homepage.component.js';
import Page2 from './pages/page-2/page-2.component.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </div>
    );
  }
}

export default App;