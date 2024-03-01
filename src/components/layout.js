/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix} from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import ThinHeader from "./thin_header"
import MobileMenu from "./mobileMenu"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src={withPrefix('openMobileMenu.js')}  type="text/javascript" />
      </Helmet>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <ThinHeader />
      {/* <MobileMenu /> */}
      <div className=""
      >
        <main className="">{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
        </footer>
      </div>
    </>
  )
}

export default Layout
