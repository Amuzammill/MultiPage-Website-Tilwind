import React from "react";

const Hero = () => {
  return (
    <div 
      className="hero bg-cover bg-center bg-no-repeat text-blue-700 py-24"
      style={{
        backgroundImage: "url('/images/pexels-morningtrain-18105.jpg')", // Light mode image
      }}
    >
      <div className="hero-container max-w-screen-lg mx-auto px-6">
        <div className="hero-content text-center">
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to Xpert Technologies
          </h1>
          <h4 className="hero-subtitle text-lg sm:text-xl mb-6">
            Innovative insights for a Technologies


                
          </h4>
          <p className="hero-description text-sm sm:text-base md:text-lg mb-8">
            Deals in:All kind of New/Used Computers,Laptop,Printers & CCTV Cameras.
          </p>
          <button className="hero-button bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>  
  );
};

export default Hero;
