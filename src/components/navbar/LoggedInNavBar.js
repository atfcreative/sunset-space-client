import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoggedOutNavBar = (props) => { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link className="navbar-brand" to="/">Sunset Space</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/plans" key={toString()}>Plans</NavLink>
                        </li>
                        
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/about" key={toString()}>About</NavLink>
                        </li>
                        
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/profile" key={toString()}>Profile</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/signin" onClick={props.handleLogout} key={toString()}>Logout<span className="sr-only">(current)</span></NavLink>
                        </li>
                     </ul>
                </div>
            </nav>
        );
    }

 
export default LoggedOutNavBar;