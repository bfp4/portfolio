import React from 'react'
import "./styles.css"

import Header from "../header/Header"
import ProfileDetails from '../profile-details/ProfileDetails'
import Description from '../description/Description'

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-top-hr-container" >
                <hr className="about-me-top-hr" />
            </div>
            <Header>About Me</Header>
            <ProfileDetails />
            <Description />
        </div>
    )
}
