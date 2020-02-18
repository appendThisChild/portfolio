import React from "react"

const Nav = () => {

    const openNav = () => {
        console.log("open nav")
    }

    return(
        <nav className="nav">
            <span onClick={openNav}>&#x2630;</span>
        </nav>
    )
}

export default Nav;