import React from "react"

import { useNavToggle } from "../context/NavToggleProvider.js"

const Nav = ({ where, scrollToSection }) => {
    const { navOpen, setNavOpen } = useNavToggle()

    const toggleNav = () => {
        setNavOpen(prev => !prev)
    }
    const calculateHeight = () => {
        const { height } = document.getElementById("link").getBoundingClientRect()
        return height * .75 * 4
    }
    const smallestNum = where.sort((a, b) => {
        let value1 = a.position
        let value2 = b.position
        if (value1 < 0) value1 = value1 * -1;
        if (value2 < 0) value2 = value2 * -1; 
        return value1 - value2
    })
    return(
        <>
            <nav id="nav" className="nav">
                <main>
                   <span onClick={toggleNav}>&#x2630;</span> 
                </main>
                <div className={`dropDown`} style={{ height: navOpen ? `${calculateHeight()}pt` : ""}}>
                    <p id="link" onClick={() => scrollToSection("home")} style={{ color: smallestNum[0].i === 0 ? "rgb(218, 40, 40)" : ""}}>Home</p>
                    <p onClick={() => scrollToSection("about")} style={{ color: smallestNum[0].i === 1 ? "rgb(218, 40, 40)" : ""}}>About</p>
                    <p onClick={() => scrollToSection("devProjects")} style={{ color: smallestNum[0].i === 2 ? "rgb(218, 40, 40)" : ""}}>Portfolio</p>
                    <p onClick={() => scrollToSection("contact")} style={{ color: smallestNum[0].i === 3 ? "rgb(218, 40, 40)" : ""}}>Contact</p>
                </div>
            </nav>
            
        </>
    )
}

export default Nav;