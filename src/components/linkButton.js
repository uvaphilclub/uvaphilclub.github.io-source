import React from "react";
import { useHistory } from 'react-router-dom'; // Import useHistory hook if using React Router

const LinkButton = ({ to, children }) => {
  const history = useHistory(); // Get the history object

  const handleClick = () => {
    // Navigate to the desired URL when the button is clicked
    history.push(to);
  };

  return (
    <div>
      {/* Button styled as a link */}
      <button onClick={handleClick} className="bg-silver hover:bg-darksilver rounded-lg">
        {children}
      </button>
    </div>
  );
};
export default LinkButton;