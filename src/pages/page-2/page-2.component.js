import React from 'react';
import './page-2.styles.css';
import Card from '../../components/Card/card.component.jsx';
class Page2 extends React.Component {

    state = {
        id: null,
        description: null,
        name: null,
        tiles: []
    }

    componentDidMount() {
        fetch('https://voda-react-assessment.herokuapp.com/page')
        .then(res => res.json())
        .then((data) => {
            console.log('pageeee 2')
            console.log(data)
            this.setState({ 
                id: data[0].id,
                description: data[0].description,
                name: data[0].name,
                tiles: data[0].tiles
            })
        })
        .catch(console.log)
    }

    render() {
      return (
        <div className="page-2-container">
            <h2> {this.state.description }</h2>
            <div className="tiles-container">
                {this.state.tiles.map((tile, index)=>(
                    <Card 
                        key={index} 
                        icon={tile.icon}
                        title={tile.title}
                        description={tile.description}
                        link={tile.link}
                    />
                ))}
            </div>
        </div>
      );
    }
  }
  
  export default Page2;