import React from 'react'

import blissed from "../images/blissed-out-body-work.png"
import pettingill from "../images/pettingill-industries.png"
import cssZen from "../images/css-zen-garden.png"
import studio from "../images/studio-films.png"
import bounty from "../images/original-bounty.png"
import business from "../images/business-time.png"
import mario from "../images/mario-pest.png"

import blissedMain from "../images/blissed.png"
import pettingillMain from "../images/pettingill.png"
import cssZenMain from "../images/css-main.png"
import studioMain from "../images/ghibli.png"
import bountyMain from "../images/starwars.png"
import businessMain from "../images/timeforbusiness.png"
import marioMain from "../images/mario.png"

import Project from "./Project.js"
import SectionHeaders from './SectionHeaders';

const DevProjects = ({ animations }) => {
    const projectsArr = [
        {
            image: [blissed, blissedMain],
            title: "Blissed Out Body Work",
            description: "'Blissed Out Body Work', a massage therapy company located in the Greater Salt Lake City Area. The website was design to streamline the process of setting appointments for customers and creating a detailed financial record. The website makes it easy to add new employees, customize each employee's preferences, and adjust website details for owners. Booking an appointment is made simple by going through the selection process and paying at the end with Stripe's gateway. It send receipt via Stripe and calendar invites via Google.",
            link: "https://www.blissedoutbodywork.com" 
        },
        {
            image: [pettingill, pettingillMain],
            title: "Pettingill Industries",
            description: "",
            link: "https://www.pettingill-industries.com" 
        },
        {
            image: [cssZen, cssZenMain],
            title: "CSS Zen Garden (Recreation)",
            description: "",
            link: "http://nottherealcsszengarden.surge.sh" 
        },
        {
            image: [studio, studioMain],
            title: "Studio Ghibli Films",
            description: "",
            link: "http://nottherealstudiofilms.surge.sh" 
        },
        {
            image: [bounty, bountyMain],
            title: "Star Wars Most Wanted",
            description: "",
            link: "https://not-original-bounty-hunter.herokuapp.com" 
        },
        {
            image: [business, businessMain],
            title: "Business Time",
            description: "",
            link: "http://nottherealbusinesstime.surge.sh" 
        },
        {
            image: [mario, marioMain],
            title: "Mario Pest Control",
            description: "",
            link: "http://nottherealmariopestcontrol.surge.sh" 
        },
    ]
    const { header2 } = animations

    const mappedProjects = projectsArr.map((projectObj, i) => {
        return <Project key={i} {...projectObj} />
    })
    return(
        <section id="devProjects" className="devProjects">
            <SectionHeaders 
                title={"Portfolio"} 
                id={"header2"} 
                isOn={header2} 
                headerClassName={"headerAnimationFromLeft"} 
                underScoreClassName={"underScoreAnimationFromLeft"}
            />
            <div className="projects">
                {mappedProjects}
            </div>
        </section>
    )
}

export default DevProjects;