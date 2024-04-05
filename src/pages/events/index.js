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
        </Helmet>
        <div className="">
            <div class="flex flex-col flex-wrap items-center bg-green pt-12 pb-12">
                <h1 class="text-4xl italic text-center">Currently Contemplating</h1>
            </div>
        </div>
        <div className="max-w-[1075px] min-w-72 mx-auto">
            <div class="mb-60">
            <div className="flex justify-center">
                <h1 class="lg:text-start text-7xl mt-4 mb-6 font-['Lato']">Spring 24</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-12 bg-dark-gray border-[16px] rounded border-silver p-10 font-['Shanti']">
                <div className="">
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[3deg] -top-4">
                        <div>
                            <h1 className="text-3xl">February 12th</h1>
                            <h2 className="text-2xl">What is a chair?</h2>
                        </div>
                        <div className="text-md">
                            <p>Philosophy Library, Cocke Hall</p> 
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
                            <p className="text-md">Philosophy Library, Cocke Hall</p> 
                            <p className="text-md">6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[5deg] -top-2">
                        <div>
                            <h1 className="text-3xl">March 13th</h1>
                            <h2 className="text-2xl">The Conditions for Praiseworthiness</h2>
                        </div>
                        <div className="text-md">
                            <p className="text-xl">Guest speaker: </p>
                            <p className="text-xl">Blake Harris</p>
                            <p className="text-md">Philosophy Library, Cocke Hall</p> 
                            <p className="text-md">6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-4deg] -top-6">
                        <div>
                            <h1 className="text-3xl">March 27th</h1>
                            <h2 className="text-2xl">Why Faith is Always Rational</h2>
                        </div>
                        <div className="text-md">
                            <p className="text-xl">Guest speaker: </p>
                            <p className="text-xl">Ethan Butt</p>
                            <p className="text-md">Philosophy Library, Cocke Hall</p> 
                            <p className="text-md">7:00 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[4deg] -top-2">
                        <div>
                            <h1 className="text-3xl">April 8th</h1>
                            <h2 className="text-2xl">How Do We Know What is Possible?</h2>
                        </div>
                          <div className="text-md">
                            <p className="text-xl">Guest speaker: </p>
                            <p className="text-xl">Dakota Jones</p>
                            <p className="text-md">Philosophy Library, Cocke Hall</p> 
                            <p className="text-md">6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-4deg] -top-3">
                        <div>
                            <h1 className="text-3xl">April 16th</h1>
                            <h2 className="text-2xl">Chipotle Fundraiser</h2>
                            <p className="text-xl">Mention us at the register or use code RGTAW6H online</p>
                        </div>
                        <div>
                            <p className="text-2xl">On the corner:</p>
                            <p className="text-2xl">4-8 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[2.5deg] -top-6">
                        <div>
                            <h1 className="text-3xl">April 22nd</h1>
                            <h2 className="text-2xl">Circularity in the Argument from Gradation</h2>
                        </div>
                        <div className="text-md">
                            <p className="text-xl">Prof. Ross Cameron</p>
                            <p className="text-md">Philosophy Library, Cocke Hall</p> 
                            <p className="text-md">6:30 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className= "sticky-note flex flex-wrap flex-col h-64 justify-between w-64 bg-yellow shadow-[5px_5px_7px_rgba(33,33,33,.7)] m-4 p-4 rotate-[-1.5deg] -top-2">
                        <div>
                            <StaticImage src="../../images/the-thinker.png" placeholder="blur"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </Layout>
)

export default Events