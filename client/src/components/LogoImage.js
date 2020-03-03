import React from "react"

const LogoImage = ({ source, selector, isOn }) => {
    return <img id={selector} src={source} alt="" className={isOn["devTools1"] ? "imageFlip" : ""} style={{ opacity: isOn["devTools1"] ? "1" : "0"}} />
}

export default LogoImage;