import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class SectionFour extends Component {
    render() { 
        return (
            <section id="four" className="wrapper style2 special-alt">
                <div className="inner split">
                    <section>
                        <header className="major">
                        <h2>Contact Us</h2>
                        </header>
                        <p>Reach out, we're more than happy to answer any question you may have about Sunset Space.</p>
                    </section>
                    <form method="post" action="#">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <ul className="actions">
                        <li><Link to="#" className="button">Send Message</Link></li>
                        </ul>
                    </form>
                </div>
            </section>
          );
    }
}
 
export default SectionFour;