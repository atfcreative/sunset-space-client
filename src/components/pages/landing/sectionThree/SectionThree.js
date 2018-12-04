import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionThree extends Component {
    state = {  }
    render() { 
        return (
            <section id="three" className="wrapper style1 special">
                <div className="inner">
                    <header className="major alt style2">
                        <h2>Membership</h2>
                        <p>Our options of memebership...</p>
                    </header>
                    <section className="features">
                        <section>
                            <span className="fas fa-feather-alt fa-3x style3"></span>
                            <h4>Free!</h4>
                            <p>Join for FREE! Access to a free tours, monthly newsletter and meet ups.</p>
                            <h5><strong>Free stuff</strong></h5>
                                <ul className="actions">
                                    <li><Link to="#" className="button small fit special">Learn More</Link></li>
                                </ul>
                        </section>
                            <section>
                            <span className="fas fa-seedling fa-3x style4"></span>
                                <h4>BASIC</h4>
                                <p>The price is right. Great for travelers, soccer moms and techies alike.</p>
                                <h5><strong>5 days/mo  ACCESS</strong></h5>
                                <ul className="actions">
                                    <li><Link to="#" className="button small alt">Learn More</Link></li>
                                </ul>
                            </section>
                            <section>
                                <span className="far fa-lightbulb fa-3x style2"></span>
                                <h4>LEGIT</h4>
                                <p>Just can't be efficient enough at home? Let us help you assist your work flow.</p>
                                <h5><strong>15 days/mo  ACCESS</strong></h5>
                                <ul className="actions">
                                    <li><Link to="#" className="button small">Learn More</Link></li>
                                </ul>
                            </section>
                            <section>
                                <span className="far fa-comments fa-3x style3"></span>
                                <h4>DOPE</h4>
                                <p>This plan is DOPE. Streamline your workflow and maximize your efficiency.</p>
                                <h5><strong>UNLIMITED ACCESS</strong></h5>
                                <ul className="actions">
                                    <li><Link to="#" className="button small">Learn More</Link></li>
                                </ul>
                            </section>
                    </section>
                </div>
            </section>
          );
    }
}
 
export default SectionThree;