import React from 'react'
import "./styles.css"

import SkillList from "../skill-list/SkillList"

export default function Description(props) {
    return (
        <div>
            <div className="description-container">
                <p>
                    Hi, I'm Ari a <span>Front-end Developer</span> with a <span>Passion</span> for code. I am currently studying at <span>Brooklyn College</span> pursuing a degree in computer science.
                    <br />
                    Other than code I love playing a good game of 5v5 <span>Basketball</span>. If you are any good and are in the New York area meet me on the court for a game.
                </p>
                <div className="skill-list-holder">
                    <SkillList list="all" /> 
                </div>
            </div>
            <div className="contact-button-container">
                <button className="contact-button" onClick={() => props.setModal(prev => !prev)}>Contact Me</button>
            </div>
        </div>
    )
}
