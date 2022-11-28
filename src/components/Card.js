import React from "react"
import '../css/Card.css';

export default function Card(props) {

    return ( 
        <div className="card">
            <img className="card--image" src={props.img} alt="logo"></img>
            <div className="card--stats">
                <img className="card--star" src={props.stars_image} alt=""></img>
                <span>{props.scrol}</span>
                <span className="gray">{props.plus}</span>
                <span className="gray">{props.contry}</span>
            </div>
            <p>{props.contry}</p>
            <p><span className="bold">{props.coast}</span>{props.coastType}</p> 
        </div>
    )
}
