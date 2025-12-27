import React from 'react';
import Hero from "./Hero";
import Step from './Step';
import Accounts from './Accounts';
import Invest from './Invest';
import Pricing from './Pricing';

const SignPage = () => {
  return (
    <>
      <Hero />
      <Invest />
      <Step />
      <Pricing />
      <Accounts />
    </>
  );
};

export default SignPage;