import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mern from '../../../../images/mern.jpg';

class SectionFive extends Component {
    render() { 
        return (
            <section id="five" className="wrapper style1 special alt">
				<div className="inner">
					<h4>About This Project</h4>
					<img src={mern} alt="mern stack" />
					<p>Like what youe see?! This project was built utilizing the MERN stack, which is a collection of JavaScript based technologies — MongoDB, Express.js, ReactJS, and Node.js</p>
					<ul className="actions">
						<li><Link to="https://atfcreative.com" className="button">The Developers Portfolio</Link></li>
					</ul>
				</div>
			</section>
          );
    }
}
 
export default SectionFive;