import React from "react";

type layoutPropsType = {
    children: React.ReactNode
}

const Layout: React.FC<layoutPropsType> = ({children}) => {
    return <div className={"layout"}>
        {children}
    </div>
}

export default Layout
