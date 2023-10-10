import { useState } from 'react'
import Logo from '../../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [isHomeActive, setIsHomeActive] = useState(false);
    const [isAboutActive, setIsAboutActive] = useState(false);

    const handleHomeClick = () => {
        setIsHomeActive(!isHomeActive);
        setIsAboutActive(false);
    }

    const handleAboutClick = () => {
        setIsAboutActive(!isAboutActive);
        setIsHomeActive(false);
    }
     
    return (
        <div className='navbar'>
            <img src={Logo} alt="logo kasa"/>
            <ul className='navbar_button'>
                <NavLink className={`navLink ${isHomeActive ? "activeUnderline" : ""}`} to="/"  onClick={handleHomeClick}>Acceuil</NavLink>
                <NavLink className={`navLink ${isAboutActive ? "activeAboutUnderline" : ""}`} to="/a-propos"  onClick={handleAboutClick}>A propos</NavLink>
            </ul>
        </div>
    )
}

