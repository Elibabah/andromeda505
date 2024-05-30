import { useEffect, useMemo } from "react"

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from "../hooks/useTheme"

export const Switch = () => {

    const [theme, handleChange] = useTheme('dark')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);


    return (
        <div className="container-switch">
            <label className="switch">
            <input type="checkbox" onChange={ handleChange } checked={ theme === 'dark' }/>
            <checkbox> 
                { theme === 'dark' ? <DarkModeIcon/> : <LightModeOutlinedIcon/> }
            </checkbox>
            </label>
        </div>
    )
}