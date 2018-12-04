import React, { Component } from 'react';
import img1 from './images/slide1.jpg';
import img2 from './images/slide2.jpg';
import img3 from './images/slide3.jpg';
import AboutDetails from './aboutDetails/AboutDetails';
import SectionFour from '../landing/sectionFour/SectionFour';

class About extends Component {
    render() { 
        return (
           
          <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="first-slide" src={img1} alt="First slide" />
                  <div className="container">
                    <div className="carousel-caption text-left">
                      <h1>Creativity meets Productivity...</h1>
                      <p>The space is well lit with a modern city design motif.</p>
                      <p className="button special" role="button">Learn More!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="second-slide" src={img2} alt="Second slide" />
                  <div className="container">
                    <div className="carousel-caption text-left">
                      <h1>We like to think like bad cliches.</h1>
                      <p>"You're only as strong as the drinks you mix, the tables you dance on, and the friends you party with."</p>
                      <p className="button special" role="button">Learn more!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="third-slide" src={img3} alt="Third slide" />
                  <div className="container">
                    <div className="carousel-caption text-left">
                      <h1>“Every cloud has a silver lining.”</h1>
                      <p>Okay, now thats two too many bad cliches for one carousel! Enjoy and be safe.</p> 
                      <p className="button special" role="button">Learn more!</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </p>
              <p className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </p>
            </div>
          <AboutDetails />
          <SectionFour />
          </div>

           
            
        
      
        );
    }
}
 
export default About;