import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import pic3 from './pic03.jpg';
import pic4 from './pic04.jpg';

class AboutDetails extends Component {
    
    render() { 
        return (
            <section id="one" className="wrapper style5 special alt">
                <div className="inner">
                    <header className="major">
                        <h3>MEET THE TEAM</h3>
                        <p>We co-founded Sunset Space out of neccesity and passion.</p>
                    </header>
                <section className="spotlights">
                    <section>
                        <span className="image"><img src={pic3} alt="" /></span>
                        <h4>Andrew Foster</h4>
                        <p>Classic Silicon Valley wunderkind who coded his way to the top. The hoodie-wearing, college-dropout likes donuts and magnets.</p>
                        <ul className="actions">
                        </ul>
                    </section>
                    <section>
                        <span className="image"><img src={pic4} alt="" /></span>
                        <h4>Lindsey Hoell</h4>
                        <p>Lindsey famously advocated for women to take charge in the workplace in her 2013 book Lean In. Current title: Bossy Pants at Sunset Space.</p>
                        <ul className="actions">
                        </ul>
                    </section>
                </section>
                </div>
            </section>
          );
    }
}
 
export default AboutDetails;