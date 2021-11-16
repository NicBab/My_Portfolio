import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        Header
          <div className="header">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </>
    )
}

export default Header
