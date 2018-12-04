import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <footer id="footer">
				<ul className="alt-icons">
					<li><i className="fab fa-instagram"></i><span className="label"></span></li>
					<li><i className="fab fa-facebook"></i><span className="label"></span></li>
					<li><i className="fab fa-linkedin"></i><span className="label"></span></li>
					<li><i className="fab fa-github"></i><span className="label"></span></li>
					<li><i className="fas fa-mobile"></i><span className="label"></span></li>
					<li><i className="far fa-envelope"></i><span className="label"></span></li>
				</ul>
				<ul className="menu">
					<li>Terms of Use</li>
					<li>Privacy Policy</li>
					<li>Contact Us</li>
				</ul>
				<p className="copyright">
					&copy; Sunset-Space 2018
				</p>
			</footer>
        );
    }
}
 
export default Footer;