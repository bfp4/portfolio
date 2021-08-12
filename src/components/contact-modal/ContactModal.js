import React from 'react'
import "./styles.css"

export default function ContactModal(props) {
    return (
        <div className="backdrop">
            <form className="contact-container">
                <h1>Contact Me</h1>
                <i className="fas fa-times" onClick={() => props.setModal(prev => !prev)}></i>
                <div className="contact-input-container">
                    <input type="text" className="contact-input" placeholder="Full Name" />
                    <input type="email" className="contact-input" placeholder="Email" />
                </div>
                <textarea rows="7" placeholder="Hey Ari," />
                <button className="contact-button">Send</button>
            </form>
        </div>
    )
}
