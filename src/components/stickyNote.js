import * as React from "react"
import { useState } from "react";

const StickyNote = ({event}) => {
  // const [isHovered, setIsHovered] = useState(false);
  // let angle;
  // do{
  //     angle = (Math.floor(Math.random() * 13) - 6) / 2;
  // }
  // while(angle === 0)
  // const stickyHover = {
  //   transform: `rotate(${angle}deg)`,
  //   ...(isHovered && { transform: `scale(1.25)` }), // Adjust angle on hover
  //   transition: 'transform 0.3s ease', // Add smooth transition
  // };
  return(
    <div className= {`sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 -top-4`}
    
   >
      <div>
        <h1 className="text-3xl">{event.displayDate}</h1>
        <h2 className="text-2xl">{event.meetingTitle}</h2>
      </div>
      <div className="text-md">
        {event.subTitle && 
        <div>
            <p className="text-xl">{event.subTitle}</p>
        </div>
        }
        {event.guestSpeaker && 
        <div>
            <p className="text-xl">Guest speaker:</p>
            <p className="text-xl">{event.guestSpeaker}</p>
        </div>
        }
        <p>{event.location}</p> 
      </div>
    </div>
  )
}

export default StickyNote