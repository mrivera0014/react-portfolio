import React from 'react'
import './ProjectCard.css'

function Cards(props) {
    return (

        <>
            <div className="project-card">
                <div>
                    <img className="projectImg" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
                    <h4 className="card-title">{props.title} </h4>
                    <p className="card-text cardDes">{props.description}
                        <br />
                        <a href={props.deployed}>Click here to view the deployed application</a>
                        <br />
                        <a href={props.deployed}>Click here to view the Repository</a></p>

                </div>
            </div>
        </>
    )
}

export default Cards