import React from 'react';
import './homepage.styles.css';
import MainSection from '../../components/MainSection/MainSection.component.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const Profile = () => <div>You're on the Profile Tab</div>;

  const Section2 = () => <div>You're on section2 Tab</div>;

class Home extends React.Component {
  render(){

    const {path} = this.props.match;

    return (
      <div className="homepage"> 
      <h1> BLa bla </h1>
      <div className="section-links">
          <Link to={`${path}/section1`}> Section 1 </Link>
          <Link to={`${path}/section2`}> Section 2 </Link>
      </div>

      <div className="tabs">
      <Switch>
        <Route path={`${path}/:id`} exact component={Profile} />
        <Route path={`${path}/:id`} exact component={Section2} />
      </Switch>
    </div>
      

  </div>
)

  }

}

export default Home;

