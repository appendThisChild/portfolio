import React from 'react'

import SectionHeaders from './SectionHeaders';

const DevProjects = ({ animations }) => {
    const { header2 } = animations
    return(
        <section id="devProjects" className="devProjects">
            <SectionHeaders 
                title={"Portfolio"} 
                id={"header2"} 
                isOn={header2} 
                headerClassName={"headerAnimationFromLeft"} 
                underScoreClassName={"underScoreAnimationFromLeft"}
            />
            
        </section>
    )
}

export default DevProjects;