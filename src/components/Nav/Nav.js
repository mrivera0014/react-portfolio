import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
    return (
        <nav className="topnav">
            <Link to="/" replace>
                Home
                        </Link>
            <Link to="/projects" replace>
                Projects
                        </Link>
            <Link to="/contact" replace>
                Contact
                        </Link>
            <Link to="/resume" replace>
                Resume
                        </Link>
        </nav>
    )
}

export default Nav
