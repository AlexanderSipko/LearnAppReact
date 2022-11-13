import React from "react"
import '../css/Navbar.css';
import ReactLogo from "../image/Unknown2.webp";

export default function Nacbar() {
    return (<nav className="nav">
                <img src={ReactLogo} alt="react_img" />
                <ul>
                    <li>React Course</li>
                    <li>AvSipko</li>
                    <li>Project 1</li>
                </ul>
            </nav>)
}