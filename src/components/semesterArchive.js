import * as React from "react"

const SemesterArchive = ({index, semester,events}) => {
    return(
        <div>
            {index == 0 ? 
            (<div className="flex flex-wrap bg-yellow h-14 border-t-2">
              <div className="basis-1/6 border-r-4 border-red"></div>
              <div className="basis-5/6 text-4xl self-center">
                  <p className="ml-4">{semester}</p>
              </div>
            </div>) : (
            <div>
                <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                    <div className="basis-1/6 border-r-4 border-red"></div>
                    <div className="basis-5/6 text-4xl self-center"></div>
                </div>
                <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                    <div className="basis-1/6 border-r-4 border-red"></div>
                    <div className="basis-5/6 text-4xl self-center">
                    <p className="ml-4">{semester}</p>
                    </div>
                </div>
            </div>)
            }
          
            { events.map(meeting => (
            <div key={meeting.title}>
                 <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                 <div className="basis-1/6 border-r-4 border-red"></div>
                 <div className="basis-5/6 text-2xl self-center">
                     <p className="ml-4"> <span className="text-4xl mr-4">&#10003;</span>
                     {meeting.meetingTitle}</p>
                 </div>
             </div>
             {meeting.guestSpeaker && 
             <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                 <div className="basis-1/6 border-r-4 border-red"></div>
                 <div className="basis-5/6 text-2xl self-center">
                     <p className="ml-32 italic">Guest Speaker - {meeting.guestSpeaker}</p>
                 </div>
             </div>}
             </div>
            ))
            }
        </div>
    )
}

export default SemesterArchive