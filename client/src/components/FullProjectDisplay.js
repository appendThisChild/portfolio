import React from "react"

import { useProject } from "../context/ProjectProvider.js"

const FullProjectDisplay = ({ offset }) => {
    const { viewing, project, handleNormalDisplay } = useProject()
    const { image, title, oneLine, description, link } = project

    const sendOff = () => window.open(link);

    return(
        <div className={"fullProjectDisplay"} style={{ display: viewing ? "" : "none", top: `${offset[1]}px`}}>
            <main>
                <header style={{ backgroundImage: `url(${image[0]})`}}>
                    {/* <img src={} alt=""/> */}
                </header>
                <section>
                    <div>
                        <h1>{title}</h1>
                        <h2>{oneLine}</h2>
                        <p>{description}</p>
                    </div>
                    <aside>
                        <button onClick={sendOff}>&#x274F; View Site</button>
                        <span onClick={handleNormalDisplay}>&#x2715;</span>
                    </aside>
                </section>
            </main>
        </div>
    )
}

export default FullProjectDisplay;