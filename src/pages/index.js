import * as React from "react"
import {useState, useEffect} from "react";
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import QuoteComponent from "../components/rotatingQuote"
import SimpleImageSlider from "react-simple-image-slider"
import FadeInFromRight from "../components/fadeInFromRight"
import FadeInFromLeft from "../components/fadeInFromLeft"
import FadeInLeftOnScroll from "../components/fadeInLeftOnScroll"
import FadeInRightOnScroll from "../components/fadeInRightOnScroll"

const IndexPage = () => 
{
    const[slideShowItems, setSlideShowItems] = useState([]);
    useEffect(() => {
        fetch('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                {
                    slideShowImages {
                        image {
                          url
                        }
                      }
                }`
            })
        })
    .then(response => response.json())
    .then(data => {
        if (data && data.data && data.data.slideShowImages){
            const images=[];
            for(let i = 0; i < data.data.slideShowImages.length; i++){
                images.push({ url: data.data.slideShowImages[i].image.url});
            }
            setSlideShowItems(images); 
        }
        else {
            console.error("Unexpected response format:", data);
        }
    })
    .catch(error => {
    console.error("Error fetching data:", error);
    });
    }, []);

    
   return (
  <Layout>
    <Helmet>
        <title>Home | The Philosophy Club at UVA</title>
        <meta name="description" content="The official website of the Philosophy Club at UVA"/>
    </Helmet>
   <body className="min-h-screen overflow-x-hidden">
        <div className="hidden min-h-64 h-auto"></div>
        <div className="flex flex-col xl:flex-row bg-blue justify-center pt-4 pb-20 items-center sm:gap-12">
            <FadeInFromLeft>
            <div className="flex flex-col mb-4  sm:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto xl:ml-12 2xl:ml-12">
                <div className="hidden sm:block text-6xl 2xl:text-8xl ">
                    <h1>THE</h1>
                    <h1 className="font-bold">PHILOSOPHY CLUB<span className="text-3xl 2xl:text-5xl font-normal">@UVA</span></h1>
                </div>
                <div className="bg-lightsilver sm:shadow-[30px_30px_0px_0_rgba(0,0,0,0.3)] p-6 mt-10 ">
                    <div className="max-w-64">
                        <h1 className="text-5xl text-start italic">Our Mission</h1>
                    </div>
                    <ul className="ml-6 list-disc font-['Shanti']">
                        <li className="mt-5 text-2xl">Bring together those interested in philosophical inquiry through discussions and events. </li>
                        <li className="mt-5 text-2xl">Promote the study of philosophy to all of UVA and the broader Charlottesville area through community outreach.</li>
                        <li className="mt-5 text-2xl">Encourage a stronger connection between students and faculty in the Department of Philosophy.</li>
                    </ul>
                </div>
            </div>
            </FadeInFromLeft>
            <FadeInFromRight>
            <div className="sm:mx-auto mt-20 basis-1/2  2xl:max-w-5xl">
                <div className="outerBevel">
                <div className="flatSurface">
                <div className="innerBevel">
                    <div className="block md:hidden">
                        <SimpleImageSlider 
                            key={slideShowItems.length} //the key forces the component to rerender once it fetches the images
                            width={325}
                            height={250}
                            images={slideShowItems}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={10}
                        />
                    </div>
                    <div className="hidden md:block 2xl:hidden">
                        <SimpleImageSlider 
                            key={slideShowItems.length}
                            width={600}
                            height={428}
                            images={slideShowItems}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={10}
                        />
                    </div>
                    <div className="hidden 2xl:block">
                        <SimpleImageSlider 
                            key={slideShowItems.length}
                            width={700}
                            height={500}
                            images={slideShowItems}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={10}
                        />
                    </div>
                </div>
                </div>
                </div>
            </div>
            </FadeInFromRight>
        </div>
        <div className="bg-lightsilver">
            <div className="flex flex-wrap flex-col mx-6 py-16 justify-center"> 
                <div className="flex flex-wrap gap-x-20 justify-center">
                <FadeInLeftOnScroll>
                    <div className="w-64 self-center">
                        <h1 className="hidden lg:block text-6xl italic">About</h1>
                    </div>
                </FadeInLeftOnScroll>
                <FadeInRightOnScroll >
                    <div className="max-w-2xl bg-blue rounded p-6 sm:shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)] font-['Shanti']">
                        <h1 className="lg:hidden text-4xl text-white">About</h1>
                        <p className="text-lg font-medium text-white">The Philosophy Club at UVA is a student run CIO. We aim to provide an environment for 
                            those interested in philosophy to come together to discuss what fascinates them and meet others
                            with similar interests. We host several meetings a semester and are branching out into hosting a 
                            wider variety of events including major info sessions, community outreach, and fundraisers. 
                        </p>
                    </div>
                </FadeInRightOnScroll>
                </div>
                <div className="flex flex-wrap gap-x-20 mt-16 justify-center">
                <FadeInLeftOnScroll delay={500}>   
                    <div className="w-64 self-center">
                        <h1 className="hidden lg:block text-6xl italic">Meetings</h1>
                    </div>
                </FadeInLeftOnScroll> 
                <FadeInRightOnScroll delay={500}>
                    <div className="max-w-2xl font-medium bg-blue text-white rounded p-6 sm:shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)] font-['Shanti']">
                        <h2 className="lg:hidden text-3xl">Meetings</h2>
                        <p className="text-lg text-white">
                                Meetings are where the discussion happens! Meeting are usually either student led or feature a 
                                guest speaker from the philosophy department.
                            </p>
                        <ul className="list-disc text-lg ml-6">
                            <li>
                            <p className="text-white">Topics cover all branches of 
                                philosophy, both in pure and applied philosophy. 
                                No formal knowledge of philosophy is necessary to leave feeling thoughtful, so feel free to stop 
                                by and listen in. </p>
                            </li>
                            <li>
                            <p className="text-white">
                                Usually held in the Philosophy Library (located in Cocke Hall), but locations may vary.
                            </p></li>
                            <li>
                            <p className="text-white">
                                Complementary donuts and coffee are also provided at each meeting.
                            </p></li>
                        </ul>
                    </div>
                </FadeInRightOnScroll>
                </div>   
                <div className="flex flex-wrap max-w-full gap-x-20 mt-16 justify-center">
                <FadeInLeftOnScroll delay={1000}>
                    <div className="w-64 self-center">
                        <h1 className="hidden lg:block text-6xl italic">Also visit</h1>
                    </div>
                </FadeInLeftOnScroll>
                <FadeInRightOnScroll delay={1000}>
                    <div className="max-w-full sm:max-w-2xl font-medium text-white bg-blue rounded p-6 sm:shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)] font-['Shanti']">
                        <h2 className="lg:hidden text-3xl">Also visit</h2>
                        <h2 className="text-2xl lg:text-3xl">The Corcoran Department of Philosophy</h2>
                        <p className="text-lg">
                            Special thanks to our official advisor Mark Jeter and the Corcoran Department of Philosophy for making this club possible!
                        </p>
                        <p className="text-lg">
                            Learn more about the UVA Department of Philosophy at: <span><a className="underline font-bold text-xl" href="https://philosophy.virginia.edu/">https://philosophy.virginia.edu/</a></span>
                        </p> 
                    </div>
                </FadeInRightOnScroll>
                </div>
            </div>
        </div>
        <div className="bg-blue">
            <div className="flex flex-wrap flex-col justify-center max-w-4xl mx-4 sm:m-auto "> 
                <h2 className="text-2xl mt-12 text-center font-['Shanti']">Join the <a href="https://groupme.com/join_group/93261535/MxmKm2Fi" className="underline">GroupMe</a> to stay the most up to date!</h2>
                <div className="flex justify-center flex-wrap mt-8">
                    <div className="size-40">
                        <StaticImage className="rounded-md" src="../images/groupme.jpg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-6 py-12 max-w-5xl mx-auto ">
            <QuoteComponent />
            </div>
        </div>
        <div className="h-full bg-gray">
            <div className="flex flex-wrap justify-center max-w-4xl mx-4 lg:m-auto"> 
                <div className="mt-6 text-xs">
                    <p>Although this organization has members who are University of Virginia students and may
                        have University employees associated or engaged in its activities and affairs, the 
                        organization is not a part of or an agency of the University. It is a separate and 
                        independent organization which is responsible for and manages its own activities and 
                        affairs. The University does not direct, supervise or control the organization and is 
                        not responsible for the organization's contracts, acts or omissions.  
                    </p>
                </div>
            </div>`
        </div>
        
    </body>
  </Layout>
)
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
