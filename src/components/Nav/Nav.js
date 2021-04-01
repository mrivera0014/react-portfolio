import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
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

            <a rel="noreferrer" target="_blank" href="https://github.com/mrivera0014"> <FaIcons.FaGithub /> </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/marblerivera/"> <FaIcons.FaLinkedinIn /> </a>

        </nav>
    )
}

export default Nav
