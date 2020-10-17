import React from 'react';
import './homepage.styles.css';
import queryString from 'query-string';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sections from '../../components/Sections/Sections.component';

class Home extends React.Component {
 
  state = {
    id: null,
    description: null,
    name: null,
    sections: [],
    params: {},
    selectedTab: '01'
  }

  componentDidMount() {
    fetch('https://voda-react-assessment.herokuapp.com/home')
    .then(res => res.json())
    .then((data) => {
        this.setState({ 
            id: data[0].id,
            description: data[0].description,
            name: data[0].name,
            sections: data[0].sections
        })
    })
    // .catch(console.log)

      let params = queryString.parse(this.props.location.search)
      if (params.section1) {
        this.setState({
          selectedTab: '01'
        })
      } else if (params.section2) {
        this.setState({
          selectedTab: '02'
        })
      } else {
        this.setState({
          selectedTab: null
        })
      }
    }

  render(){
    return (
      <div className="homepage"> 
      <h1> {this.state.description} </h1>
      <Tabs>
      <TabList className="tab-list">
        <Tab className="main-tab">Section 1</Tab>
        <Tab className="main-tab">Section 2</Tab>
      </TabList>
      { this.state.sections.map((section, index)=>(
        <TabPanel key={index}>
          <Sections
            id={section.id} 
            selectedTab={this.state.selectedTab}
            title={section.title}
            images={section.images}
            graphText={section.graphText}
            stats={section.stats}
            formText={section.formText}
            formLabels={section.formLabels}
            buttonText={section.buttonText}
          />
        </TabPanel>
      ))}
    </Tabs>
  </div>
)

  }

}

export default Home;

