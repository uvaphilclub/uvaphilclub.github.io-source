import * as React from "react"
import { Link } from "gatsby"

const MobileMenu = () => ( 
    <div id="mobile-menu" className="absolute top-0 bg-slate-50 w-full
    text-5xl flex-col justify-center origin-top animate-open-menu">
        <div className="flex flex-wrap justify-end">
            <button className="text-8xl mt-2"> 
                &times;
            </button>
        </div>
        <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
            <Link className="w-full text-center py-6 hover:opacity-70" to="/">Home</Link>
            <Link className="w-full text-center py-6 hover:opacity-70" to="/events">Events</Link>
            <Link className="w-full text-center py-6 hover:opacity-70" to="/archive">Archive</Link> 
            <Link className="w-full text-center py-6 hover:opacity-70" to="/contact">Contact</Link>
        </nav>
    </div>
)

export default MobileMenu