import React from 'react'
import "./styles.css"

import Header from "../header/Header"
import ProfileDetails from '../profile-details/ProfileDetails'
import Description from '../description/Description'

export default function AboutMe(props) {
    return (
        <div className="about-me-container">
            <Header>About Me</Header>
            <ProfileDetails />
            <Description setModal={props.setModal}/>
        </div>
    )
}
