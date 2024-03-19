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
        <div className="bg-blue">
            <div class="flex flex-col flex-wrap items-center pt-12 pb-12">
                <h1 class="text-4xl italic text-center">Currently Contemplating</h1>
            </div>
        </div>
        <div className="max-w-6xl mx-auto">
            <div class="px-14 mb-60">
            <div className="flex">
                <h1 class="text-7xl mt-12 mb-9">Spring 24</h1>
            </div>
            <div className="flex flex-wrap gap-16">
                <div className="bg-light-black rounded-md ">
                    <div className="flex flex-wrap flex-col h-64 justify-between w-64 bg-blue rounded-md m-4 p-4">
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
                    <div className="flex flex-wrap flex-col h-64 justify-between w-64 bg-blue rounded-md m-4 p-4 shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)]">
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
                    <div className="flex flex-wrap flex-col h-64 justify-between w-64 bg-blue rounded-md m-4 p-4">
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
                    <div className="flex flex-wrap flex-col h-64 justify-between w-64 bg-blue rounded-md m-4 p-4">
                        <div>
                            <h1 className="text-3xl">March 27th</h1>
                            <h2 className="text-2xl">TBD</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap flex-col h-64 justify-between w-64 bg-blue rounded-md m-4 p-4">
                        <div>
                            <h1 className="text-3xl">April 8th</h1>
                            <h2 className="text-2xl">TBD</h2>
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