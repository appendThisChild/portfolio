import React, { useState } from "react"

import { useProject } from "../context/ProjectProvider.js"

const Project = ({ image, title, sub, oneLine, description, link, id, trigger, i, phoneSized }) => {
    const { handleFullDisplay, viewing } = useProject()
    const fullDetails = { image, title, oneLine, description, link }
    const [titleShow, setTitleShow] = useState(false)
    const delay = (i) / 10
    const styleTransition = trigger || phoneSized

    const handleOpen = () => {
        setTitleShow(false)
        handleFullDisplay(fullDetails)
    }
    
    return(
        <div 
            id={id}
            className={trigger ? "slideInFromBottom2" : ""} 
            style={{ transitionDuration: viewing ? "0s": "", backgroundImage: `url(${image[1]})`, opacity: styleTransition ? "1" : "0", animationDelay: `${delay}s`, transitionDelay: viewing ? "0s" : `${delay}s`}}
            onMouseEnter={() => !viewing ? setTitleShow(true) : ""}
            onMouseLeave={() => setTitleShow(false)}
        >
            {!viewing ?
            <div style={{ opacity: titleShow ? "1" : "0"}}>
                <div className={titleShow ? "slideInFromTop" : ""}>
                    <h1>{title}</h1>
                    <h2>{sub}</h2>
                </div>
                <button onClick={handleOpen} className={titleShow ? "slideInFromBottom" : ""}>LEARN MORE</button>
            </div>
            :null}
        </div>
    )
}

export default Project;