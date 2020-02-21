import React, { useEffect, useState } from 'react'

import { useNavToggle } from "./context/NavToggleProvider.js"

import Header from './components/Header.js'
import Nav from "./components/Nav.js"
import About from './components/About.js'
import DevProjects from './components/DevProjects.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'


const App = () => {
    const [offset, setOffset] = useState([window.scrollX, window.scrollY]);
    const { navOpen, setNavOpen } = useNavToggle()
    const [whereAreWe, setWhereAreWe] = useState([{ i: 0 }])
    const [animationActivate, setAnimationActivate] = useState({})

    const elementDetails = id => document.getElementById(id).getBoundingClientRect();

    const screenIsOver = (details) => {
        const { top, height } = details
        const navHeight = elementDetails("nav").height
        return window.innerHeight - top - height > 0 && top - navHeight > 0
    }

    const backgroundScroll = () => {
        const sectionArr = ["home", "about", "devProjects", "contact"]
        const mappedSectionArr = sectionArr.map((id, i) => ({ i, position: elementDetails(id).top }))
        setWhereAreWe(mappedSectionArr)
        const  animationArr = []
        for (let i = 1; i < 12; i++){
            animationArr.push(`devTools${i}`)
            if (i < 4) animationArr.push(`header${i}`);
            if (i < 2) animationArr.push("contactForm", "contactSubheader")
        }
        let animationObj = {}
        animationArr.forEach((id) => animationObj = {...animationObj, [id]: screenIsOver(elementDetails(id))})
        setAnimationActivate(prev => {
            const prevArr = Object.entries(prev)
            prevArr.forEach((arr) => { if (arr[1]) animationObj = {...animationObj, [arr[0]]: arr[1]}; })
            return animationObj
        })
        setOffset([window.scrollX, window.scrollY])
    };

    const scrollToSection = section => {
        const { top } = elementDetails(section)
        const { height } = elementDetails("nav")
        window.scrollTo({
            top: top + offset[1] - (section === "home" ? 0 : height),
            behavior: 'smooth'
        })
    }

    const closeNav = () => {
        if (navOpen) setNavOpen(false);
    }
   
    useEffect(() => {
        window.addEventListener('scroll', backgroundScroll)
        return () => window.removeEventListener('scroll', backgroundScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div onClick={closeNav}>
            <Header offset={offset} scrollToSection={scrollToSection}/>
            <Nav where={whereAreWe} offset={offset} scrollToSection={scrollToSection}/>
            <About animations={animationActivate} />
            <DevProjects animations={animationActivate}/>
            <div className="contactBorder" style={
                { 
                    borderLeft: `${window.innerWidth / 2 * .75}pt solid rgb(16, 101, 124)`, 
                    borderRight: `${window.innerWidth / 2 * .75}pt solid rgb(16, 101, 124)`
                }
            }></div>
            <Contact animations={animationActivate}/>
            <Footer scrollToSection={scrollToSection}/>
        </div>
    )
}

export default App;