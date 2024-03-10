import React, { useState, useEffect } from 'react';

const FadeInLeftOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('fade-in-on-scroll');
      if (element) {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="fade-in-on-scroll" className={`transition-[transform,opacity] custom-transition transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} flex flex-wrap`}>
      {children}
    </div>
  );
};

export default FadeInLeftOnScroll;