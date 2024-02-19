import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Contact = () => ( 
    <Layout> 
    <div className="flex flex-wrap justify-center my-16">
        <h1 className="text-4xl italic text-center">For your burning questions and suggestions</h1> 
    </div>
    <div className="flex flex-col content-center sm:flex-row flex-wrap justify-evenly my-16 gap-y-4">
        <button className="bg-gray-300 h-16 w-40 hover:bg-gray-400">
            <Link to="https://groupme.com/join_group/93261535/MxmKm2Fi">Join the GroupMe</Link>
        </button>
        <button className="bg-gray-300 h-16 w-40 hover:bg-gray-400">
            <Link to="https://lists.virginia.edu/sympa/subscribe/philorg">Join the email list</Link>
        </button>
        <button className="bg-gray-300 h-16 w-40 hover:bg-gray-400">
            <Link to="https://www.instagram.com/uvaphilosophyclub/">Follow us on Instagram</Link>
        </button>
    </div>
    <div className="profiles m-10 mb-32 flex flex-wrap justify-center gap-20 ">
        <div className="">
            <StaticImage src="../images/profile-placeholder.jpg" />
            <h1>President</h1>
            <h2>Zack Montalvo</h2>
        </div>
        <div className="">
            <StaticImage src="../images/profile-placeholder.jpg" />
            <h1>Vice President</h1>
            <h2>Ananya Sai</h2>
        </div>
        <div className="">
            <StaticImage src="../images/Katherine-crop.png" />
            <h1>Co-Vice President</h1>
            <h2>Katherine Hu</h2>
        </div>
        <div className="">
            <StaticImage src="../images/Paco.jpg" />
            <h1>Project Chair</h1>
            <h2>Paco Amorrortu</h2>
        </div>
        <div className="">
            <StaticImage src="../images/Gavin-crop.jpg" />
            <h1>Member at Large</h1>
            <h2>Gavin Schultz</h2>
        </div>
        <div className="">
            <StaticImage src="../images/profile-placeholder.jpg" />
            <h1>Secretary</h1>
            <h2>Forest Du</h2>
        </div>
        <div className="">
            <StaticImage src="../images/Grant.jpg" />
            <h1>Webmaster</h1>
            <h2>Grant Zou</h2>
        </div>
        <div className="">
            <StaticImage src="../images/Beckett-crop.jpeg" className="max-w-100" />
            <h1>Treasurer</h1>
            <h2>Beckett Wilkinson</h2>
        </div>
    </div>
    </Layout>
) 

export const Head = () => <Seo title="Contact" />

export default Contact