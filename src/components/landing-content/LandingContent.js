import React from 'react'
import "./styles.css"
import { Link } from "react-router-dom"

import SlideButton from "../slide-button/SlideButton"

export default function LandingContent() {
    return (
        <div className="landing-container">
            <div className="landing-text">
                <h1 className="landing-name landing-item">Ari Leverton</h1>
                <h2 className="landing-tagline landing-item">Software Developer</h2>
            </div>
            <div className="landing-item">
                <Link to="/profile">
                    <SlideButton width={"200px"}>Visit</SlideButton>
                </Link>
            </div>
        </div>
    )
}
