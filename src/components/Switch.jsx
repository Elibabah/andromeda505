import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useEffect } from "react"
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
            <checkbox style={{cursor: "pointer"}}> 
                { theme === 'dark' ? <DarkModeIcon style={{ fontSize: 30 }}/> : <LightModeOutlinedIcon style={{ fontSize: 30 }}/> }
            </checkbox>
            </label>
        </div>
    )
}