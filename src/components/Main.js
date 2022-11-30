import React from "react"
import group from '../image/Group 77.png'
import '../css/Main.css';


export default function Main() {

    const link = "https://www.youtube.com/watch?v=bMknfKXIFA8"
    return (
        <section className="hero">
            <img className="hero--foto" src={group} alt="hero"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activitiesled by one-of-a-kind hosts—all without leaving home.
</p>
    <p>4:20 to {link}</p>

        </section>
    )
}