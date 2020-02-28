import React, { useState } from "react"

const Project = ({ image, title, id, trigger, i, phoneSized }) => {
    const [titleShow, setTitleShow] = useState(false)
    const delay = (i) / 10
    const styleTransition = trigger || phoneSized
    return(
        <div 
            id={id}
            className={trigger ? "slideInFromBottom2" : ""} 
            style={{ backgroundImage: `url(${image[1]})`, opacity: styleTransition ? "1" : "0", animationDelay: `${delay}s`, transitionDelay: `${delay}s`}}
            onMouseEnter={() => setTitleShow(true)}
            onMouseLeave={() => setTitleShow(false)}
        >
            <div style={{ opacity: titleShow ? "1" : "0"}}>
                <h1 className={titleShow ? "slideInFromTop" : ""}>{title}</h1>
                <button className={titleShow ? "slideInFromBottom" : ""}>Learn More</button>
            </div>
        </div>
    )
}

export default Project;