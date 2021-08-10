import React from 'react'
import "./styles.css"

import SlideButton from "../slide-button/SlideButton"
import SkillList from '../skill-list/SkillList'

export default function ProjectCard(props) {
    const { img, title, text, logo, link, skills } = props
    return (
        <div className="project-card-container">
            <div className="project-card-content">
                <div className="project-card-front">
                    <h3 className="project-title">{title}</h3>
                    <div className="project-image-container">
                        <img src={img} alt="project" className="project-image" />
                    </div>
                    <p className="project-text">{text}</p>
                </div>
                <div className="project-card-back">
                    <div className="project-card-back-top">
                        <div className="project-skill-list">
                            <SkillList list={skills}/>
                        </div>
                        <div className="project-logo-container">
                            <img src={logo} alt="project-logo" className="project-logo" />
                        </div>
                    </div>
                    <div className="project-link">
                        <a href={link} target="_blank" rel="noreferrer"><SlideButton>Visit Project</SlideButton></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
