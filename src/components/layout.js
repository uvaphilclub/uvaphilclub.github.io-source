/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <MobileMenu /> */}
      <div className="max-w-4xl mx-auto"
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
