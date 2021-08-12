import React, { useState } from 'react'
import "./styles.css"

import Portfolio from '../portfolio/Portfolio'
import AboutMe from '../about-me/AboutMe'
import ContactModal from '../contact-modal/ContactModal'

export default function ProfileContent() {
    const [modal, setModal] = useState(false)

    return (
        <div className="profile-content-container">
            <Portfolio />
            <AboutMe setModal={setModal} />
            {modal && <ContactModal setModal={setModal} />}
        </div>
    )
}
