import React, {useContext} from "react";
import styles from "./Layout.module.css";
import {ThemeContext} from "../../context/themeContext";

type layoutPropsType = {
    children: React.ReactNode
}

const Layout: React.FC<layoutPropsType> = ({children}) => {

    const {isDark} = useContext(ThemeContext)

    return <div className={`${styles.layout}  ${isDark? styles.dark : null}`}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
}

export default Layout
