import React from "react";
import '../Style/Components/navbar.scss'
import { Link } from 'react-router-dom';

function Navbar () {
    // page de  navbar avec les components NavbarVer et Link => pour faire la redirectin vers les autres pages
        return (
            <>
                <div className='navbar'>
                    <div className="navbar-container">
                      <img src="/images/logo.png" alt="Logo"/>
                    </div>
                    <div className="items">
                        <ul className="nav-itmes">
                            <li> <Link to="/" className="nav-item"> Accueil </Link> </li>
                            <li> <Link to="/" className="nav-item"> Profil </Link>  </li>
                            <li> <Link to="/" className="nav-item"> Réglage </Link>  </li>
                            <li> <Link to="/" className="nav-item"> Communauté </Link> </li>
                        </ul>
                    </div>
                </div>
            </>
        );
}

export default Navbar;
