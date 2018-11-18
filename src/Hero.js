import React from 'react';

const Hero = () => {
  return (
    <div className="hero row" >
      <div className="col-10 offset-1">
        <img src='images/phishlogo.png' className="logoImage" alt="Logo"/>
        <h1> Studio Album Quiz </h1>
        <p>Select the track that is on the Album</p>
      </div>
    </div>
  );
}

export default Hero;
