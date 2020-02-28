import React, { useState } from "react"

const Project = ({ image, title }) => {
    const [titleShow, setTitleShow] = useState(false)


    return(
        <div 
            style={{ backgroundImage: `url(${image[1]})`}}
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