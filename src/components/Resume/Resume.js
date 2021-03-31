import React from 'react'
import './Resume.css'
// import Resumepdf from "../files/resume.pdf"

function Resume() {
    return (
        <>
            <div >
                <a href="https://docs.google.com/document/d/e/2PACX-1vQZvbNiXht0Fs4Oy6CFT-a8cd4dpPfAou_smKQAjaMJn0hA1fukfmBEhfqVtSNwvLAbAqGZvbvEpjZc/pub?embedded=true" className="resume" download="maribel_rivera_resume">download now!</a>

                <iframe className="resumePDF" title="resumedoc" src="https://docs.google.com/document/d/e/2PACX-1vQZvbNiXht0Fs4Oy6CFT-a8cd4dpPfAou_smKQAjaMJn0hA1fukfmBEhfqVtSNwvLAbAqGZvbvEpjZc/pub?embedded=true"></iframe>

            </div>
        </>
    )
}

export default Resume
