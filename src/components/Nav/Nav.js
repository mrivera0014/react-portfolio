import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './Nav.css'
// import { IconBase } from 'react-icons/lib'


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
            <a rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1wGAY2TkO1PHy_BMIvL2pVQVSt3viq4cJlt27ien5QnQ/edit?usp=sharing"> <FaIcons.FaAlignJustify /> Resume </a>

        </nav>
    )
}

export default Nav
