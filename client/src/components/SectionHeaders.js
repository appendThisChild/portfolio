import React from "react"

const SectionHeaders = ({ title, id, isOn, headerClassName, underScoreClassName, fontSize }) => {
    return(
        <main id={id} className="sectionHeaders">
            <h1 className={isOn ? headerClassName : ""} style={{ opacity: isOn ? "1" : "0", fontSize }}>{title}</h1>
            <h2 className={isOn ? underScoreClassName : ""} style={{ opacity: isOn ? "1" : "0"}}> </h2>
        </main>
    )
}

export default SectionHeaders;