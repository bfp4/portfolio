import React from 'react'
import "./styles.css"
import { useTheContext } from '../../App'

import Portfolio from '../portfolio/Portfolio'
import AboutMe from '../about-me/AboutMe'
import ContactModal from '../contact-modal/ContactModal'

export default function ProfileContent() {
    const { modal } = useTheContext()

    return (
        <div className="profile-content-container">
            <Portfolio />
            <AboutMe />
            {modal && <ContactModal/>}
        </div>
    )
}
