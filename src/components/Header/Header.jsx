import Logo from '../../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='navbar'>
            <img src={Logo} alt="logo kasa"/>
            <ul className='navbar_button'>
                <NavLink className="navLink" to="/">Acceuil</NavLink>
                <NavLink className="navLink" to="/a-propos">A propos</NavLink>
            </ul>
        </div>
    )
} 

