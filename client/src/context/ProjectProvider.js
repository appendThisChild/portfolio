import React, { useContext, useState } from 'react'
// import axios from "axios"

const ProjectContext = React.createContext()

const ProjectProvider = props => {
    const absent = {
        image: [],
        title: "",
        oneLine: "",
        description: "",
        link: "" 
    }
    const [viewing, setViewing] = useState(false)
    const [project, setProject] = useState(absent)

    const handleFullDisplay = project => {
        setViewing(true)
        setProject(project)
    }
    const handleNormalDisplay = () => {
        setViewing(false)
        setProject(absent)
    }

    return(
        <ProjectContext.Provider 
            value={{ 
                viewing,
                project,
                handleFullDisplay,
                handleNormalDisplay
            }}
            {...props}
        />
    )
}

const useProject = () => {
    const context = useContext(ProjectContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { ProjectProvider, useProject }