// rapper for the entire home  section
import React from 'react'

import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Trust from "./Trust";
import OpenAccount from "../OpenAccount";
import Navbar from '../Navbar';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <>
  
      <Hero />
      <Trust />
      <Pricing />
      <Education />
      <OpenAccount />
     
    </>
  );
};


export default HomePage
