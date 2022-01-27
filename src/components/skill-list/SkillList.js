import React from 'react'
import "./styles.css"

import SkillBox from '../skill-box/SkillBox'

export default function SkillList(props) {
    const skillBoxes = [
        {
            title: "HTML5",
            color: "#F06529",
            backgroundColor: "#FFF",
            link: "https://en.wikipedia.org/wiki/CSS",
            logo: "images/skills/html.jpg",
        },
        {
            title: "CSS",
            color: "#264de4",
            backgroundColor: "#FFF",
            link: "https://en.wikipedia.org/wiki/CSS",
            logo: "images/skills/css.jpg",
        },
        {
            title: "React",
            color: "#61DBFB",
            backgroundColor: "#FFFFFF",
            link: "https://reactjs.org/",
            logo: "images/skills/react.png",
        },
        {
            title: "React Native",
            color: "#FFFFFF",
            backgroundColor: "#61DBFB",
            link: "https://reactnative.dev/",
            logo: "images/skills/react-native.png",
        },
        {
            title: "Puppeteer",
            color: "#FFFFFF",
            backgroundColor: "#313033",
            link: "https://github.com/puppeteer/puppeteer",
            logo: "images/skills/puppeteer.png",
        },
        {
            title: "Firebase",
            color: "#F57C00",
            backgroundColor: "#2C384A",
            link: "https://firebase.google.com/",
            logo: "images/skills/firebase.png",
        },
        {
            title: "JavaScript",
            color: "#F0DB4F",
            backgroundColor: "#323330",
            link: "https://www.javascript.com/",
            logo: "images/skills/javascript.png",
        },
    ]

    const listed = props.list === "all" ? skillBoxes : skillBoxes.filter(box => props.list.includes(box.title))

    return (
        <div className="skills-list-container">
            <h3>Skills</h3>
            {listed.map((box, i) => {
                return (
                    <SkillBox 
                        key={i}
                        title={box.title}
                        color={box.color}
                        backgroundColor={box.backgroundColor}
                        link={box.link}
                        logo={box.logo}
                    />
                )
            })}
        </div>
    )
}
