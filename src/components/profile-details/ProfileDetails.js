import React from 'react'
import "./styles.css"

export default function ProfileDetails() {
    return (
        <div className="profile-details-container">
            <div className="profile-details-text">
                <h2 className="my-name">Ari Leverton</h2>
                <h3><i className="fas fa-map-marker-alt"></i> Brooklyn, New York</h3>
                <div className="social-links-container">
                    <a href="https://github.com/bfp4" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ari-leverton-33a522209/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/* <a href="https://anchor.fm/ari-leverton" target="_blank" rel="noreferrer">
                        <i className="fas fa-podcast"></i>
                    </a> */}
                </div>
            </div>
            <img src="images/profile-pic.png" alt="profile-pic" className="profile-pic" />
        </div>
    )
}
