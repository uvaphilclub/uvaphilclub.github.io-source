import * as React from "react"
import { Link } from "gatsby"

const ThinHeader = () => (
    <header className="flex flex-wrap justify-between border-b-4 pb-2 border-white bg-gray">
        <div className="flex flex-wrap items-end ml-4">
            <h1 className="text-7xl"><span className="font-bold">THE</span> PHILOSOPHY CLUB</h1>
            <h2 className="text-3xl">@UVA</h2>
        </div>
        <nav className="md:block"> 
            <ul className="">
                <li className="md:space-x-16 text-2xl mt-6">
                    <Link className="font-bold text-white hover:text-black py-4 px-8" to="/">Home</Link>
                    <Link className="font-bold text-white hover:text-black py-4 px-8" to="/events">Events</Link>
                    <Link className="font-bold text-white hover:text-black py-4 px-8" to="/archive">Archive</Link> 
                    <Link className="font-bold text-white hover:text-black py-4 px-8" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default ThinHeader