import React from 'react'
import './ProjectCard.css'

function Cards(props) {
    return (

        <>
            <div className="project-card" >
                <div className="img-square-wrapper">
                    <img className="projectImg" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <br />
                    <br />
                    <p className="card-text ">{props.description}</p>
                    <a rel="noreferrer" target="_blank" href={props.deployed}>Click here to view the deployed application</a>
                    <br />
                    <a rel="noreferrer" target="_blank" href={props.github}>Click here to view the Repository</a>
                </div>
            </div>
        </>
    )
}

export default Cards
