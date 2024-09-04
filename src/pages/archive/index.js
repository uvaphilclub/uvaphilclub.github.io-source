import * as React from "react"
import {useState, useEffect} from "react";
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import SemesterArchive from "../../components/semesterArchive";
import ResponsiveSemesterArchive from "../../components/responsiveSemesterArchive";


const Archive = () => {
    const[pastSemesters, setPastSemesters] = useState([]);

    useEffect(() => {
        fetch('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                {
                    semesterArchives(orderBy: date_DESC) {
                        semester
                        archivedMeetings {
                          meetingTitle
                          guestSpeaker
                        }
                      }
                }`
            })
        })
    .then(response => response.json())
    .then(data => {
        if (data && data.data && data.data.semesterArchives){
            setPastSemesters(data.data.semesterArchives); 
        } else {
            console.error("Unexpected response format:", data);
        }
    })
    .catch(error => {
    console.error("Error fetching past events:", error);
    });
    }, []);

    return (
    <Layout>
    <Helmet>
        <title>Archive | The Philosohpy Club at UVA</title>
        <meta name="description" content="The past events we've hosted"></meta>
    </Helmet>
    <div className="flex flex-col flex-wrap items-center pt-12 pb-12 bg-blue">
        <h1 className="text-6xl italic text-center text-white">Previously Pondered</h1>
    </div>
    <div className="hidden md:flex flex-col flex-wrap max-w-4xl mx-auto mt-12 pb-16 mb-16 font-['Lato']"> 
        <div className="bg-brown h-24"></div>
        {pastSemesters.map((semester, index) => (
            <SemesterArchive key={semester.semester} index={index} semester={semester.semester} events={semester.archivedMeetings}/>
        ))}
        <div className="flex flex-wrap bg-yellow h-14 border-t-2">
            <div className="basis-1/6 border-r-4 border-red"></div>
            <div className="basis-5/6 text-2xl self-center"></div>
        </div>
        <div className="flex flex-wrap bg-yellow h-14 border-t-2">
            <div className="basis-1/6 border-r-4 border-red"></div>
            <div className="basis-5/6 text-2xl self-center"></div>
        </div>
        <div className="flex flex-wrap bg-yellow h-14 border-t-2">
            <div className="basis-1/6 border-r-4 border-red"></div>
            <div className="basis-5/6 text-2xl self-center"></div>
        </div>
        <div className="flex flex-wrap bg-yellow h-14 border-t-2">
            <div className="basis-1/6 border-r-4 border-red"></div>
            <div className="basis-5/6 text-2xl self-center"></div>
        </div>
        <div className="flex flex-wrap bg-yellow h-14 border-t-2">
            <div className="basis-1/6 border-r-4 border-red"></div>
            <div className="basis-5/6 text-2xl self-center"></div>
        </div>
    </div>
    <div className="md:hidden text-2xl pb-6 mb-16 font-['Shanti']">
        {pastSemesters.map((semester, index) => (
            <ResponsiveSemesterArchive key={semester.semester} index={index} semester={semester.semester} events={semester.archivedMeetings}/>
        ))}
    </div>
    </Layout>
)
}
export default Archive