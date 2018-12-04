import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './pic01.jpg';
import pic2 from './pic02.jpg';

class SectionOne extends Component {
    
    render() { 
        return (
            <section id="one" className="wrapper style2 special">
                <div className="inner">
                    <header className="major">
                        <h3>Ocean Beach, San Francisco</h3>
                        <p>Convenient, friendly, positive-vibed work and event space in the outer sunset.</p>
                    </header>
                <section className="spotlights">
                    <section>
                        <span className="image"><img src={pic1} alt="" /></span>
                        <h4>Work From Home, WITH US!</h4>
                        <p>Work remotely from a positively-vibed coworking space with other locals committed to bettering the community. Situated close to the beach for a lunchtime surf or coastal jog. </p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </section>
                    <section>
                        <span className="image"><img src={pic2} alt="" /></span>
                        <h4>Evening Community Events</h4>
                        <p>Join us or host an evening community or coworking event, such as Surfrider meetings, holiday wreath-making class, or DIY workshops designed to reduce plastic waste.</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </section>
                </section>
                </div>
            </section>
          );
    }
}
 
export default SectionOne;