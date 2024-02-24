import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const texts = [
    '"Honey, do you think free will truly exists?"',
    '"What is a chair?"', 
    '"I think, therefore I am"',
    '"In Monopoly I only buy water works and electric company cause I\'m a utilitarian"',
    '"Hey, there\'s a trolley coming, who tied all these people to these train tracks?!? And what is this lever for?"',
    '"Funny rotating quote"'
    ]; // Array of texts
  const [randomText, setRandomText] = useState(''); // State to hold random text
  const [isSpecialQuote, setIsSpecialQuote] = useState(false); 

  useEffect(() => {
    // Function to select random text
    const selectRandomText = () => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setRandomText(texts[randomIndex]);
      setIsSpecialQuote(randomIndex === 5);
    };

    // Call selectRandomText when the component mounts
    selectRandomText();
  }, []); // Empty dependency array to only run effect on mount

  return (
    <div>
      <h1 class={`text-4xl italic text-center ${isSpecialQuote ? 'hover:animate-rotateAnimation' : ''}`}>{randomText}</h1>
    </div>
  );
};

export default QuoteComponent;