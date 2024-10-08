import * as React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"

const Contact = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
      fetch('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            {
              profiles(orderBy: order_ASC) {
                email
                name
                order
                title
                profilePicture {
                  url
                  
                }
              }
            }
          `
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.profiles) {
          setProfiles(data.data.profiles);
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching profiles:", error);
      });
    }, []);
    return( 
    <Layout> 
    <Helmet>
        <title>Contact | The Philosophy Club at UVA</title>
        <meta name="description" content="The contact information for the Philosophy Club at UVA"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Helmet>
    <div className="min-h-screen mx-auto">
        <div className="flex flex-wrap justify-center gap-x-20 py-6 bg-blue min-w-full">
            <h1 className="mb-6 sm:mb-0 self-center text-center text-6xl italic text-white">Get Connected</h1>
            <ul className="text-xl font-['Shanti'] text-white">
                <li className="flex flex-wrap justify-between">Join the GroupMe:<a href="https://groupme.com/join_group/93261535/MxmKm2Fi"><span>
                    <svg className="h-6 w-6 mt-1" fill="#2744E9" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GroupMe</title><path d="M11.1597 6.57419H12.8398V8.16898H11.1597V6.57419ZM18.1997 0H5.80011C3.14898 0 1 2.03979 1 4.55577V16.3243C1 18.8402 3.14898 20.88 5.80011 20.88H9.92715L11.9786 24L14.0306 20.88H18.1997C20.8506 20.88 23 18.8402 23 16.3243V4.55574C23 2.03976 20.8506 0 18.1997 0ZM7.56833 8.16895H9.34755V6.57416H7.56833V4.85447H9.34755V3.16587H11.1597V4.85447H12.8398V3.16587H14.6519V4.85447H16.4308V6.57416H14.6519V8.16895H16.4308V9.88852H14.6519V11.5772H12.8398V9.88852H11.1597V11.5772H9.34755V9.88852H7.56833V8.16895ZM20.3122 13.4321C20.3122 13.4321 17.9202 17.708 12.2406 17.708C12.1619 17.708 12.0843 17.707 12.007 17.7057C11.9299 17.707 11.8522 17.708 11.7737 17.708C6.09416 17.708 3.70211 13.4321 3.70211 13.4321C3.70211 13.4321 3.54729 13.1536 3.54729 12.8534C3.53754 12.6368 3.64915 12.3263 3.9421 12.1433C4.105 12.0417 4.259 11.9914 4.40179 11.9757C5.08566 11.9069 5.48202 12.3295 5.80794 12.8121C6.16788 13.3447 8.24445 15.678 12.007 15.7672C15.7698 15.678 17.8464 13.3447 18.2063 12.8121C18.5322 12.3295 18.9429 11.9062 19.6125 11.9757C19.7553 11.9914 19.9094 12.0417 20.0722 12.1433C20.3652 12.3263 20.4792 12.5839 20.469 12.8532C20.446 13.2494 20.3122 13.4321 20.3122 13.4321Z"/></svg></span></a>
                </li>
                <li className="flex flex-wrap  items-center justify-between">
                    Join the email list: <div className="text-2xl"><a href="https://lists.virginia.edu/sympa/subscribe/phil.club" className="fa fa-envelope text-black text-center"></a></div>
                </li>
                <li className="flex flex-wrap justify-between items-center">
                    Follow us on Instagram: <div className="bg-blue flex flex-wrap text-2xl ml-4"><a href="https://www.instagram.com/uvaphilosophyclub/" className="fa fa-instagram w-6 text-black text-center"></a></div>
                </li>
            </ul>
        </div>
        <div className="max-w-6xl mt-16 mb-16 mx-auto ">
            <h1 className="text-center text-5xl italic font-['Lato']">Meet the Team</h1>
            <div className="profiles m-10 pb-16 flex flex-wrap justify-center gap-y-12 gap-x-40 font-['Shanti']">
              { profiles.map(profile => (
                <Profile
                  key={profile.email}
                  email={profile.email}
                  name={profile.name}
                  title={profile.title}
                  image={profile.profilePicture.url}/>))}
            </div>
        </div>
    </div>
    </Layout>
    ) 
}

export const Head = () => <Seo title="Contact" />

export default Contact