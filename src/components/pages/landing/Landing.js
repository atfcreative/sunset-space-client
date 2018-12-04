import React, { Component } from 'react';
import Banner from './banner/Banner';
import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './sectionTwo/SectionTwo';
import SectionThree from './sectionThree/SectionThree';
import SectionFour from './sectionFour/SectionFour';
import SectionFive from './sectionFive/SectionFive';


class Landing extends Component {
    render() { 
        return (
            <div>
                <Banner />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
            </div>
          );
    }
}
 
export default Landing;