import * as React from "react"
import { Helmet } from "react-helmet"
const ResponsiveSemesterArchive = ({index, semester, events}) => {
    console.log(index)
    return(
      <>
       <Helmet>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       </Helmet>
        <div>
            {index === 0 && 
                <div className="mx-3 my-10 px-3 py-6 text-white bg-blue rounded-sm">
                    <h2 className="text-center text-4xl">{semester}</h2>
                    { events.map((meeting,index) => (
                    <div key={index} className="flex flex-row">
                      <i className="relative top-[1.2rem] fa fa-check-square mr-2 "></i>
                      <div>
                        <p className="mt-4 text-wrap">{meeting.meetingTitle}</p>
                        {meeting.guestSpeaker && 
                        <p className="ml-8 italic">Guest Speaker - {meeting.guestSpeaker}</p>
                        }
                      </div>
                    </div>
                ))
                }
                </div>
            }

            {index !== 0 &&   
                <div className="mx-3 mb-10 px-3 py-6 text-white bg-blue rounded-sm">
                    <h2 className="text-center text-4xl">{semester}</h2>
                    { events.map((meeting,index) => (
                     <div key={index} className="flex flex-row">
                      <i className="relative top-[1.2rem] fa fa-check-square mr-2 "></i>
                      <div>
                        <p className="mt-4 text-wrap">{meeting.meetingTitle}</p>
                        {meeting.guestSpeaker && 
                        <p className="ml-8 italic">Guest Speaker - {meeting.guestSpeaker}</p>
                        }
                      </div>
                     </div>
                    ))
                    }
                </div>
            }
        </div>
        </>
    )
}

export default ResponsiveSemesterArchive