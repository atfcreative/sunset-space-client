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
                <img className="first image " alt="" src={logo} />
            </div>
            
            <div>
                <img className="second image" alt="" src={type} />
            </div>
            <br/>
                <h5>A co-working and community space</h5><br/>
                
            </header>
            

            <ul className="actions">
                <h6>Help Us make Sunset Space Better for YOU!</h6>
                <li><Link to="#" className="button">Take the Quick Survey</Link></li>
            </ul>

            <ul className="actions">
                <li><i className="fas fa-chevron-circle-down fa-3x" style={{color: "#ccc", opacity:"0.4"}}></i></li>
            </ul>
        </section>
        
        );
    }
}
 
export default Banner;