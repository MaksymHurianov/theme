import React, {useContext} from 'react';
import Switch from "./components/switch/Switch";
import {ThemeContext} from "./context/themeContext";
import './index.css'
import {ReactComponent as Logo} from "./assets/icons/github.svg"
import {ReactComponent as Linkedin} from "./assets/icons/linkedin.svg"
import {ReactComponent as Facebook} from "./assets/icons/facebook.svg"
import {ReactComponent as Twitter} from "./assets/icons/twitter.svg"
import styles from "./App.module.css";

export default function App() {

    const {isDark, setIsDark} = useContext(ThemeContext)

    return (
        <>
            <Switch checked={isDark} onChange={setIsDark}/>
            <h2 style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet</h2>
            <div className={styles.icons}>
            <Logo fill={isDark? "white": "dark"}/>
            <Linkedin fill={isDark? "white": "dark"}/>
            <Facebook fill={isDark? "white": "dark"}/>
            <Twitter fill={isDark? "white": "dark"}/>
            </div>
            <hr className={`${isDark? styles.dark : null}`}/>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </p>
        </>
    )
}








