import React from 'react'
import "./styles.css"

import ProjectCard from '../project-card/ProjectCard'

export default function ProjectCardDisplay() {
    const cards = [
        {
            key: 1,
            image: "images/dummy.png",
            title: "Dummy",
            text: "This is a Dummy project."
        },
        {
            key: 2,
            image: "images/dummy.png",
            title: "Dummy",
            text: "This is a Dummy project."
        },
        {
            key: 3,
            image: "images/dummy.png",
            title: "Dummy",
            text: "This is a Dummy project."
        },
        {
            key: 4,
            image: "images/dummy.png",
            title: "Dummy",
            text: "This is a Dummy project."
        }
    ]
    return (
        <div className="project-card-display">
            {cards.map(card => {
                return (
                    <ProjectCard 
                        key={card.key}
                        img={card.image}
                        title={card.title}
                        text={card.text}
                    />
                )
            })}
        </div>
    )
}
