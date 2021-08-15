import React, { useState } from 'react'
import emailjs from "emailjs-com"
import "./styles.css"
import { useTheContext } from '../../App' 

export default function ContactModal() {
    const { setModal } = useTheContext()
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [message, setMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('gmail', 'portfolio_template', e.target, 'user_Tt7nufyvnUYwzxSRbXwb2')
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
                        // value={name} 
                        // onChange={e => setName(e.target.value)} 
                    />
                    <input 
                        
                        type="email" 
                        className="contact-input" 
                        placeholder="Email" 
                        name="email"
                        // value={email} 
                        // onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <textarea 
                    rows="7" 
                    placeholder="Hey Ari," 
                    name="message" 
                    // value={message} 
                    // onChange={e => setMessage(e.target.value)} 
                />
                <button type="submit" className="contact-button">Send</button>
            </form>
        </div>
    )
}
