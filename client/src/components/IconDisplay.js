import React from "react"

const IconDisplay = ({ letter, state, set, send }) => {
    return(
        <div
            className={`socialContainer ${state ? "overSocialContainer" : ""}`}
            onMouseEnter={() => set(true)}
            onMouseLeave={() => set(false)}
            onClick={send}
        >
            <p className={`socialIcon ${state ? "overSocialIcon" : ""}`}>{letter}</p>
        </div>
    )
}

export default IconDisplay;