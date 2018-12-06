import React, { Component } from 'react';
import logo from '../../../../images/logo.svg';
import type from '../../../../images/type.svg';
import { Link } from 'react-router-dom';
import './banner.css';

class Banner extends Component {
    render() { 
        return (
            
        <section id="banner">
            <header className="major">
            <div>
                <img class="first image " alt="" src={logo} />
            </div>
            
            <div>
                <img class="second image" alt="" src={type} />
            </div>
            <br/>
                <h5>A co-working and community space</h5>
                
            </header>
            <ul className="actions">
                <li><Link to="#one" className="button">Proceed</Link></li>
            </ul>
        </section>
        );
    }
}
 
export default Banner;