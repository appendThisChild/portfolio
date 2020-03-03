import React, { useState } from "react"
import IconDisplay from "./IconDisplay"

import { useProject } from "../context/ProjectProvider.js"

const Footer = ({ scrollToSection }) => {
    const [icons, setIcons] = useState([
        {letter: "l", state: false, url: "https://www.linkedin.com/in/ryanpettingill"}, 
        {letter: "F", state: false, url: "https://www.facebook.com/ryan.pettingill.12"}, 
        {letter: "™", state: false, url: "https://www.instagram.com/thelateyogi/"} 
    ])
    const { viewing } = useProject()
    const sendOff = location => window.open(location);
    const mappedIcons =icons.map((obj1, i) => <IconDisplay 
        key={i} 
        letter={obj1.letter} 
        state={obj1.state} 
        send={() => sendOff(obj1.url)}
        set={newStateValue => setIcons(icons.map((obj2, j) => j === i ? { ...obj1, state: newStateValue} : obj2))} 
    />)
    return(
        <footer className="footer">
            <div className="backToTop" onClick={() => scrollToSection("home")} style={{ position: viewing ? "initial" : ""}}>
                &#x2963;
            </div>
            <div>
                {mappedIcons}
            </div>
            <div>
                <h1>RYAN PETTINGILL<span><span>©</span>2019</span></h1>
            </div>
        </footer>
    )
}

export default Footer;