import React from "react"
import '../css/Navbar.css';
import logorairbnb from '../image/airbnb-logo.png'


export default function Navbar() {
    return (<nav className="nav">
               <img className="nav--logo" src={logorairbnb} alt="logo"></img>
            </nav>
    )
}