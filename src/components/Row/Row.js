import React from 'react'
import Row from 'react-bootstrap/Row'
import * as FaIcons from 'react-icons/fa'
import * as DiIcons from 'react-icons/di'
import './Row.css'

function Rows(props) {
    return (
        <Row>
            {props.children}
            <section className="aboutMe meSection">

                <p>
                    Hello, my name is Maribel Rivera although I do prefer to go by Marble!
                </p>
                <p>
                    My goal for the past few years is to learn code to the best of my ability and become a programmer. In 2021 I took the first step towards that goal by taking University of Denver's Coding Bootcamp and in April I received my Full Stack Web Development certificate. During this time I learned HTML, CSS, Javascript, React.js, and Node.js. The more I learned the more excited I became to put my new skills to the test. I love learning, problem solving, teaching others, and cannot wait to use my passion for coding in my new role as a web developer.
                </p>

            </section>

            <section className="meSection">
                <p className="reactIc icon"> <FaIcons.FaReact /></p>
                <p className="nodeIc icon"> <FaIcons.FaNodeJs /></p>
                <p className="jsIc icon"> <DiIcons.DiJavascript1 /></p>
                <p className="htmlIc icon"> <DiIcons.DiJavascript /></p>
                <p className="cssIc icon"> <DiIcons.DiCss3 /></p>
            </section>

        </Row >
    )
}

export default Rows
