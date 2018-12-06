import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../../assets/sass/navbar.scss';
import branding200 from '../../../images/branding200x200.svg';


class LoggedOutNavBarNew extends Component {
  shouldComponentUpdate() {
    return false
  }
  
  componentDidMount() {
    const Menu = (function() {
      let burger = document.querySelector('.burger');
      const menu = document.querySelector('.menu');
      const menuList = document.querySelector('.menu__list');
      const brand = document.querySelector('.menu__brand');
      const menuItems = document.querySelectorAll('.menu__item');
      const menuLinks = document.querySelectorAll('.menu__link');
      
      let active = false;
      
      let toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
          brand.classList.add('menu__brand--active');
          burger.classList.add('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
          brand.classList.remove('menu__brand--active');
          burger.classList.remove('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          
          active = false;
        }
      };
      
      let bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
        
        menuLinks.forEach(function(ml) {
          ml.addEventListener('click', toggleMenu, false);
        })
      };
      
      let init = function() {
        bindActions();
      };
      
      return {
        init: init
      };
      
    }());
    
    Menu.init();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent"></nav>
            <header className="header">
                <div className="burger">
                <div className="burger__patty"></div>
                <div className="burger__patty"></div>
                <div className="burger__patty"></div>
                </div>

                <nav className="menu">
                <div className="menu__brand">
                    <Link to=""><div className="logo"><img src={branding200} alt="sunset-space logo" className="image fit" /></div></Link>
                </div>
                <ul className="menu__list">
                    <li className="menu__item"><Link to="/plans" className="menu__link">Plans</Link></li>
                    <li className="menu__item"><Link to="/about" className="menu__link">About</Link></li>
                    <li className="menu__item">
                    <Link to="#" target="_blank" className="menu__link menu__link--social"><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="menu__item">
                    <Link to="#" target="_blank" className="menu__link menu__link--social">
                    <i className="fab fa-linkedin"></i></Link>
                    </li>
                </ul>
                </nav>
                    
                    <NavLink to="/signin" className="button small special image right mr-2 mt-1">Login</NavLink>
                    <NavLink to="/register" className="button small image right mr-1 mt-1">Sign Up</NavLink>
                   
            </header>
    </div>
    );
  }
}

export default LoggedOutNavBarNew;
