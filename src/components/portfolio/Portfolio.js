import React from 'react'
import "./styles.css"

import Header from '../header/Header'
import ProjectCardDisplay from '../project-card-display/ProjectCardDisplay'

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <hr width="1" className="containers-border" />
            <Header>Portfolio</Header>
            <ProjectCardDisplay />
        </div>
    )
}
