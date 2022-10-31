import React, {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";

type themeProviderPropsType = {
    children: React.ReactNode
}

type contextType = {
    isDark: boolean
    setIsDark: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<contextType>({isDark: false, setIsDark: ()=>{}})

const ThemeProvider: React.FC<themeProviderPropsType> = ({children}) => {

    const isDarkTheme = window?.matchMedia('prefers-color-scheme: dark').matches

    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'true' || isDarkTheme)

    useEffect(()=>{
        localStorage.setItem('theme', isDark.toString())
    },[isDark])

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
