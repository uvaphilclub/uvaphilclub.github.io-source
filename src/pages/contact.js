import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Contact = () => ( 
    <Layout> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="min-h-screen mx-auto">
        <div className="flex flex-wrap flex-col items-center py-6 min-w-full bg-blue">
            <h1 className="text-4xl italic text-center">For your burning questions and suggestions: </h1> 
            <div className="border-2 border-black hover:bg-[#457885] mt-4 px-2 pb-2 rounded">
                <a className="text-3xl" href="mailto: uvaphilclub@gmail.com">uvaphilclub@gmail.com</a>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-20 my-8 py-4 bg-blue max-w-2xl mx-auto rounded-lg">
            <h1 className="self-center text-4xl">Get Connected</h1>
            <ul className="text-xl">
                <li className="flex flex-wrap justify-between">Join the GroupMe:<a href="https://groupme.com/join_group/93261535/MxmKm2Fi"><span>
                    <svg className="h-6 w-6 mt-1" fill="#01A9EA" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GroupMe</title><path d="M11.1597 6.57419H12.8398V8.16898H11.1597V6.57419ZM18.1997 0H5.80011C3.14898 0 1 2.03979 1 4.55577V16.3243C1 18.8402 3.14898 20.88 5.80011 20.88H9.92715L11.9786 24L14.0306 20.88H18.1997C20.8506 20.88 23 18.8402 23 16.3243V4.55574C23 2.03976 20.8506 0 18.1997 0ZM7.56833 8.16895H9.34755V6.57416H7.56833V4.85447H9.34755V3.16587H11.1597V4.85447H12.8398V3.16587H14.6519V4.85447H16.4308V6.57416H14.6519V8.16895H16.4308V9.88852H14.6519V11.5772H12.8398V9.88852H11.1597V11.5772H9.34755V9.88852H7.56833V8.16895ZM20.3122 13.4321C20.3122 13.4321 17.9202 17.708 12.2406 17.708C12.1619 17.708 12.0843 17.707 12.007 17.7057C11.9299 17.707 11.8522 17.708 11.7737 17.708C6.09416 17.708 3.70211 13.4321 3.70211 13.4321C3.70211 13.4321 3.54729 13.1536 3.54729 12.8534C3.53754 12.6368 3.64915 12.3263 3.9421 12.1433C4.105 12.0417 4.259 11.9914 4.40179 11.9757C5.08566 11.9069 5.48202 12.3295 5.80794 12.8121C6.16788 13.3447 8.24445 15.678 12.007 15.7672C15.7698 15.678 17.8464 13.3447 18.2063 12.8121C18.5322 12.3295 18.9429 11.9062 19.6125 11.9757C19.7553 11.9914 19.9094 12.0417 20.0722 12.1433C20.3652 12.3263 20.4792 12.5839 20.469 12.8532C20.446 13.2494 20.3122 13.4321 20.3122 13.4321Z"/></svg></span></a>
                </li>
                <li className="flex flex-wrap  items-center justify-between">
                    Join the email list: <div className="text-2xl"><a href="https://lists.virginia.edu/sympa/subscribe/philorg" className="fa fa-envelope text-center"></a></div>
                </li>
                <li className="flex flex-wrap justify-between items-center">
                    Follow us on Instagram: <div className="bg-blue flex flex-wrap text-2xl"><a href="https://www.instagram.com/uvaphilosophyclub/" className="fa fa-instagram w-6 text-[#FFFFFF] text-center"></a></div>
                </li>
            </ul>
        </div>
        <div className="max-w-4xl mt-20 mx-auto">
            <h1 className="text-center text-4xl italic">Meet the Team</h1>
            <div className="profiles m-10 mb-32 flex flex-wrap justify-center gap-y-24 gap-x-40 ">
                <div className="">
                    <StaticImage src="../images/zach_wider.jpg" />
                    <h1>President</h1>
                    <div className="text-center">
                        <p>Zack Montalvo</p>
                        <a href="mailto: rqv3jm@virginia.edu">rqv3jm@virginia.edu &#9993;</a>
                    </div>
                </div> 
                <div className="">
                    <StaticImage src="../images/ananya.png" />
                    <h1>Vice President</h1>
                    <div className="text-center">
                        <p>Ananya Sai</p>
                        <a href="mailto: xqr8dj@virginia.edu">xqr8dj@virginia.edu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Katherine-crop.png" />
                    <h1>Co-Vice President</h1>
                    <div className="text-center">
                        <p>Katherine Hu</p>
                        <a href="mailto: upb6wr@virginia.edu">upb6wr@virginia.edu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Paco.jpg" />
                    <h1>Project Chair</h1>
                    <div className="text-center">
                        <p>Paco Amorrortu</p>
                        <a href="mailto: zjz4uk@virginia.edu">zjz4uk@virginia.edu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Gavin-crop.jpg" />
                    <h1>Member at Large</h1>
                    <div className="text-center">
                        <p>Gavin Schultz </p>
                        <a href="mailto: wbn6ed@virginia.edu">wbn6ed@virginia.edu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/forest.jpg" />
                    <h1>Secretary</h1>
                    <div className="text-center">
                        <p>Forest Du </p>
                        <a href="mailto: nsu5jw@virginia.edu">nsu5jw@virginia.edu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Grant.jpg" />
                    <h1>Webmaster</h1>
                    <div className="text-center">
                        <p>Grant Zou</p>
                        <a href="mailto: sth3mm@virginia.edu">sth3mm@virginia.edu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Beckett-crop.jpeg" className="max-w-100" />
                    <h1>Treasurer</h1>
                    <div className="text-center">
                        <p>Beckett Wilkinson</p>
                        <a href="mailto: hgh6qr@virginia.edu">hgh6qr@virginia.edu &#9993;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
) 

export const Head = () => <Seo title="Contact" />

export default Contact