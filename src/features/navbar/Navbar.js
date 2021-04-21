import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"

// Styles
import './navbar.scss';

// Reducers
import { selectToken } from "../login/loginSlice";

const Navbar = () => {
    const token = useSelector(selectToken);

    return (
        <nav className="navbar">
            <h1><Link to="/">Réseau Social</Link></h1>
            {/* if connected */}
            { token && (
                <ul>
                    <li><NavLink exact to="/">Accueil</NavLink></li>
                    <li><NavLink exact to="/me">Ma page</NavLink></li>
                    <li><NavLink exact to="/friends">Amis</NavLink></li>
                    <li><NavLink exact to="/account">Mon compte</NavLink></li>
                </ul>
            )}
            {/* if not connected */}
            { !token && (
                <ul>
                    <li><NavLink to="/login">Connexion</NavLink></li>
                    <li><NavLink to="/register">Inscription</NavLink></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;