import React from "react"
import '../css/Card.css';


export default function Card(props) {

    const imagesrc = require('../image/Star 1.png');
    const img = require(`../image/${props.item.coverImg}`);

    let badgetText
    if (props.item.openSpots === 0) {
        badgetText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgetText = 'ONLINE'
    }

    return (
        <div className="card">
            
            {badgetText && <div className="card--badge">{badgetText}</div>}
            <img src={img} className="card--image" alt=''/>
            <div className="card--stats">
                <img src={imagesrc} className="card--star" alt=''/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
