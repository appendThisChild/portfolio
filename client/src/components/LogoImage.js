import React from "react"

const LogoImage = ({ source, selector, isOn }) => {
    return <img id={selector} src={source} alt="" className={isOn[selector] ? "imageFlip" : ""} style={{ opacity: isOn[selector] ? "1" : "0"}} />
}

export default LogoImage;