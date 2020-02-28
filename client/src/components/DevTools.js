import React from "react"

import html from "../images/512px-HTML5_logo_and_wordmark.svg.png"
import node from "../images/590px-Node.js_logo.svg.png"
import jQuery from "../images/427165_preview.png"
import aws from "../images/aws-png-3.png"
import gitHub from "../images/github_PNG20.png"
import gcp from "../images/google-cloud-platform-logo.png"
import css from "../images/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
import javaScript from "../images/JavaScript-logo.png"
import mongoDB from "../images/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"
import reactImage from "../images/React-logo-1.png"
import stripe from "../images/Stripe_logo,_revised_2016.png"
import LogoImage from "./LogoImage"

const DevTools = ({ animations }) => {
    const logoArr = [ html, css, javaScript, jQuery, reactImage, node, mongoDB, gitHub, gcp, aws, stripe ]
    const mappedLogos = logoArr.map((image, i) => <LogoImage key={i} source={image} selector={`devTools${i + 1}`} isOn={animations}/>)
    return(
        <div className="tech">
            <div>
                <h1>Technologies</h1>
            </div>
            {/* 
                make this header like the section headers
                ...
                
            */}
            <div>{mappedLogos}</div>
        </div>
    )
}

export default DevTools;