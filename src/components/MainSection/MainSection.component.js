import React from 'react';
import './MainSection.styles.css';
import Section1 from '../Section/Section.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
class MainSection extends React.Component {

state = {
    id: null,
    description: null,
    name: null,
    sections: []
}
componentDidMount() {
    fetch('https://voda-react-assessment.herokuapp.com/home')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        this.setState({ 
            id: data[0].id,
            description: data[0].description,
            name: data[0].name,
            sections: data[0].sections
        })
    })
    .catch(console.log)
    }
  render() {
    return (
      <div className="main-section-container">

      </div>
    );
  }
}

const Profile = () => <div>You're on the Profile Tab</div>;

export default MainSection;