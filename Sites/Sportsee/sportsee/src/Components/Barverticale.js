import React  from 'react';
import '../Style/Components/Barverticale.scss'
import {Link} from "react-router-dom";

function NavbarVer () {

        return (
            <>
                <nav className="bar-Verticale">
                    <ul className='bars-vs'>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon.png"/></Link></li>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon (1).png"/></Link></li>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon (2).png"/></Link></li>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon (3).png"/></Link></li>

                    </ul>
                    <div className="copirygyt">
                        <p>Copirygt, SportSee 2022</p>
                    </div>
                </nav>
            </>
        );

}

export default NavbarVer;
