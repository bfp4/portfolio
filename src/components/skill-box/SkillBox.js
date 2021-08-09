import React from 'react'
import "./styles.css"

export default function SkillBox(props) {
    const { title, color, backgroundColor, link, logo } = props

    const styles = {
        color: color,
        backgroundColor: backgroundColor
    }

    return (
        <a href={link} style={styles} className="skill-box-container">
            {title}
            <img src={logo} alt="logo" style={{height: "21px"}}/>
        </a>
    )
}
