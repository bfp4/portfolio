import React from 'react'
import "./styles.css"

import ProjectCard from '../project-card/ProjectCard'

export default function ProjectCardDisplay() {
    const cards = [
        {
            image: "images/screenshots/sneakerniche.png",
            title: "SneakerNiche",
            text: "This is a website that web scrapes popular sneaker websites to find the best deals.",
            logo: "images/logos/sneakerniche.png",
            link: "https://sneakerniche.com/",
            skills: ["React", "Firebase", "Puppeteer"]
        },
        {
            image: "images/screenshots/hayom-yom.png",
            title: "Hayom Yom",
            text: "This is an app that shows the daily hayom yom (Hassidic teaching).",
            logo: "images/logos/hayom-yom.png",
            link: "https://play.google.com/store/apps/details?id=com.levertron.hayomyomapp",
            skills: ["React", "React Native", "Puppeteer",]
        },
        {
            image: "images/dummy.png",
            title: "Dummy",
            text: "This is a Dummy project.",
            logo: "images/logo.png",
            link: "https://sneakerniche.com/",
            skills: ["React", "Firebase"]
        },
        {
            image: "images/dummy.png",
            title: "Dummy",
            text: "This is a Dummy project.",
            logo: "images/logo.png",
            link: "https://sneakerniche.com/",
            skills: ["React", "Firebase"]
        }
    ]
    return (
        <div className="project-card-display">
            {cards.map((card, i) => {
                return (
                    <ProjectCard 
                        key={i}
                        img={card.image}
                        title={card.title}
                        text={card.text}
                        logo={card.logo}
                        link={card.link}
                        skills={card.skills}
                    />
                )
            })}
        </div>
    )
}
