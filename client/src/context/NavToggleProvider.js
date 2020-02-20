import React, { useContext, useState } from 'react'

const NavToggleContext = React.createContext()

const NavToggleProvider = props => {
    const [navOpen, setNavOpen] = useState(false)

    return(
        <NavToggleContext.Provider 
            value={{
                navOpen,
                setNavOpen
            }}
            {...props}
        />
    )
}

const useNavToggle = () => {
    const context = useContext(NavToggleContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { NavToggleProvider, useNavToggle }