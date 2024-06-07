import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-wrap flex-col text-center justify-center items-center min-h-[80vh]" style={{marginx : '15%'}}>
      <StaticImage src="../images/phil rainbow.jpg" width={500} layout="fixed"/> 
      <h1 className="text-4xl">404: Page Not Found</h1>
      <p className="text-xl mt-4">But you did find what lies at the end of the rainbow</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
