import ErrorLogo from '../assets/404.png'
import {NavLink} from 'react-router-dom'

export default function Error() {
    return (
        <div className='errorPage'>
            <img src={ErrorLogo} alt="Erreur 404"/>
            <h1 className='errorHeadline'>Oups! La page que vous demandez n'existe pas. </h1>
            <NavLink className="navLink" to="/">Retourner sur la page d'acceuil</NavLink>
        </div>
    )
} 