import React from 'react'
import AgriSolutions from './AboutCommit'
import CoreValues from './AboutCoreValues'
import ProfessionalsSection from './AProfessionalsSection'
import WhoWeAreHero from './AboutHero'
import Navbar from './AboutNav'
import Footer from './AboutFooter'
import OurVision from './OurVision'



const About = () => {
  return (
    <div>
      <Navbar />
      <WhoWeAreHero />
      <AgriSolutions />
      <OurVision/>
      <CoreValues />
      <ProfessionalsSection />
      <Footer />
    </div>
  );
};

export default About;
