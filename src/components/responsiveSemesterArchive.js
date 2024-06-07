import * as React from "react"

const ResponsiveSemesterArchive = ({index, semester, events}) => {
    console.log(index)
    return(
        <div>
            {index == 0 && 
                <div className="mx-4 mb-10 mt-10">
                    <h2 className="text-center text-4xl">{semester}</h2>
                    { events.map(meeting => (
                    <div key={meeting.title}>
                        <p className="mt-4">{meeting.meetingTitle}</p>
                        {meeting.guestSpeaker && 
                        <p className="ml-8 italic">Guest Speaker - {meeting.guestSpeaker}</p>
                        }
                    </div>
                ))
                }
                </div>
            }

            {index != 0 &&   
                <div className="pt-10 mb-10 mx-4 border-t-4">
                    <h2 className="text-center text-4xl">{semester}</h2>
                    { events.map(meeting => (
                    <div key={meeting.title}>
                        <p className="mt-4">{meeting.meetingTitle}</p>
                        {meeting.guestSpeaker && 
                        <p className="ml-8 italic">Guest Speaker - {meeting.guestSpeaker}</p>
                        }
                    </div>
                    ))
                    }
                </div>
            }
          
        </div>

    )
}

export default ResponsiveSemesterArchive