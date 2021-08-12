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
            skills: ["React Native", "Puppeteer",]
        },
        {
            image: "images/screenshots/youtube.png",
            title: "Youtube Browse Blocker",
            text: "This is a chrome extension that hides your youtube feed so that you won't be distracted by random videos.",
            logo: "images/logos/youtube.jpg",
            link: "https://chrome.google.com/webstore/detail/youtube-browse-blocker/fdijgodcmpglkoceocpboadcfbgecgpe?hl=en",
            skills: ["JavaScript", "CSS"]
        },
        {
            image: "images/screenshots/bakedeco.png",
            title: "Bakedeco",
            text: "I did some freelance projects for Bakedeco. This is their gift card web page I created.",
            logo: "images/logos/bakedeco.png",
            link: "https://www.bakedeco.com/nav/gift_certificates1.asp",
            skills: ["HTML5", "CSS", "JavaScript"]
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
