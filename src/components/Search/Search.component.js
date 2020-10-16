import React, { Component } from 'react'
import './Search.styles.css'
import {Link} from "react-router-dom";
export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            routes: [
                {
                    name: 'Homepage', 
                    url:'/home', 
                    nested:[
                        {name:'All', 'url': '/home'},
                        {name: 'Section1', url: '/home?section1=true'},
                        {name: 'Section2', url: '/home?section2=true'}
                    ]
                }, 
                {name: 'Page2', url:'/page2', nested: null}
            ],
            searchTerm: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }
    render() {
        let routes = this.state.routes
        let search =  this.state.searchTerm.trim().toLowerCase();

        if (search.length > 0) {
            routes = routes.filter(function(route) {
              return route.name.toLowerCase().match(search);
            });
          }

        return (
            <div className="fullpage-search">
                <Link className="exit-btn" to="/home"><i className="fa fa-times" aria-hidden="true"></i></Link>
                <div className="search-container">
                    <input className="search-field" type="text" placeholder="Search here" onChange={this.handleSearch} value={this.state.searchTerm} ref="search"/> <i className="fa fa-search"></i>
                    <ul className="routes-list"> 
                    {routes.map((route,index)=>(
                        <Link to={route.url} className="search-link" key={index}> 
                            {route.name}
                            {route.nested ? route.nested.map((nestedRoute,index)=>(
                                <ul> <Link to={nestedRoute.url} className="search-link-nested" key={index}> {nestedRoute.name} </Link></ul>
                            )): ''} 
                        </Link>
                    ))}

                </ul>
                </div>
            </div>
        )
    }
}
