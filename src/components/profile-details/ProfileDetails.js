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
                    <a href="https://www.instagram.com/bfp_is_not_available/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://anchor.fm/ari-leverton" target="_blank" rel="noreferrer">
                        <i className="fas fa-podcast"></i>
                    </a>
                </div>
            </div>
            <img src="images/profile-pic.jpg" alt="profile-pic" className="profile-pic" />
        </div>
    )
}
