import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="flex flex-wrap flex-col items-center">
    <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap flex-col items-start mt-10 basis-10 md:basis-full">
            <h1 className="text-7xl tracking-tighter shrink"><span className="font-bold">THE</span> PHILOSOPHY CLUB</h1>
            <h2 className="text-3xl md:self-end">@UVA</h2>
        </div >
        <button id="hamburger-button" className = "text-6xl md:hidden cursor-pointer self-start mt-10 mr-2 -ml-24">
            &#9776;
        </button>
    </div>
    <div>
        <nav className="hidden md:block"> 
            <ul className="mt-8">
                <li className="md:space-x-32 text-2xl">
                <Link className="hover:opacity-70" to="/">Home</Link>
                <Link className="hover:opacity-70" to="/events">Events</Link>
                <Link className="hover:opacity-70" to="/archive">Archive</Link> 
                <Link className="hover:opacity-70" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  </header> 
)

export default Header
