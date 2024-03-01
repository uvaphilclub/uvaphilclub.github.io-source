import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"

const Archive = () => (
    <Layout>
    <div class="flex flex-col flex-wrap items-center pt-12 pb-12 bg-blue">
        <h1 class="text-4xl italic text-center">Previously pondered</h1>
    </div>
    <div className="max-w-4xl mx-auto mt-12">
        <div class="flex flex-col flex-wrap px-14 mb-60">
            <h1 class="text-3xl self-center mb-4">Fall 23</h1>
            <ul class="list-container space-y-10">
                <li>
                    <h1>Affirmative Action and Values in Higher Education</h1>
                </li>
                <li>
                    <h1>Arguments for the Existence of God</h1>
                    <p>Guest Speaker – Robert Ziegler</p>
                </li>
                <li>
                    <h1>Extraordinary Objects: Metaphysics</h1>
                    <p>Guest Speaker – Evan Welchance</p>
                </li>
            </ul>
            <h1 class="text-3xl self-center mt-10 mb-4">Spring 23</h1>
            <ul class="list-container space-y-10">
                <li>
                    <h1>ChatGPT and the Human Mind</h1>
                    <p>Guest Speaker – Nikolina Cetic</p>
                </li>
            </ul>
        </div>
    </div>
    </Layout>
)

export default Archive