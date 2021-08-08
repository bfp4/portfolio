import React from 'react'
import "./styles.css"

export default function ProjectCard(props) {
    const { img, title, text } = props
    return (
        <div className="project-card-container">
            <div className="project-card-front">
                <h3 className="project-title">{title}</h3>
                <img src={img} alt="project" className="project-image" />
                <p className="project-text">{text}</p>
            </div>
            <div className="project-card-back">
                hello
            </div>
        </div>
    )
}
