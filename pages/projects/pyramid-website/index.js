import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/dist/client/image";
import Cover from "pages/projects/pyramid-website/assets/pwcover.png";
import Wireframe from "pages/projects/pyramid-website/assets/wireframe.png";
import FinalProduct from "pages/projects/pyramid-website/assets/finalproject.png";
import Flows from "pages/projects/pyramid-website/assets/flows.png";











export default function index() {
 return (
    <>
    <NextSeo title="Ecommerce Website in Shopify | Nick Mayernik"/>
      <article className="">
        <section className="max-w-screen-xl mx-auto pb-6 md:pb-20 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-20 items-center">
            <div className="max-w-xl md:col-span-8">
                <h1 className="text-2xl md:text-4xl font-semibold font-display leading-tight text-left max-w-screen-md text-gray-800 pb-6">Implementing a Fitness Ecommerce Website in Shopify</h1>
                <p className="text-base md:text-lg text-gray-700 leading-normal pb-6">To improve usability and to increase online membership sales, I lead user research, product design, and implementation of a new website.</p>
                <ul>
                    <li className="text-base text-gray-700">
                        <strong>Company:</strong> PYRAMID
                    </li>
                </ul>
            </div>

            <div className="md:col-span-4 p-6 bg-gray-100 rounded-2xl">
                <ul className="md:divide-y divide-solid grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-1 items-start">
                    <li className="md:pb-4">
                        <h2 className="text-md font-display font-semibold text-gray-700">Research Methods</h2>
                        <ul className="text-sm md:text-md text-gray-700">
                            <li className="py-0.5">Heuristic Analysis</li>
                            <li className="py-0.5">Guerilla Testing</li>
                            <li className="py-0.5">Backend Usability Testing</li>
                            <li className="py-0.5">A/B Testing</li>
                        </ul>
                    </li>
                    <li className="md:pt-4">
                        <h2 className="text-md font-display font-semibold text-gray-700">Deliverables</h2>
                        <ul className="text-sm md:text-md text-gray-700">
                            <li className="py-0.5">Wireframes</li>
                            <li className="py-0.5 leading-tight">High Fidelity Prototypes</li>
                            <li className="py-0.5">Website</li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
            
        </section>
        <figure className="md:-mx-3">
            <Image src={Cover} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
        </figure>

        <section id="background" className="py-6 md:py-20 px-6 max-w-screen-xl mx-auto">
        <h1 className="max-w-screen-xl mx-auto font-display font-semibold text-2xl">Background</h1>

        <section id="stakeholder interviews" className="py-6 md:py-10">
            <div id="grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                <div id="left-column" className="md:col-span-8">
                    <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Context</h2>
                    <p className="text-base max-w-xl py-2">I was hired by PYRAMID, a sports and fitness club just outside of the Pocanos, to conduct user research and to redesign their ecommerce website. This work builds on the <Link href="projects/generative-research"><a className="underline">generative research</a></Link> that I had conducted in the months prior.</p>
                    <h2 className="pt-6 md:pt-10 text-xl md:text-2xl font-medium font-display pb-1">Approach</h2>
                    <p className="text-base max-w-xl py-2">With understanding of the needs and pain points, this portion of the project focused on generating design solutions and testing them with evaluative research. When I arrived at desgins validated by research, I had a green light to implement and ship them.</p>
                </div>
                <aside className="md:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                            <ul className="divide-y divide-solid text-base text-gray-700">
                                <li className="py-3">
                                    <h3 className="font-semibold font-display text-md">Project Length</h3>
                                    <ul>
                                        <li className="text-md">3 months</li>
                                    </ul>
                                </li>
                                <li className="py-3">
                                    <h3 className="font-semibold font-display text-md">Research Timeline</h3>
                                    <ul>
                                        <li className="text-md">Heuristic Evaluation: 2 weeks</li>
                                        <li className="text-md">Guerilla Testing: 2 weeks</li>
                                        <li className="text-md">Backend Usability Testing: 1 week</li>
                                        <li className="text-md">A/B Testing</li>                                        
                                    </ul>
                                </li>
                                <li className="py-3">
                                    <h3 className="font-semibold font-display text-md">Design & Implementation Timeline</h3>
                                    <ul>
                                        <li className="text-md">Wireframing: 1 week</li>
                                        <li className="text-md">Prototyping: 2 weeks</li>
                                        <li className="text-md">Implementation: 1 month</li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
            </div>
        </section>
        
        </section>
        <hr />
        <section id="methods" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="max-w-screen-xl mx-auto font-display font-semibold text-2xl">Research</h1>
            <section id="stakeholder interviews" className="py-6 md:py-10">
                <div id="grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                    <div id="left-column" className="md:col-span-8">
                        <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Content Inventory</h2>
                        <p className="text-base max-w-xl py-2">To understand the current state of {"PYRAMID's"} experiences, I wrote scripts in R to gather each piece of content from {"PYRAMID's"} website and socials.</p>
                    </div>
                    <aside className="md:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Pieces of Content Inventoried</h3>
                                <ul>
                                    <li className="text-md">3000</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                   
                </div>
            </section>

            <section id="stakeholder interviews" className="py-6 md:py-10">

                <div id="grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                    <div id="left-column" className="md:col-span-8">
                        <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Heuristic Evaluation</h2>
                        <p className="text-base max-w-xl py-2">Using the content gathered in my inventory, I evaluated each through the lens of {"Nielsen's"} 10 Usability Heuristics.</p>
                        <p className="text-base max-w-xl py-2">The four areas that scored lowest were <strong>consistency and standards</strong>, <strong>flexibility and efficiency of use</strong>, <strong>aesthetic and minimalist design</strong> and <strong>recognizing, diagnosing, and recovering from errors</strong>.</p>
                        <p className="text-base max-w-xl py-2">To score quick wins, I constructed the foundations of {"PYRAMID's"} design system and implemented them </p>


                    </div>
                    <aside className="md:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Pages Evalated</h3>
                                <ul>
                                    <li className="text-md">20</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Heuristics Used</h3>
                                <ul>
                                    <li className="text-md">{"Nielsen's"} Usability Heuristics</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                   
                </div>
            </section>

            <section id="persona exercise" className="py-6 md:py-10">
                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div id="left-column" className="lg:col-span-8">
                        <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Guerilla Usability Testing</h2>
                        <p className="text-base max-w-xl py-2">Would customers prefer exploring memberships in a product-grid layout like Gymshark?</p>
                        <p className="text-base max-w-xl py-2">To test this, I constructed a prototype of a membership product page in InVision, and asked guests entering the gym to perform the steps to complete the transaction.</p>
                        <p className="text-base max-w-xl py-2">Afterward, participants completed a survey about how they found the interface compared to the existing experience.</p>
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">15 members who attended the club and purchased online previously</li>
                                </ul>
                            </li>
                            
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Session Length</h3>
                                <ul>
                                    <li className="text-md">10 minutes</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    
                </div>
            </section>

            <section id="persona exercise" className="py-6 md:py-10">

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div id="left-column" className="lg:col-span-8">
                        <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Usability Testing Ecommerce Platforms</h2>
                        <p className="text-base max-w-xl py-2">With positive feedback from members, stakeholders were interested in replacing their previous ecommerce stack with one built on either Squarespace or Shopify.</p> 
                        <p className="text-base max-w-xl py-2">To understand which service was more usable for employees, I used moderated usability tests with tasks with tasks relevant to each role. Participants used the speak aloud method, and filled out a survey after completing the study.</p>
                        <p className="text-base max-w-xl py-2">Post-test interviews showed that staff members unanimously preferred the layouts and interactions of Shopify over Squarespace.</p>
                        
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">Five front-desk employees</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Approach</h3>
                                <ul>
                                    <li className="text-md">Moderated, Observational</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Session Length</h3>
                                <ul>
                                    <li className="text-md">25 minutes</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    
                </div>
            </section>

            <section id="persona exercise" className="py-6 md:py-10">

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div id="left-column" className="lg:col-span-8">
                        <h2 className="text-xl md:text-2xl font-medium font-display pb-1">A/B Testing</h2>

                        <p className="text-base max-w-xl py-2">Another remaining question from generative research was about the effectiveness of the most popular card-sorting arrangement at increasing website conversion.</p>
                        <p className="text-base max-w-xl py-2">Using Google Optimize, I ran an A/B test comparing conversion rates using the card-sorted navigation and the previous navigation layout.</p>
                        <p className="text-base max-w-xl py-2">Visitors who were served the card-sorted navigation converted significantly more than visitors who were served the previous navigation layout.</p>
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Sample Size</h3>
                                <ul>
                                    <li className="text-md">1200 per variation</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Statistical Significance</h3>
                                <ul>
                                    <li className="text-md">95%</li>
                                </ul>
                            </li>   
                        </ul>
                    </aside>
                    
                </div>
            </section>
        </section>

        <hr /> 
        <section id="synthesis & deliverables" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="font-display font-semibold text-2xl">Synthesis, Design & Deliverables</h1>

            <section id="persona consolidation" className="py-6 md:py-10">
                <h2 className="max-w-xl text-xl md:text-2xl font-medium font-display pb-1">User Flows</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">To begin prototyping, I constructed user flows tracing each page that would need to be mocked.</p>
                    </div>
                    
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={Flows} alt="Introduction to each persona" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">General flow structure</figcaption>
                    </figure>
                </div>
            </section>
            

            <section id="persona consolidation" className="py-6 md:py-10">
                <h2 className="max-w-xl text-xl md:text-2xl font-medium font-display pb-1">Wireframes</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">From those flows, I constructed wireframes of page layouts in Sketch. This was enough of a foundation was to begin designing in {"Shopify's"} page builder, since no handoff was involved.</p>
                    </div>
                    
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={Wireframe} alt="Introduction to each persona" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Mobile and desktop wireframes of the home and product pages</figcaption>
                    </figure>
                </div>
            </section>
        </section>

        <hr />

        <section id="methods" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="max-w-screen-xl mx-auto font-display font-semibold text-2xl">Final Product</h1>
            <section id="stakeholder interviews" className="py-6 md:py-10">
                <div id="grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div id="left-column" className="md:col-span-8">
                        <p className="text-base max-w-xl py-2">From those wireframes, I built upon a Shopify theme template, using Liquid and SASS to match the interface with {"PYRAMID's"} design system. The website launched one week before Black Friday, the start of the {"club's"} biggest two-month sales period.</p>
                    </div>
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={FinalProduct} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Desktop website screenshots</figcaption>
                    </figure>
                   
                    </div>
                </section>
            </section>
            <hr />


        <section id="synthesis & deliverables" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="font-display font-semibold text-2xl">Conclusion</h1>
            

            <section id="persona consolidation" className="pt-6 md:pt-10 pb-5">
                <h2 className="max-w-xl text-xl md:text-2xl font-medium font-display pb-1">Outcomes</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">In the first year post-launch, sales increased by <strong>300 percent</strong>, paying for investment costs within its first month. In the two years since, sales have steadily increased, helping PYRAMID remain profitable during pandemic-related club closures.</p>
                    </div>
                    
                
                </div>
            </section>


            <section id="mapping their journies" className="pb-6 md:pb-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Reflections</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">This project demonstrates the opportunity fitness clubs have to improve online sales by implementing shorter, more user-friendly signup processes. To date, {"I'm"} yet to see another fitness club adopt this strategy despite its success at PYRAMID. {"What's"} more, this project exposed me to the variety of ways that UX could have impact at fitness clubs, to the point that {"I've"} continued working with PYRAMID for the past three years.</p>
                    </div>
                </div>
            </section>
            </section>
        
      
    </article>
    </>
 )
};
