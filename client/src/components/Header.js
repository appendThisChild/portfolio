import React, { useState } from "react"

import Image from "../images/IMG_5636.jpg"

const Header = () => {
    const [arrow, setArrow] = useState(false)
    
    const scrollToDetails = () => {
        console.log("scroll to details")
    }

    return(
        <header className="header">
            <div>
                <div>
                    <img src={Image} alt=""/>
                </div>
            </div>
            <main>
                <h1>Ryan Pettingill</h1>
                <h2>Full-Stack Web Developer</h2>
                <button
                    className={`viewDetails ${arrow ? "viewDown" : ""}`}
                    onMouseEnter={() => setArrow(true)}
                    onMouseLeave={() => setArrow(false)}
                    onClick={scrollToDetails}
                >View my details <span className={`arrow ${arrow ? "arrowDown" : "arrowUp"}`}>e</span></button>
                
                
                

            </main>
        </header>
    )
}

export default Header;