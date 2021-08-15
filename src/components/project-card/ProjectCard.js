import React, { useRef } from 'react'
import "./styles.css"
import { useTheContext } from '../../App'

import SlideButton from "../slide-button/SlideButton"
import SkillList from '../skill-list/SkillList'

export default function ProjectCard(props) {
    const projectContentRef = useRef()
    const { isTouch } = useTheContext()
    const { img, title, text, logo, link, skills } = props

    const handleClick = () => {
        if(isTouch()) {
            if(projectContentRef.current.style.transform === "rotateY(180deg)") projectContentRef.current.style.transform = "rotateY(0deg)"
            else projectContentRef.current.style.transform = "rotateY(180deg)"
        }else projectContentRef.current.style.transform = null
    }

    return (
        <div className="project-card-container" onClick={handleClick}>
            <div className="project-card-content" ref={projectContentRef}>
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
