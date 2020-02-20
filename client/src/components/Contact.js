import React from 'react'

import SectionHeaders from './SectionHeaders';
import ContactForm from "./ContactForm.js"

const Contact = ({ animations }) => {
    const { header3, contactForm } = animations

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
            {/* message here, call to action */}



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