import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Contact = () => ( 
    <Layout> 
    <div className="min-h-screen mx-auto">
        <div className="flex flex-wrap flex-col items-center pt-12 pb-12 min-w-full bg-blue">
            <h1 className="text-4xl italic text-center">For your burning questions and suggestions</h1> 
        </div>
        <div className="max-w-4xl m-auto">
            <div className="flex flex-wrap justify-center">
                <button className="h-16 w-48 mt-8">
                        <a className="bg-silver px-2 py-4 w-fill h-fill hover:bg-darksilver rounded-lg" href="mailto: uvaphilclub@gmail.com">uvaphilclub@gmail.com</a>
                </button>
            </div>
            <div className="flex flex-col content-center sm:flex-row flex-wrap justify-evenly mb-16 mt-8 gap-y-4">
                <button className="h-16 w-48 ml-4">
                    <a className="bg-silver px-2 py-4 w-fill h-fill hover:bg-darksilver rounded-lg" href="https://groupme.com/join_group/93261535/MxmKm2Fi">Join the GroupMe</a>
                </button>
                <button className="h-16 w-48">
                    <a className="bg-silver px-2 py-4 w-fill h-fill hover:bg-darksilver rounded-lg" href="https://lists.virginia.edu/sympa/subscribe/philorg">Join the email list</a>
                </button>
                <button className="h-16 w-48 mr-4">
                    <a className="bg-silver px-2 py-4 w-fill h-fill hover:bg-darksilver rounded-lg" href="https://www.instagram.com/uvaphilosophyclub/">Follow us on Instagram</a>
                </button>
            </div>
            <div className="profiles m-10 mb-32 flex flex-wrap justify-center gap-y-24 gap-x-40 ">
                <div className="">
                    <StaticImage src="../images/zach_wider.jpg" />
                    <h1>President</h1>
                    <div className="text-center">
                    <a href="mailto: rqv3jm@virginia.edu">Zack Montalvo &#9993;</a>
                    </div>
                </div> 
                <div className="">
                    <StaticImage src="../images/ananya.png" />
                    <h1>Vice President</h1>
                    <div className="text-center">
                        <a href="mailto: xqr8dj@virginia.edu">Ananya Sai &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Katherine-crop.png" />
                    <h1>Co-Vice President</h1>
                    <div className="text-center">
                        <a href="mailto: upb6wr@virginia.edu">Katherine Hu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Paco.jpg" />
                    <h1>Project Chair</h1>
                    <div className="text-center">
                    <a href="mailto: zjz4uk@virginia.edu">Paco Amorrortu &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Gavin-crop.jpg" />
                    <h1>Member at Large</h1>
                    <div className="text-center">
                    <a href="mailto: wbn6ed@virginia.edu">Gavin Schultz &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/forest.jpg" />
                    <h1>Secretary</h1>
                    <div className="text-center">
                    <a href="mailto: nsu5jw@virginia.edu">Forest Du &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Grant.jpg" />
                    <h1>Webmaster</h1>
                    <div className="text-center">
                    <a href="mailto: sth3mm@virginia.edu">Grant Zou &#9993;</a>
                    </div>
                </div>
                <div className="">
                    <StaticImage src="../images/Beckett-crop.jpeg" className="max-w-100" />
                    <h1>Treasurer</h1>
                    <div className="text-center">
                    <a href="mailto: hgh6qr@virginia.edu">Beckett Wilkinson &#9993;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
) 

export const Head = () => <Seo title="Contact" />

export default Contact