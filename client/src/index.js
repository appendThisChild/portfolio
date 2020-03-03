import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./styles.css"

import { NavToggleProvider } from "./context/NavToggleProvider.js"
import { ProjectProvider } from "./context/ProjectProvider.js"

ReactDOM.render(
    <NavToggleProvider>
        <ProjectProvider>
            <App />
        </ProjectProvider>
    </NavToggleProvider>
,
document.getElementById("root"))