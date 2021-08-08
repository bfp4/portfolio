import React from 'react'
import "./styles.css"

export default function SlideButton({ children, ...props }) {
    return (
        <button 
            className="slide-button"
            style={{
                width: props.width
            }}
        >
            {children}
        </button>
    )
}
