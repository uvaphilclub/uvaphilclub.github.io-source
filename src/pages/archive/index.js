import * as React from "react"
import {useState, useEffect} from "react";
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import SemesterArchive from "../../components/semesterArchive";
import ResponsiveSemesterArchive from "../../components/responsiveSemesterArchive";
import Newsletter from "../../components/newsletter";

const Archive = () => {
    const [pastSemesters, setPastSemesters] = useState([]);
    const [newsLetters, setNewsLetters] = useState([]);
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
    fetch('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query: `
          {
            newsletters(orderBy: date_DESC)  {
              title
              newsletter {
                url
              }
            }
          }`
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.data && data.data.newsletters){
        setNewsLetters(data.data.newsletters);
      } else {
        console.error("Unexpected newsletter format: ", data);
      }
    })
    .catch(error => {
      console.error("Erorr fetching newsletters: ", error);
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
        <h1 className="text-6xl text-center mb-4">Read Our Newsletter</h1>
        <div>
          {newsLetters.map((newsletter, index) => (
            <Newsletter newsletter={newsletter} index={index} key={index}/>
          ))}
        </div>
        <div className="flex justify-center border-2 bg-red ml-32 mr-20 h-11 ">
        <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">Meditations on the Beam</p>
          <div className="w-6 ml-64 bg-yellow"></div>
        </div>
        <div className="flex justify-center border-2 bg-blue rounded-sm ml-20 mr-32 pl-2">
            <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">A Treatise on Chairs</p>
            <div className="w-6 ml-64 bg-yellow"></div>
        </div>
        <div className="flex justify-center border-2 bg-red rounded-sm ml-32 mr-20 h-11">
        <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">On Donuts</p>
          <div className="w-6 ml-64 bg-yellow"></div>
        </div>
        <h1 className="text-6xl text-center mb-4 mt-4">Past Meetings</h1>
        <div className="bg-brown h-24"></div>
        {pastSemesters.map((semester, index) => (
            <SemesterArchive key={semester.semester} index={index} semester={semester.semester} events={semester.archivedMeetings}/>
        ))}
        
        <div className="flex flex-wrap bg-yellow h-14 border-t-2">
            <div className="basis-1/6 border-r-4 border-red"></div>
            <div className="basis-5/6 text-2xl self-center">
            <p className="ml-16">First meeting: April 25th, 2023</p>
            </div>
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
      <h1 className="mt-4 mb-2 text-4xl text-center">Read Our Newsletter</h1>
      <div>
        {newsLetters.map((newsletter, index) => (
          <Newsletter newsletter={newsletter} index={index} key={index}/>
        ))}
      </div>
      <div className="flex justify-center border-2 bg-red ml-6 mr-3 rounded-sm sm:ml-32 sm:mr-20 h-11 ">
      <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">Meditations on the Beam</p>
        <div className="w-6 ml-64 bg-yellow hidden sm:block"></div>
      </div>
      <div className="flex justify-center border-2 bg-blue ml-3 mr-6 rounded-sm sm:ml-20 sm:mr-32 pl-2">
          <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">A Treatise on Chairs</p>
          <div className="w-6 ml-64 bg-yellow hidden sm:block"></div>
      </div>
      <div className="flex justify-center border-2 bg-red ml-6 mr-3 rounded-sm sm:ml-32 sm:mr-20 h-11">
      <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">On Donuts</p>
        <div className="w-6 ml-64 bg-yellow hidden sm:block"></div>
      </div>
      {pastSemesters.map((semester, index) => (
          <ResponsiveSemesterArchive key={semester.semester} index={index} semester={semester.semester} events={semester.archivedMeetings}/>
      ))}
      <p className="text-center">First meeting: April 25th, 2023</p>
    </div>
    </Layout>
)
}
export default Archive