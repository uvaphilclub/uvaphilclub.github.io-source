import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

const ThinHeader = () => (
    <div id="outer-container">
      <Helmet>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Shanti&display=swap')
</style>
      </Helmet>
        <header className="flex flex-wrap flex-col content-center 2xl:flex-row justify-between border-b-4 pb-2 border-white bg-gray">
          <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-end ml-4">
            <Link className="hidden sm:block" to="/">
              <StaticImage className="rounded-full my-1 sm:-mb-1 mr-2" src="../images/Phil Club Full Logo.png" height={72} width={72} alt="Club Icon"/>
            </Link>
            <h1 className="text-5xl sm:text-7xl">THE <span className="font-bold">PHILOSOPHY CLUB</span></h1>
            <h2 className="text-2xl sm:text-3xl">@UVA</h2>
            <div className="sm:hidden w-full flex flex-wrap justify-center">
              <Link to="/">
                <StaticImage className="rounded-full my-1 sm:-mb-1 mr-2" src="../images/Phil Club Full Logo.png" height={72} width={72} alt="Club Icon"/>
              </Link>
            </div>
          </div>
          <nav className="md:block self-center 2xl:self-auto"> 
              <ul className="hidden md:block">
                  <li className="text-2xl mt-6">
                    <Link className="font-bold text-white hover:text-black py-4 px-7" activeClassName="underline" to="/">Home</Link>
                    <Link className="font-bold text-white hover:text-black py-4 px-7" activeClassName="underline" to="/events">Events</Link>
                    <Link className="font-bold text-white hover:text-black py-4 px-7" activeClassName="underline" to="/archive">Archive</Link> 
                    <Link className="font-bold text-white hover:text-black py-4 px-7" activeClassName="underline" to="/contact">Contact</Link>
                  </li>
              </ul>
          </nav>
        </header>
    </div>
)

export default ThinHeader