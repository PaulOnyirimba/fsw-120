import React from 'react'
import '../RouterApp.css'
import { Link } from 'react-router-dom'

function Nav () {
    const linkStyle = {color:'White', textDecoration:'none', fontSize:"small"}
    return (
        <div className="RouterNav">
            <ul className="RouterNavLinks">
                <p>Welcom to Mr</p>
                <Link style={linkStyle} to='/Home'>Home</Link>
            </ul>
        </div>
    )
}

export default Nav