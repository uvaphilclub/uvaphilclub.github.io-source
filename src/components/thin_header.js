import * as React from "react"
import { Link } from "gatsby"

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

const ThinHeader = () => (
    <div id="outer-container">
        <header className="flex flex-wrap flex-col content-center 2xl:flex-row justify-between border-b-4 pb-2 border-white bg-gray">
            <div className="flex flex-wrap items-end ml-4">
                <h1 className="text-5xl sm:text-7xl"><span className="font-bold">THE</span> PHILOSOPHY CLUB</h1>
                <h2 className="text-2xl sm:text-3xl">@UVA</h2>
            </div>
            <nav className="md:block self-center 2xl:self-auto"> 
                <ul className="hidden md:block">
                    <li className="space-x-4 text-2xl mt-6">
                        <Link className="font-bold text-white hover:text-black py-4 px-8" activeClassName="underline" to="/">Home</Link>
                        <Link className="font-bold text-white hover:text-black py-4 px-8" activeClassName="underline" to="/events">Events</Link>
                        <Link className="font-bold text-white hover:text-black py-4 px-8" activeClassName="underline" to="/archive">Archive</Link> 
                        <Link className="font-bold text-white hover:text-black py-4 px-8" activeClassName="underline" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
)

export default ThinHeader