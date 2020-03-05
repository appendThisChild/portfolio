import React from "react"

import Resume from "../documents/Revised-Reume3-5-20.pdf"

const AboutInfo = ({ animations }) => {
    const { aboutInfoFirstLine, aboutInfoButton } = animations


    return(
        <section style={{ opacity: aboutInfoFirstLine || aboutInfoButton ? "1" : "0"}}>
            <div>
                <p id="aboutInfoFirstLine">Hi! My name is Ryan. I’m a full-stack web developer, multi-media artist, and entrepreneur.</p>
                <p>My leading ambition is to assist in the continuation of an exceptional truth; that you belong here and all is working in your favor.</p>
            </div>
            <div>
                <h3>Focuses</h3>
                <ul>
                    <li>Prioritizing reponsive and dynamic designs.</li>
                    <li>Crafting reusable, simplified, and organized code.</li>
                    <li>Continuously learning new technologies.</li>
                </ul>
            </div>
            <a href={Resume} download="Ryan-Pettingill-Resume.pdf" id="aboutInfoButton"><span>&#x2913;</span> Resume</a>
            {/* <button  ></button> */}
        </section>
    )
}

export default AboutInfo;