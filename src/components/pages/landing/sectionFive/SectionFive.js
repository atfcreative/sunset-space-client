import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionFive extends Component {
    render() { 
        return (
            <section id="five" className="wrapper style1 special alt">
				<div className="inner">
					<h4>Magna feugiat lorem ipsum?</h4>
					<p>Nulla imperdiet, lorem in pretium sed aliquet, lacus dui magna tristique lacus, vel convallis justo lectus in augue. Tempus  imperdiet et elementum. Nulla imperdiet, lorem in pretium sed aliquet, lacus dui magna tristique lacus.</p>
					<ul className="actions">
						<li><Link to="#" className="button">Learn More</Link></li>
					</ul>
				</div>
			</section>
          );
    }
}
 
export default SectionFive;