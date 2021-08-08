import React from 'react'
import "./styles.css"

import Portfolio from '../portfolio/Portfolio'
import AboutMe from '../about-me/AboutMe'

export default function ProfileContent() {
    return (
        <div className="profile-content-container">
            <Portfolio />
            <AboutMe />
        </div>
    )
}
