import React from 'react'

import DevTools from './DevTools';
import SectionHeaders from './SectionHeaders';
import AboutInfo from './AboutInfo';

const About = ({ animations }) => {
    const { header1 } = animations
    return(
        <section id="about" className="about">
            <SectionHeaders 
                title={"About"} 
                id={"header1"} 
                isOn={header1} 
                headerClassName={"headerAnimationFromRight"} 
                underScoreClassName={"underScoreAnimationFromRight"}
            />
            <AboutInfo animations={animations}/>
            <DevTools animations={animations}/>
        </section>
    )
}

export default About;