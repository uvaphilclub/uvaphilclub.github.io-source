import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const handleDragStart = (e) => e.preventDefault();

const slideShowItems = [
  <StaticImage src="../images/phil-icon-placeholder.jpeg" onDragStart={handleDragStart} />,
  <StaticImage src="../images/phil-icon-placeholder.jpeg" onDragStart={handleDragStart} />,
  <StaticImage src="../images/phil-icon-placeholder.jpeg" onDragStart={handleDragStart} />,
]

const IndexPage = () => (
  <Layout>
   <body className="min-h-screen">
        <div className="flex flex-col justify-center md:flex-row p-6 items-center gap-4 my-12">
            <div className="flex flex-col">
                <h1 className="mt-5 text-4xl">Our Mission</h1>
                <ul>
                    <li className="mt-5 text-2xl">1. Bring together those interested in philosophical inquiry through discussions and events. </li>
                    <li className="mt-5 text-2xl">2. Promote the study of philosophy to the entire UVA community.</li>
                    <li className="mt-5 text-2xl">3. Encourage a stronger connection between students and faculty in the Department of Philosophy.</li>
                </ul>
            </div>
            <Slide>
              <div className="each-slide-effect">
              <div className="each-slide" style={{ 'backgroundImage': 'url("/images/phil-icon-placeholder.jpeg")',height: '200px', width: '20px' }}></div>
              </div>
              <div className="each-slide-effect">
              <div className="each-slide" style={{ 'backgroundImage': 'url("/images/phil-icon-placeholder.jpeg")',height: '200px', width: '20px' }}></div>
              </div> 
              <div className="each-slide-effect">
              <div className="each-slide" style={{ 'backgroundImage': 'url("/images/phil-icon-placeholder.jpeg")',height: '200px', width: '20px' }}></div>
              </div>
            </Slide>
        </div>
        <div className="flex flex-wrap justify-center p-6 my-12 ">
            <h1 className="text-5xl italic">"Funny rotating quote"</h1>
        </div>
        <div className="p-6 my-12"> 
            <h1 className="text-4xl">Club introduction</h1>
            <p>Club description and details</p>
            <p>Join the Groupme</p>
        </div>
        <div className="p-6 mt-12 text-xs">
            <p>Although this organization has members who are University of Virginia students and may
                have University employees associated or engaged in its activities and affairs, the 
                organization is not a part of or an agency of the University. It is a separate and 
                independent organization which is responsible for and manages its own activities and 
                affairs. The University does not direct, supervise or control the organization and is 
                not responsible for the organization's contracts, acts or omissions.  
            </p>
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
