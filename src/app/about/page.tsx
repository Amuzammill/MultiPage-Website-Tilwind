import React from "react";



const About = () => {
  return (
    <section className="about py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* About Text Content */}
        <div className="about-content">
          <h2 className="about-title text-3xl sm:text-4xl font-semibold text-white mb-6">
            About Xpert Technologies
          </h2>
          <p className="about-description text-base sm:text-lg text-gray-300 leading-relaxed">
            Xpert Technologies laptop computer, portable personal computer that features a screen, touch pad, and alphanumeric keyboard. Laptops usually have a clamshell design, in which the screen is located on the interior of the upper lid and the keyboard is located on the interior of the lower lid.
          </p>
        </div>
        
        
       
      </div>
    </section>
  );
};

export default About;
