import React, { useState, useEffect } from 'react';

const FadeInRightOnScroll = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('fade-in-on-scroll');
      if (element) {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  return (
    <div id="fade-in-on-scroll" className={`max-w-full transition-[transform,opacity] custom-transition transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      {children}
    </div>
  );
};

export default FadeInRightOnScroll;