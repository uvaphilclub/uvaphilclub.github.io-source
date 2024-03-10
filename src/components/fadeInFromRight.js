import React, { useState, useEffect } from 'react';

const FadeInFromRight = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-[transform,opacity] custom-transition transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      {children}
    </div>
  );
};

export default FadeInFromRight;