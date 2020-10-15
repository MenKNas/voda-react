import React from 'react'
import './card.styles.css'

const Card = ({title, icon, description, link}) => {
    return ( 
        <div className="card">
            <img alt={icon}/>
            <div className="card-title">
                <h3> {title} </h3>
            </div>
            <div className="card-body">
                <p> {description} </p>
                <button className="card-btn"> 
                {link} >
                </button>
            </div>
        </div> 
    );
}
 
export default Card;