import React from 'react'

import DevTools from "./DevTools.js"

const About = ({ animations }) => {

    return(
        <section id="about" className="about">
            <main className="sectionHeaders">
                <h1>About</h1>
            </main>
            

            <DevTools animations={animations}/>
        </section>
    )
}

export default About;