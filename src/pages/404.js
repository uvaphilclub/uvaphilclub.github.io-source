import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-grow flex-col text-center justify-center overflow-y-hidden" style={{margin : '15%'}}>
      <h1 className="text-4xl">404: Not Found</h1>
      <p className="text-xl mt-4">Unlike most things in Philosophy, you don't need to prove that this page doesn't exist</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
