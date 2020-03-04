import React from 'react'
import axios from 'axios'

import SectionHeaders from './SectionHeaders';
import ContactForm from "./ContactForm.js"

const Contact = ({ animations, phoneSized }) => {
    const { header3, contactForm, contactSubheader } = animations

    const handleSubmit = message => {
        axios.post("/contactMessage", message)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }
    return(
        <section id="contact" className="contact">
            <SectionHeaders 
                title={"Contact"} 
                id={"header3"} 
                isOn={header3} 
                headerClassName={"headerAnimationFromRight"} 
                underScoreClassName={"underScoreAnimationFromLeft"}
            />
            <h3 
                id="contactSubheader" 
                className={contactSubheader ? "underScoreAnimationFromRight" : ""} 
                style={{ opacity: contactSubheader ? "1" : "0"}}
            >Have any questions? - Want to know more?</h3>
            <ContactForm 
                className="contactForm"
                questions={[
                {
                    question: "Name",
                    tag: "input",
                    objTag: "name"
                },
                {
                    question: "Enter email",
                    tag: "input",
                    objTag: "email"
                },
                {
                    question: "Your Message",
                    tag: "textarea",
                    objTag: "message"
                }
                ]}
                state={
                    {
                        name: "",
                        email: "",
                        message: ""
                    }
                }
                isOn={contactForm}
                phoneSized={phoneSized}
                handleSubmit={handleSubmit} 
            /> 
        </section>
    )
}

export default Contact;