import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SectionTwo extends Component {
    state = {  }
    render() { 
        return (
            <section id="two" className="wrapper style1 special">
                <div className="inner">
                    <header className="major">
                        <h2>Our Services</h2>
                        <p>We offer a lifestyle inspired work environment...</p>
                    </header>
                    <hr />
                <section className="split">
                    <article>
                        <h4>Amenities</h4>
                        <p>Printers, 3 private offices, Andytown coffee available, coffee and restaurants on same block, surf lockers, bike racks, Hot outdoor showers, telephone booths for privacy, lounge area.</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                        </article>
                        <article>
                        <h4>Events Space</h4>
                        <p>Fundraisers, kickstarter launches, non-profit meet-ups. DIY workshops - creating household items in bulk help eliminate single use plastics. Art classes, Wine and painting night.</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </article>
                </section>
                </div>
            </section>
          );
    }
}
 
export default SectionTwo;