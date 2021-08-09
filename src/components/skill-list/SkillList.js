import React from 'react'
import "./styles.css"

import SkillBox from '../skill-box/SkillBox'

export default function SkillList() {
    const skillBoxes = [
        {
            title: "React",
            color: "#61DBFB",
            backgroundColor: "#FFFFFF",
            link: "https://reactjs.org/",
            logo: "images/react.png",
        },
        {
            title: "Firebase",
            color: "#F57C00",
            backgroundColor: "#2C384A",
            link: "https://firebase.google.com/",
            logo: "images/firebase.png",
        }
    ]

    return (
        <div className="skills-list-container">
            <h3>Skills</h3>
            {skillBoxes.map((box, i) => {
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
