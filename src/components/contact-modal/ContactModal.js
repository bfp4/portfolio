import React from 'react'
import emailjs from "emailjs-com"
import "./styles.css"
import { useTheContext } from '../../App' 
const { REACT_APP_GMAIL_ID } = process.env 

export default function ContactModal() {
    const { setModal } = useTheContext()

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('gmail', 'portfolio_template', e.target, REACT_APP_GMAIL_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div className="backdrop">
            <form onSubmit={handleSubmit} className="contact-container">
                <h1>Contact Me</h1>
                <i className="fas fa-times" onClick={() => setModal(prev => !prev)}></i>
                <div className="contact-input-container">
                    <input 
                        type="text" 
                        className="contact-input" 
                        placeholder="Full Name" 
                        name="name" 
                    />
                    <input 
                        
                        type="email" 
                        className="contact-input" 
                        placeholder="Email" 
                        name="email"
                    />
                </div>
                <textarea 
                    rows="7" 
                    placeholder="Hey Ari," 
                    name="message" 
                />
                <button type="submit" className="contact-button">Send</button>
            </form>
        </div>
    )
}
