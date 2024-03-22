import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import legal from "../../images/legal-pad.jpg"


const Archive = () => (
    <Layout>
    <Helmet>
        <title>Archive | The Philosohpy Club at UVA</title>
        <meta name="description" content="The past events we've hosted"></meta>
    </Helmet>
    <div class="flex flex-col flex-wrap items-center pt-12 pb-12 bg-blue">
        <h1 class="text-4xl italic text-center">Previously pondered</h1>
    </div>
        <div class="flex flex-col flex-wrap max-w-4xl mx-auto mt-12 px-14 mb-60 font-['Lato']" > 
            <div className="bg-brown h-24"></div>
            <div className="flex flex-wrap bg-yellow h-14">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-4xl self-center">
                    <p className="ml-4">Fall 23</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                    <p className="ml-4"><span className="text-4xl mr-4">&#10003;</span>
                    Affirmative Action and Values in Higher Education</p>
                </div>
            </div>
          
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                    <p className="ml-4"> <span className="text-4xl mr-4">&#10003;</span>
                    Arguments for the Existence of God</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                    <p className="ml-32 italic">Guest Speaker – Robert Ziegler</p>
                </div>
            </div>
           
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                <p className="ml-4"> <span className="text-4xl mr-4">&#10003;</span>
                    Extraordinary Objects: Metaphysics</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                <p className="ml-32 italic">Guest Speaker – Evan Welchance</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center"></div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-4xl self-center">
                    <p className="ml-4">Spring 23</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                <p className="ml-4"> <span className="text-4xl mr-4">&#10003;</span>
                    ChatGPT and the Human Mind</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center">
                <p className="ml-32 italic">Guest Speaker – Nikolina Cetic</p>
                </div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center"></div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center"></div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center"></div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center"></div>
            </div>
            <div className="flex flex-wrap bg-yellow h-14 border-t-2">
                <div className="basis-1/6 border-r-4 border-red"></div>
                <div className="basis-5/6 text-2xl self-center"></div>
            </div>

        </div>
    </Layout>
)

export default Archive