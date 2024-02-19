import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
   <body class="min-h-screen">
        <div class="flex flex-col justify-center md:flex-row p-6 items-center gap-4 my-12">
            <div class="flex flex-col">
                <h1 class="mt-5 text-4xl">Our Mission</h1>
                <ul>
                    <li class="mt-5 text-2xl">1. Bring together those interested in philosophical inquiry through discussions and events. </li>
                    <li class="mt-5 text-2xl">2. Promote the study of philosophy to the entire UVA community.</li>
                    <li class="mt-5 text-2xl">3. Encourage a stronger connection between students and faculty in the Department of Philosophy.</li>
                </ul>
            </div>
            <img src="/assets/phil-icon-placeholder.jpeg" /> 
        </div>
        <div class="flex flex-wrap justify-center p-6 my-12 ">
            <h1 class="text-5xl italic">"Funny rotating quote"</h1>
        </div>
        <div class="p-6 my-12"> 
            <h1 class="text-4xl">Club introduction</h1>
            <p>Club description and details</p>
            <p>Join the Groupme</p>
        </div>
        <div class="p-6 mt-12 text-xs">
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
