import React, { useEffect, useState } from 'react'

import { useNavToggle } from "./context/NavToggleProvider.js"

import Header from './components/Header.js'
import Nav from "./components/Nav.js"
import About from './components/About.js'
import DevProjects from './components/DevProjects.js'
import Contact from './components/Contact.js'


const App = () => {
    const [offset, setOffset] = useState([window.scrollX, window.scrollY]);
    const { navOpen, setNavOpen } = useNavToggle()
    const [whereAreWe, setWhereAreWe] = useState([{ i: 0 }])
    const [animationActivate, setAnimationActivate] = useState({})

    const screenIsOver = (details) => {
        const { top, height } = details
        const navHeight = document.getElementById("nav").getBoundingClientRect().height
        return window.innerHeight - top - height > 0 && top - navHeight > 0
    }

    const backgroundScroll = () => {
        const homeTop = document.getElementById("home").getBoundingClientRect().top
        const aboutTop = document.getElementById("about").getBoundingClientRect().top
        const devProjectsTop = document.getElementById("devProjects").getBoundingClientRect().top
        const contactTop = document.getElementById("contact").getBoundingClientRect().top
        setWhereAreWe([ 
            { i: 0, position: homeTop },
            { i: 1, position: aboutTop },
            { i: 2, position: devProjectsTop },
            { i: 3, position: contactTop }
        ])
        setAnimationActivate(prev => ({
            devTools1: prev.devTools1 ? true : screenIsOver(document.getElementById("devTools1").getBoundingClientRect()),
            devTools2: prev.devTools2 ? true : screenIsOver(document.getElementById("devTools2").getBoundingClientRect()),
            devTools3: prev.devTools3 ? true : screenIsOver(document.getElementById("devTools3").getBoundingClientRect()),
            devTools4: prev.devTools4 ? true : screenIsOver(document.getElementById("devTools4").getBoundingClientRect()),
            devTools5: prev.devTools5 ? true : screenIsOver(document.getElementById("devTools5").getBoundingClientRect()),
            devTools6: prev.devTools6 ? true : screenIsOver(document.getElementById("devTools6").getBoundingClientRect()),
            devTools7: prev.devTools7 ? true : screenIsOver(document.getElementById("devTools7").getBoundingClientRect()),
            devTools8: prev.devTools8 ? true : screenIsOver(document.getElementById("devTools8").getBoundingClientRect()),
            devTools9: prev.devTools9 ? true : screenIsOver(document.getElementById("devTools9").getBoundingClientRect()),
            devTools10: prev.devTools10 ? true : screenIsOver(document.getElementById("devTools10").getBoundingClientRect()),
            devTools11: prev.devTools11 ? true : screenIsOver(document.getElementById("devTools11").getBoundingClientRect())
        }))


        setOffset([window.scrollX, window.scrollY])
    };

    const scrollToSection = section => {
        const { top } = document.getElementById(section).getBoundingClientRect()
        const { height } = document.getElementById("nav").getBoundingClientRect()
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
            <DevProjects />
            <Contact />
        </div>
    )
}

export default App;