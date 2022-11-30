import React from "react"
import '../css/Card.css';


export default function Card(props) {

    const imagesrc = require('../image/Star 1.png');
    const img = require(`../image/${props.img}`);

    let badgetText
    if (props.openSpots === 0) {
        badgetText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgetText = 'ONLINE'
    } 

    return (
        <div className="card">
            
            {badgetText && <div className="card--badge">{badgetText}</div>}
            <img src={img} className="card--image" alt=''/>
            <div className="card--stats">
                <img src={imagesrc} className="card--star" alt=''/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
