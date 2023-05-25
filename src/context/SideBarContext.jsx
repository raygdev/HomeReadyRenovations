import React, { createContext, useState } from "react"

const Context = createContext()
export default function SideBarContext ({ children }) {
    const [sideBarValue, setSideBarValue] = useState("Home")
    return (
        <>
        <Context.Provider value={{sideBarValue, setSideBarValue}}>
            {children}
        </Context.Provider>
        </>
    )
}

export { Context }