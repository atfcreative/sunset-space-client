import React, { Component } from 'react';
import branding from './branding.svg';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() { 
        return (
            
        <section id="banner">
            <header className="major">
                <img src={branding} alt="" className="image" /><br/>
                <h5>A co-working and community space</h5>
                
            </header>
            <ul className="actions">
                <li><Link to="#one" className="button scrolly">Proceed</Link></li>
            </ul>
        </section>
        );
    }
}
 
export default Banner;