import React from 'react'

import blissed from "../images/blissed-out-body-work.jpg"
import pettingill from "../images/pettingill-industries.png"
import cssZen from "../images/css-zen-garden.png"
import studio from "../images/studio-films.jpg"
import bounty from "../images/original-bounty.png"
import business from "../images/business-time.jpg"
import mario from "../images/mario-pest.jpg"

import blissedMain from "../images/blissed.png"
import pettingillMain from "../images/pettingill.png"
import cssZenMain from "../images/css-main.png"
import studioMain from "../images/ghibli.png"
import bountyMain from "../images/starwars.png"
import businessMain from "../images/timeforbusiness.png"
import marioMain from "../images/mario.png"

import Project from "./Project.js"
import SectionHeaders from './SectionHeaders';

const DevProjects = ({ animations, phoneSized }) => {
    const projectsArr = [
        {
            image: [blissed, blissedMain],
            title: "Blissed Out Body Work (Demo)",
            sub: "React, Node, and JavaScript",
            oneLine: "APPOINTMENT BOOKING WEBSITE",
            description: "This application is a demo. - Streamlines the process of setting appointments for customers and creates a detailed financial record. The website makes it easy to add new employees, customize each employee's preferences, and adjust website details. Payment processing via Stripe and calendar invites via GCP.",
            link: "https://therapist-booking.herokuapp.com/" 
        },
        {
            image: [pettingill, pettingillMain],
            title: "Pettingill Industries",
            sub: "React, Node, and JavaScript",
            oneLine: "ONLINE BUSINESS SOLUTIONS",
            description: "Responsible for displaying all services of the business and receiving/storing contact messages. Contains custom-designed dynamic animations and a photo gallery carousel.",
            link: "https://pettingill-industries.herokuapp.com" 
        },
        {
            image: [cssZen, cssZenMain],
            title: "CSS Zen Garden (Recreation)",
            sub: "HTML, CSS, and JavaScript",
            oneLine: "DESIGN CHALLENGE",
            description: "Recreation of csszengarden.com for the purpose of challenging my design skills.",
            link: "http://nottherealcsszengarden.surge.sh" 
        },
        {
            image: [studio, studioMain],
            title: "Studio Ghibli Films",
            sub: "React and JavaScript",
            oneLine: "CONTENT DISPLAY",
            description: "Simple film display for Studio Ghibli. Pulls information from third party API.",
            link: "http://nottherealstudiofilms.surge.sh" 
        },
        {
            image: [bounty, bountyMain],
            title: "Star Wars Most Wanted",
            sub: "React, Node, and JavaScript",
            oneLine: "TO-DO LIST",
            description: "Basic database interaction for Creating, Reading, Updating, and Deleting a list of 'Star Wars' bounties. Simple example of Object Oriented Programming - the building blocks of complex websites.",
            link: "https://not-original-bounty-hunter.herokuapp.com" 
        },
        {
            image: [business, businessMain],
            title: "Business Time",
            sub: "HTML, CSS",
            oneLine: "BUSINESS WEBSITE",
            description: "Basic website for a non-existent business. Displays irrelevant content in hard coded HTML and CSS.",
            link: "http://nottherealbusinesstime.surge.sh" 
        },
        {
            image: [mario, marioMain],
            title: "Mario Pest Control",
            sub: "HTML, CSS, and JavaScript",
            oneLine: "BILL CALCULATOR",
            description: "Simple website calculator for getting the result of mario's services. Basic project with HTML and vanilla JavaScript",
            link: "http://nottherealmariopestcontrol.surge.sh" 
        },
    ]
    const { header2, projectSubheader } = animations
    const mappedProjects = projectsArr.map((projectObj, i) => <Project key={i} phoneSized={phoneSized} i={i + 1} id={`project${i + 1}`} trigger={animations[`project1`]} {...projectObj} />)
    return(
        <section id="devProjects" className="devProjects">
            <SectionHeaders 
                title={"Portfolio"} 
                id={"header2"} 
                isOn={header2} 
                headerClassName={"headerAnimationFromLeft"} 
                underScoreClassName={"underScoreAnimationFromLeft"}
            />
            <h3 
                id="projectSubheader" 
                className={projectSubheader ? "underScoreAnimationFromRight" : ""} 
                style={{ opacity: projectSubheader ? "1" : "0"}}
            >Click and Explore my most recent work!</h3>
            <div className="projects">
                {mappedProjects}
            </div>
        </section>
    )
}

export default DevProjects;