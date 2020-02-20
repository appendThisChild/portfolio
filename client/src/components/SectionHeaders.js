import React from "react"

const SectionHeaders = ({ title, id, isOn, headerClassName, underScoreClassName }) => {
    return(
        <main id={id} className="sectionHeaders">
            <h1 className={isOn ? headerClassName : ""} style={{ opacity: isOn ? "1" : "0"}}>{title}</h1>
            <h2 className={isOn ? underScoreClassName : ""} style={{ opacity: isOn ? "1" : "0"}}> </h2>
        </main>
    )
}

export default SectionHeaders;