import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="flex flex-wrap flex-col items-center">
    <div className="flex flex-wrap justify-center bg-gray w-full items-center pb-4 ">
        <div className="flex flex-wrap flex-col items-start mt-6 basis-10 md:basis-full max-w-min">
            <h1 className="text-7xl tracking-tighter shrink whitespace-nowrap"><span className="font-bold">THE</span> PHILOSOPHY CLUB</h1>
            <h2 className="text-3xl md:self-end">@UVA</h2>
        </div >
        {/* <button id="hamburger-button" className = "text-6xl md:hidden cursor-pointer self-start mt-10 mr-2 -ml-24">
            &#9776;
        </button> */}
    </div>
    <div className="flex flex-wrap justify-center bg-blue w-full">
        <nav className=" md:block"> 
            <ul className="">
                <li className="md:space-x-16 text-2xl my-4">
                    <Link className="hover:text-white py-4 px-8" to="/">Home</Link>
                    <Link className="hover:text-white py-4 px-8" to="/events">Events</Link>
                    <Link className="hover:text-white py-4 px-8" to="/archive">Archive</Link> 
                    <Link className="hover:text-white py-4 px-8" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  </header> 
)

export default Header
