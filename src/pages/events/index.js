import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Events = () => (
    <Layout>
    <div>
        <Helmet>
            <title>Events | The Philosohpy Club at UVA</title>
            <meta name="description" content="The schedule of the semester"></meta>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')
            </style>
        </Helmet>
        <div className="">
            <div class="flex flex-col flex-wrap items-center bg-blue pt-12 pb-12">
                <h1 class="text-4xl italic text-center">Currently Contemplating</h1>
            </div>
        </div>
        <div className="max-w-[1075px] min-w-72 mx-auto">
            <div class="mb-60">
            <div className="flex justify-center">
                <h1 class="lg:text-start text-7xl mt-4 mb-9 font-sans">Spring 24</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-12 bg-dark-gray border-[16px] rounded border-silver p-10">
                <div className="">
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[4deg]">
                        <div>
                            <h1 className="text-3xl">February 12th</h1>
                            <h2 className="text-2xl">What is a chair?</h2>
                        </div>
                        <div className="text-md">
                            <p>Philosohpy Library, Cocke Hall</p> 
                            <p>6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-3deg]">
                        <div>
                            <h1 className="text-3xl">February 28th</h1>
                            <h2 className="text-2xl">Criminal Punishment</h2>
                        </div>
                        <div className="text-md">
                            <p className="text-xl">Guest speaker: </p>
                            <p className="text-xl">Gabriel Dumet</p>
                            <p className="text-md">Philosohpy Library, Cocke Hall</p> 
                            <p className="text-md">6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[5deg]">
                        <div>
                            <h1 className="text-3xl">March 13th</h1>
                            <h2 className="text-2xl">The Conditions for Praiseworthiness</h2>
                        </div>
                        <div className="text-md">
                            <p className="text-xl">Guest speaker: </p>
                            <p className="text-xl">Blake Harris</p>
                            <p className="text-md">Philosohpy Library, Cocke Hall</p> 
                            <p className="text-md">6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-5deg]">
                        <div>
                            
                            <h1 className="text-3xl">March 27th</h1>
                            <h2 className="text-2xl">TBD</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[4deg]">
                        <div>
                            <h1 className="text-3xl">April 8th</h1>
                            <h2 className="text-2xl">TBD</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 rotate-[-4deg]">
                        <StaticImage src="../../images/the-thinker.png" placeholder="blur"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </Layout>
)

export default Events