import React, { useState } from "react"

const ContactForm = ({ questions, state, handleSubmit, className, isOn }) => {
    const [info, setInfo] = useState(state)
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    const preSubmit = e => {
        e.preventDefault()
        handleSubmit(info)
        setInfo(state)
    }

    const questionsMapped = questions.map((q, i) => {
        if (q.tag === "input"){
            return(
                <input key={i} type="text" name={q.objTag} value={info[q.objTag]} onChange={handleChange} required={true} placeholder={`${q.question}`} />
            )  
        } else if (q.tag === "textarea") {
            return(
                <textarea key={i} name={q.objTag} value={info[q.objTag]} onChange={handleChange} required={q.objTag === "other" ? false : true} placeholder={`${q.question}`}/>
            ) 
        } else {
            return null
        }
    })
    return(
        <form id="contactForm" className={`${className} ${isOn ? "formAppear" : ""}`} style={{ opacity: isOn ? "1" : "0"}} onSubmit={preSubmit}>
            {questionsMapped}
            <button>Submit</button>
        </form>
    )
}

export default ContactForm;