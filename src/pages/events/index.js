import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"

const Events = () => (
    <Layout>
    <div class="flex flex-col flex-wrap items-center mt-16 mb-4">
        <h1 class="text-4xl italic text-center">What're we thinking about?</h1>
        <h1 class="text-3xl mt-9">Spring 24</h1>
    </div>
    <div class="px-14 mb-60">
        <ul class="list-container space-y-10">
            <li>
                <h1>February 12th</h1>
                <p>General meeting</p>
            </li>
            <li>
                <h1>February 28th</h1>
                <p>TBD</p>
            </li>
            <li>
                <h1>March 13th</h1>
                <p>TBD</p>
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
    </Layout>
)

export default Events