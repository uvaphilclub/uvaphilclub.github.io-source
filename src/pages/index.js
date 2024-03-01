import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import QuoteComponent from "../components/rotatingQuote"
import SimpleImageSlider from "react-simple-image-slider"
import image1 from '../images/IMG_1122.jpg'
import image2 from '../images/IMG_1126.jpg'
import image3 from '../images/IMG_1128.jpg'
import image4 from '../images/IMG_1131.jpg'

const slideShowItems = [
  {url: image1},
  {url: image2},
  {url: image3},
  {url: image4},
]

const IndexPage = () => (
  <Layout>
   <body className="min-h-screen">
        <div className="flex flex-col md:flex-row bg-blue justify-center pt-12 pb-6 pl-6 items-center gap-12">
            <div className="flex flex-col mb-12 ml-32">
                <div className="max-w-3xl">
                <div className="text-9xl">
                    <h1 className="font-bold">THE</h1>
                    <h1>PHILOSOPHY CLUB<span className="text-5xl">@UVA</span></h1>
                </div>
                <div className="bg-lightsilver shadow-[30px_30px_0px_0_rgba(0,0,0,0.3)] p-10 mt-10">
                    <div className="max-w-64">
                        <h1 className="text-5xl text-start italic">Our Mission</h1>
                    </div>
                    <ul>
                        <li className="mt-5 text-2xl">1. Bring together those interested in philosophical inquiry through discussions and events. </li>
                        <li className="mt-5 text-2xl">2. Promote the study of philosophy to the entire UVA community.</li>
                        <li className="mt-5 text-2xl">3. Encourage a stronger connection between students and faculty in the Department of Philosophy.</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="ml-10 p-10 basis-1/2 bg-gradient-to-r from-silver to-lightsilver max-w-5xl">
                <SimpleImageSlider
                    width={700}
                    height={500}
                    images={slideShowItems}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    autoPlayDelay={10}
                />
            </div>
        </div>
        <div className="bg-lightsilver">
            <div className="flex flex-wrap  justify-center m-auto"> 
                <div className="p-6 my-12"> 
                <div className="max-w-2xl bg-blue p-6 ml-56">
                    <h1 className="text-4xl">About</h1>
                    <p className="text-lg">The Philosophy Club at UVA is a student run CIO. We aim to provide an environment for 
                        those interested in philosophy to come together to discuss what fascinates them and meet others
                        with similar interests. We host several meetings a semester and are branching out into hosting a 
                        wider variety of events including major info sessions, community outreach, and fundraisers. 
                    </p>
                </div>
                <div className="max-w-2xl">
                    <h2 className="text-3xl mt-4">Meetings</h2>
                    <p className="text-lg">
                        Meetings are where the discussion happens! Meeting are usually either student led or feature a 
                        guest speaker from the Philosophy department, and are very relaxed. Topics cover all branches of 
                        philosophy, both at a high level and at a practical level. 
                        No formal knowledge of philosophy is necessary to leave feeling thoughtful, so feel free to stop 
                        by and listen in. 
                    </p>
                    <p className="text-lg">
                        Usually held in the Balz Philosohpy Library, but locations may vary.
                      
                    </p>
                    <p className="text-lg">
                        Complementary donuts and coffee are also provided at each meeting.
                    </p>
                </div>    
                    
                    <h2 className="text-3xl mt-4">Special thanks to</h2>
                    <p className="text-lg">
                        Special thanks to our official advisor Mark Jeter and the Corcoran Department of Philosophy for making this club possible!
                        Without their help, we might've never existed{'(a scary thought on a philisophical level!)'}
                    </p>
                    <p className="text-lg">
                        Learn more about the UVA Department of  Philosophy at: <span><a href="https://philosophy.virginia.edu/">https://philosophy.virginia.edu/</a></span>
                    </p> 
                </div>
            </div>
        </div>
        <div className="bg-blue">
            <div className="flex flex-wrap flex-col justify-center max-w-4xl m-auto "> 
                <h2 className="text-2xl mt-12 text-center">Join the Groupme to stay the most up to date</h2>
                <div className="flex justify-center flex-wrap mt-8">
                    <div className="size-40 rounded-lg">
                        <StaticImage src="../images/groupme.jpg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-6 py-12 max-w-5xl mx-auto ">
            <QuoteComponent />
            </div>
        </div>
        <div className="bg-gray">
            <div className="flex flex-wrap justify-center max-w-4xl m-auto"> 
                <div className="mt-6 text-xs">
                    <p>Although this organization has members who are University of Virginia students and may
                        have University employees associated or engaged in its activities and affairs, the 
                        organization is not a part of or an agency of the University. It is a separate and 
                        independent organization which is responsible for and manages its own activities and 
                        affairs. The University does not direct, supervise or control the organization and is 
                        not responsible for the organization's contracts, acts or omissions.  
                    </p>
                </div>
            </div>`
        </div>
        
    </body>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
