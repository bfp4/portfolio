import React from 'react'
import "./styles.css"

import SkillBox from '../skill-box/SkillBox'

export default function SkillList(props) {
    const skillBoxes = [
        {
            title: "React",
            color: "#61DBFB",
            backgroundColor: "#FFFFFF",
            link: "https://reactjs.org/",
            logo: "images/skills/react.png",
        },
        {
            title: "Puppeteer",
            color: "#FFFFFF",
            backgroundColor: "#313033",
            link: "https://github.com/puppeteer/puppeteer",
            logo: "images/skills/Puppeteer.png",
        },
        {
            title: "Firebase",
            color: "#F57C00",
            backgroundColor: "#2C384A",
            link: "https://firebase.google.com/",
            logo: "images/skills/firebase.png",
        },
        {
            title: "React Native",
            color: "#FFFFFF",
            backgroundColor: "#61DBFB",
            link: "https://reactnative.dev/",
            logo: "images/skills/react-native.png",
        },
    ]

    console.log(props)

    const listed = skillBoxes.filter(box => props.list.includes(box.title))

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
