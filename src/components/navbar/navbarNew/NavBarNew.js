import React from 'react';
import LoggedOutNavBarNew from './LoggedOutNavBarNew';
import LoggedInNavBarNew from './LoggedInNavBarNew';

const NavBar = (props) => {
    // console.log(props);
    let navbar;
    if (props.isAuthenticated) {
        navbar = <LoggedInNavBarNew handleLogout={props.handleLogout} key={toString()}/>
    } else {
        navbar = <LoggedOutNavBarNew key={toString()}/>
    }
    return (
        [navbar]
    );
}

 
export default NavBar;