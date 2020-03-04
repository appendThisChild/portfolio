import React from "react"

const AboutInfo = ({ animations }) => {
    const { aboutInfoFirstLine, aboutInfoButton } = animations


    return(
        <section style={{ opacity: aboutInfoFirstLine || aboutInfoButton ? "1" : "0"}}>
            <div>
                <p id="aboutInfoFirstLine">Hi! My name is Ryan. I’m a full-stack web developer, multi-media artist, and entrepreneur.</p>
                <p>My leading ambition is to assist in the continuation of an exceptional truth; that you belong here and all is working in your favor.</p>
            </div>
            <div>
                <h3>Programming Focuses</h3>
                <ul>
                    <li>Prioritizing reponsive and dynamic designs.</li>
                    <li>Crafting reusable, simplified, and organized code.</li>
                    <li>Continuously learning new technologies.</li>
                </ul>
            </div>
            
            <button id="aboutInfoButton"><span>&#x2913;</span> Resume</button>
        </section>
    )
}

export default AboutInfo;