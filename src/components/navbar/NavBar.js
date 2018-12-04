import React from 'react';
import LoggedOutNavBar from './LoggedOutNavBar';
import LoggedInNavBar from './LoggedInNavBar';

const NavBar = (props) => {
    // console.log(props);
    let navbar;
    if (props.isAuthenticated) {
        navbar = <LoggedInNavBar handleLogout={props.handleLogout} key={toString()}/>
    }else{
        navbar = <LoggedOutNavBar key={toString()}/>
    }
    return (
            [navbar]
        );
    }

 
export default NavBar;