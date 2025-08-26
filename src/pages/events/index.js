import * as React from "react"
import {useState, useEffect} from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import StickyNote from "../../components/stickyNote";

const Events = () => {
    const[currentEvents, setCurrentEvents] = useState([]);
    const [currentSemester, setCurrentSemester] = useState('');

    useEffect(() => {
        fetch('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                {
                    currentEvents(orderBy: date_ASC) {
                        displayDate
                        meetingTitle
                        location
                        subtitle
                        guestSpeaker
                    }
                    currentSemester(where: {id: "clx48yk9u2ny007le70vazgmo"}){
                        semester
                    }
                }`
            })
        })
    .then(response => response.json())
    .then(data => {
        if (data && data.data && data.data.currentEvents){
            setCurrentEvents(data.data.currentEvents); 
        }
        if (data.data.currentSemester) {
            setCurrentSemester(data.data.currentSemester.semester);
        } 
        else {
            console.error("Unexpected response format:", data);
        }
    })
    .catch(error => {
    console.error("Error fetching data:", error);
    });
    }, []);

    return (
    <Layout>
    <div>
        <Helmet>
            <title>Events | The Philosohpy Club at UVA</title>
            <meta name="description" content="The schedule of the semester"></meta>
        </Helmet>
        <div className="">
            <div className="flex flex-col flex-wrap items-center bg-blue pt-12 pb-12">
                <h1 className="text-5xl sm:text-6xl italic text-center text-white">Currently Contemplating</h1>
            </div>
        </div>
        <div className="max-w-[1100px] min-w-72 mx-auto">
            <div className="mb-16 pb-16">
            <div className="flex justify-center">
                <h1 className="lg:text-start text-7xl mt-4 mb-6 font-['Lato']">{currentSemester}</h1>
            </div>
            <div className="mx-2 flex flex-wrap justify-center gap-12 bg-dark-gray border-[16px] rounded border-silver p-10 pt-14 font-['Shanti']">
                {currentEvents.map((event,index)=>(
                    <StickyNote key={index} event={event}/>
                ))}
                <div>
                    <div className="sticky-note flex flex-wrap flex-col h-56 sm:h-64 justify-between w-56 sm:w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-1.5deg] -top-2">
                        <div>
                            <p className="text-center text-4xl">Meeting Dates TBD</p>
                        </div>
                    </div>
                    <div className="sticky-note flex flex-wrap flex-col h-56 sm:h-64 justify-between w-56 sm:w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-1.5deg] -top-2">
                        <div>
                            <p className="text-center text-2xl"></p>
                            <StaticImage src="../../images/the-thinker.png" placeholder="blur" alt="Image of The Thinker"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </Layout>
)
}

export default Events