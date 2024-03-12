/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import { Link } from "gatsby"

import ThinHeader from "./thin_header"
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

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
}

  return (
    <div id="outer-container">
      <div className="md:hidden">
        <Menu  styles={styles} outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" }>
          <main id="pagewrap">
          <ul className="">
            <li className="font-bold text-white hover:text-black py-4"><Link className="text-3xl" to="/">Home</Link></li>
            <li className="font-bold text-white hover:text-black py-4"><Link className="text-3xl" to="/events">Events</Link></li>
            <li className="font-bold text-white hover:text-black py-4"><Link className="text-3xl" to="/archive">Archive</Link></li>
            <li className="font-bold text-white hover:text-black py-4"><Link className="text-3xl" to="/contact">Contact</Link></li>
          </ul>
          </main>
        </Menu>
      </div>
      <ThinHeader />
        <main className="">{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
        </footer>
    </div>
  )
}

export default Layout
