import React, {Dispatch, SetStateAction} from 'react'
import styles from './Switch.module.css'

type switchPropsType = {
    checked: boolean
    onChange: Dispatch<SetStateAction<boolean>>
}

const Switch = ({checked, onChange}: switchPropsType) => {
    return <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={()=>onChange(!checked)}/>
        <span className={styles.slider}/>
    </label>
}

export default Switch
