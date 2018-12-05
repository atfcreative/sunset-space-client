import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import brandingHorzSm from '../../../images/branding-horz-sm.svg';

const LoggedOutNavBar = (props) => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link className="navbar-brand" to="/"><img src={brandingHorzSm} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/plans" key={toString()} style={{ textDecoration:"none", color: "#5eadbb" }}>Plans</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" key={toString()} style={{ textDecoration:"none", color: "#5eadbb" }}>About</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile" key={toString()} style={{ textDecoration:"none", color: "#777" }}><i class="fas fa-user-circle"></i>&nbsp;Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link button small" to="/signin" onClick={props.handleLogout} key={toString()} style={{ textDecoration:"none" }}>Logout<span className="sr-only">(current)</span></NavLink>
                    </li>
                    </ul>
            </div>
        </nav>
    );
}

 
export default LoggedOutNavBar;