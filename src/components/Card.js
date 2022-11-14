import React from "react"
import '../css/Card.css';
import ImagePath1 from '../image/card1.png'
import ImagePath2 from '../image/card2.png'
import ImagePath3 from '../image/card3.png'
import Star from '../image/Star 1.png'

export default function Card() {

    return (
        <div className="card">
            <img className="card--image" src={ImagePath1} alt="logo"></img>
            <div className="card--stats">
                <img className="card--star" src={Star} alt=""></img>
                <span>5.0</span>
                <span className="gray">(6) + </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 </span>/ person</p> 
        </div>
    )
}