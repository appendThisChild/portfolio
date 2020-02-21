import React from 'react'

import SectionHeaders from './SectionHeaders';
import ContactForm from "./ContactForm.js"

const Contact = ({ animations }) => {
    const { header3, contactForm, contactSubheader } = animations

    const handleSubmit = message => {
        console.log(message)
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
                handleSubmit={handleSubmit} 
            /> 
        </section>
    )
}

export default Contact;