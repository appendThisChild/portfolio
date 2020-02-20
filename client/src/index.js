import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./styles.css"

import { NavToggleProvider } from "./context/NavToggleProvider.js"

ReactDOM.render(
    <NavToggleProvider>
        <App />
    </NavToggleProvider>
,
document.getElementById("root"))