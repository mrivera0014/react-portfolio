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
                <p >Hello, my name is Maribel Rivera although I do prefer to go by Marble! I'm from Denver, CO. and worked
                    at Starbucks for about five years. I also have experience with Microsoft Word, Excel, and AutoCAD. I
                    first became interested about coding about two years ago when a friend talked to me about going to
                    school to become a web developer. I decided to look into it more because it seemed very interesting. The
                    more I researched the more I wanted to learn how to code myself. I began to have all these different
                    ideas for projects that I could do if I did decide to take on this challenge. After a few months of
                    planning out how to go about learning coding I decided that this was the right move to make, of course
                    the pandemic happened and delayed my plans a little bit. Today I am going through the University of
                    Denver's coding bootcamp and I am excited to see the progress I make throughout the course.</p>

                <p>
                    Hello, my name is Maribel Rivera although I do prefer to go by Marble!
                </p>
                <p>
                    My goal for the past few years is to learn code to the best of my ability and become a programmer. In 2021 I took the first step towards that goal by taking University of Denver's Coding Bootcamp and in April I received my Full Stack Web Development certificate. During this time I learned HTML, CSS, Javascript, React.js, and Node.js. The more I learned the more excited I became to test my knowledge. I love learning, problem solving, and teaching others.
                </p>


                <p> To view and download my resume click <a className="here" href="./assets/maribel_rivera_resume.pdf"
                    target="_blank Resume Download">here</a>
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
