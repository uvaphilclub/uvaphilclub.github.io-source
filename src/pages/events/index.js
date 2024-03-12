import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"

const Events = () => (
    <Layout>
    <div>
        <div className="bg-blue">
            <div class="flex flex-col flex-wrap items-center pt-12 pb-12">
                <h1 class="text-4xl italic text-center">Currently Contemplating</h1>
            </div>
        </div>
        <div className="max-w-4xl mx-auto">
            <div class="px-14 mb-60">
            <div className="flex flexwrap justify-center">
                <h1 class="text-3xl mt-12 mb-9">Spring 24</h1>
            </div>
                <ul class="list-container space-y-10">
                    <li>
                        <h1>February 12th - Welcome to the semester</h1>
                        <p>Balz Philosohpy Library, Cocke Hall - 6:30 PM</p>
                        <p>What is a chair?</p>
                    </li>
                    <li>
                        <h1>February 28th - Criminal Punishment</h1>
                        <p>Balz Philosohpy Library, Cocke Hall - 6:30 PM</p>
                        <p>Guest speaker - Gabriel Dumet</p>
                    </li>
                    <li>
                        <h1>March 13th - The Conditions For Praiseworthiness</h1>
                        <p>Balz Philosophy Library, Cocke Hall - 6:30 PM</p>
                        <p>Guest speaker - Blake Harris</p>
                    </li>
                    <li>
                        <h1>March 27th</h1>
                        <p>TBD</p>
                    </li>
                    <li>
                        <h1>April 8th</h1>
                        <p>TBD</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </Layout>
)

export default Events