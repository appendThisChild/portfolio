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

const DevTools = ({animations}) => {
    const { devTools1, devTools2, devTools3, devTools4, devTools5, devTools6, devTools7, devTools8, devTools9, devTools10, devTools11 } = animations
    // console.log(animations)
    return(
        <div className="tech">
            <div>
                <h1>Technologies</h1>
            </div>
            <div>
                <img id="devTools1" src={html} alt="" className={devTools1 ? "imageFlip" : ""} style={{ opacity: devTools1 ? "1" : "0"}}/>
                <img id="devTools2" src={css} alt="" className={devTools2 ? "imageFlip" : ""} style={{ opacity: devTools2 ? "1" : "0"}}/>
                <img id="devTools3" src={javaScript} alt="" className={devTools3 ? "imageFlip" : ""} style={{ opacity: devTools3 ? "1" : "0"}}/>
                <img id="devTools4" src={jQuery} alt="" className={devTools4 ? "imageFlip" : ""} style={{ opacity: devTools4 ? "1" : "0"}}/>
                <img id="devTools5" src={reactImage} alt="" className={devTools5 ? "imageFlip" : ""} style={{ opacity: devTools5 ? "1" : "0"}}/>
                <img id="devTools6" src={node} alt="" className={devTools6 ? "imageFlip" : ""} style={{ opacity: devTools6 ? "1" : "0"}}/>
                <img id="devTools7" src={mongoDB} alt="" className={devTools7 ? "imageFlip" : ""} style={{ opacity: devTools7 ? "1" : "0"}}/>
                <img id="devTools8" src={gitHub} alt="" className={devTools8 ? "imageFlip" : ""} style={{ opacity: devTools8 ? "1" : "0"}}/>
                <img id="devTools9" src={gcp} alt="" className={devTools9 ? "imageFlip" : ""} style={{ opacity: devTools9 ? "1" : "0"}}/>
                <img id="devTools10" src={aws} alt="" className={devTools10 ? "imageFlip" : ""} style={{ opacity: devTools10 ? "1" : "0"}}/>
                <img id="devTools11" src={stripe} alt="" className={devTools11 ? "imageFlip" : ""} style={{ opacity: devTools11 ? "1" : "0"}}/>
            </div>
        </div>
    )
}

export default DevTools;