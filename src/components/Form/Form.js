import React from 'react'
import './Form.css'

function Form() {
    return (
        <div>
            <main>
                <form>
                    <h3 className="form-text header">Contact Me</h3>
                    <div className="mb-3">
                        <p className="formText">Name:</p>
                        <input type="text" className="userInput" id="exampleinputname" />
                    </div>
                    <div className="mb-3">
                        <p className="formText">Email:</p>
                        <input type="email" className="userInput" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <p className="formText">Message:</p>
                        <textarea className="userInput" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="button">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Form
