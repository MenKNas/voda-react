import React from 'react'
import './Header.style.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from "react-router-dom";

class Header extends React.Component {

    state = {
        slides: []
    }

    componentDidMount() {
        fetch('https://voda-react-assessment.herokuapp.com/slider')
        .then(res => res.json())
        .then((data) => {
          this.setState({ slides: data })
        })
        // .catch(console.log)
      }
    
    render() {
      return (
            <div className="header-container">
                <div> 
                    <NavLink to="/home" className="nav-link" activeClassName="active-link"> Home </NavLink>
                    <NavLink to="/page2" className="nav-link" activeClassName="active-link"> Page 2 </NavLink>
                    <NavLink to="/search" className="nav-link"> <i className="fa fa-search"></i> </NavLink>
                    <div className="carousel-container">
                        <Carousel >
                            {this.state.slides.map((slide,index) => (
                            <div key={index}> 
                                    <img src={slide.image} alt="slider"/>
                                    <p className="legend"> {slide.title}</p>
                                    <p className="subtitle"> {slide.subtitle}</p>
                            </div> 
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
      )
    }
  }
  
  export default Header;