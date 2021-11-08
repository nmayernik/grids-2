import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/dist/client/image";
import Cover from "pages/projects/pyramid-strategy/assets/generativecover.png";
import CardSort from "pages/projects/pyramid-strategy/assets/cardsort.png";
import Chatbot from "pages/projects/pyramid-strategy/assets/chatbot.png";
import StakeholderQuestions from "pages/projects/pyramid-strategy/assets/samplequestions.png";
import Persona from "pages/projects/pyramid-strategy/assets/samplepersona.png";
import UserQuestions from "pages/projects/pyramid-strategy/assets/userinterviews.png";
import FutureQuestions from "pages/projects/pyramid-strategy/assets/futurequestions.png";
import NewPersonas from "pages/projects/pyramid-strategy/assets/newpersonas.png";
import JourneyMap from "pages/projects/pyramid-strategy/assets/journeymap.png";
import AffinityDiagram from "pages/projects/pyramid-strategy/assets/affinitydiagram.png";
import { BackpackIcon, Link1Icon } from "@modulz/radix-icons";










export default function index() {
 return (
    <>
    <NextSeo title="Generative Research for Ecommerce Strategy | Nick Mayernik"/>
        <main className="max-w-max mx-auto grid md:grid-cols-12 gap-8 px-10">
            <section id="table of contents" className="col-span-3 hidden lg:block justify-self-start">
                <div className="bg-gray-100 p-6 mr-12 rounded-xl sticky top-10 inline-block">
                    <h2 className="text-base font-display font-semibold pb-1">Table of Contents</h2>
                    <nav className="list-none">
                        <li className="font-medium items-center py-0.5">
                            <Link href="#background">
                                <a>
                                    Background <Link1Icon className="inline"/>
                                </a>
                            </Link>
                        </li>
                        <li className="font-medium items-center py-0.5">
                            <Link href="#methods">
                                <a>
                                    Methods <Link1Icon className="inline"/>
                                </a>
                            </Link>
                        </li>
                            <li className="pl-3 py-0.5">Stakeholder Interviews</li>
                            <li className="pl-3 py-0.5">Persona Workshop</li>
                            <li className="pl-3 py-0.5">Member Interviews</li>
                            <li className="pl-3 py-0.5">True Intent Studies</li>
                            <li className="pl-3 py-0.5">Card Sorting</li>
                        <li className="font-medium items-center py-0.5">
                            <Link href="#deliverables">
                                <a>
                                    Deliverables <Link1Icon className="inline"/>
                                </a>
                            </Link>
                        </li>                            
                            <li className="pl-3 py-0.5">Personas</li>
                            <li className="pl-3 py-0.5">Customer Journey Maps</li>
                            <li className="pl-3 py-0.5">Affinity Diagram</li>
                        <li className="font-medium items-center py-0.5">
                            <Link href="#conclusion">
                                <a>
                                    Conclusion <Link1Icon className="inline"/>
                                </a>
                            </Link>
                        </li>      
                    </nav>
                </div>
            </section>
            <article className="col-span-9">
                <section className="grid grid-cols-9">
                    <div className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                        <h1 className="md:px-6 text-3xl font-display font-semibold">Generative Research for {"PYRAMID's"} Ecommerce Redesign</h1>
                        <p className="md:px-6 pt-6 text-lg">In the discovery phase of a website redesign, I lead user and stakeholder research to understand the current product state and future needs.</p>
                        <div className="pt-6 px-6 content-center">
                            <p className="text-base"><strong>Client:</strong> PYRAMID</p>
                            <p className="text-base"><strong>Project dates:</strong> January-May 2018</p>

                        </div>

                        <figure className="py-12">
                            <Image src={Cover} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100} className="rounded-xl"></Image>
                        </figure>
                        <hr className="my-16 -mx-3" />
                    </div>
                    <aside className="col-span-3">

                    </aside>
                </section>
                
                <section id="background" className="grid grid-cols-9 items-center">
                    <div className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                        <h2 className="md:px-6 text-2xl font-display font-semibold">Background</h2>
                        <h3 className="md:px-6 pt-8 text-lg font-semibold">About PYRAMID</h3>
                        <p className="md:px-6 py-2 text-base">PYRAMID is Lehighton, PA’s largest sports and fitness club serving Carbon, Schuylkill, and Lehigh Counties. As my first project with PYRAMID, I was hired to <strong>conduct research and to implement a new website for the club</strong>. Stakeholders wanted to increase online sales, and to have their website serve as the primary point of contact with their customers.</p>
                        <h3 className="md:px-6 pt-8 text-lg font-semibold">Approach</h3>
                        <p className="md:px-6 py-2 text-base">PYRAMID had never conducted research before, meaning that generative research would both offer insights about members and introduce stakeholders to UX strategy. My role involed other design and development tasks, so research composed about 3/5 of my working time blocks.</p>
                        <hr className="my-16 -mx-3" />
                    </div>
                    <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                    
                    </aside>
                </section>

                <section className id="methods">
                        <div id="grid" className="grid grid-cols-9 items-center">
                        <section className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h2 className="md:px-6 text-2xl font-display font-semibold">Methods</h2>
                            <h3 id="stakeholder interviews" className="md:px-6 pt-8 text-lg font-semibold">Stakeholder Interviews</h3>
                            <p className="md:px-6 py-2 text-base">To kick off the project, I recruited the four leading roles at the company for semi-structred, conversational interviews. My goal was to understand the workflows of internal systems; where {"stakeholders'"} pain points were, and what might help them in the future. I also wanted to gauge their perceptions of members.</p>
                            <p className="md:px-6 py-2 text-base">They offered valuable feedback about <strong>ZenPlanner</strong>, their member-management system and <strong>SpeedMobi</strong>, their WYSIWIG website manager. They clearly maintained close relationships with their members, which could provide additional insights.</p>
                            <figure className="py-12">
                                <Image src={StakeholderQuestions} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Sample stakeholder interview questions</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="persona-workshop" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">Persona Workshop</h3>
                            <p className="md:px-6 py-2 text-base">To leverage {"stakeholders'"} knowledge of their members, I led a participatory workshop where we constructed proto-personas. These were not expected to be representative clusters, but instead a jumping-off point for future refinement. My hope was that these would help me understand who I might encounter in interviews.</p>
                            <p className="md:px-6 py-2 text-base">Participants had 15 minutes per persona to build a total of five that they felt captured their membership base. These included personal attributes and attributes dealing with their relationship to PYRAMID.</p>
                            <figure className="py-12">
                                <Image src={Persona} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Proto-persona of John, a senior member</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="member-interviews" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">Member Interviews</h3>
                            <p className="md:px-6 py-2 text-base">To inform customer journey maps, stakeholders connected me with members who I recruited for 20 minute interviews. These interviews followed a walk-and-talk approach on treadmills or around the club.</p>
                            <p className="md:px-6 py-2 text-base">I wanted to understand how {"members'"} interacted with PYRAMID online, where their pain points were, and where else they shopped online.</p>
                            <figure className="py-12">
                                <Image src={UserQuestions} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Questions for members</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="true-intent" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">True Intent Study</h3>
                            <p className="md:px-6 py-2 text-base">Using a Drift chatbot, I conducted an unmoderated true intent study to explore the customer journey in real-time. The chatbot asked visitors why they were visiting {"PYRAMID's"} website, and later about their outcomes & experience.</p>
                            <p className="md:px-6 py-2 text-base">I wanted to understand how {"members'"} interacted with PYRAMID online, where their pain points were, and where else they shopped online.</p>
                            <figure className="py-12">
                                <Image src={Chatbot} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Chatbot UI elements</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="card-sort" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">Card Sorting Workshop</h3>
                            <p className="md:px-6 py-2 text-base">A noticable area for improvement on {"PYRAMID's"} website was its disjointed information architecture. Ignoring duplicate pages, PYRAMID had 15 pages on its website that needed organization. To gather testable approaches to organizing those pages, I built a Trello board with cards representing each page and product. Participants were asked to create as many columns as needed, name them and place the product/page cards underneath them.</p>
                            <figure className="py-12">
                                <Image src={CardSort} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Chatbot UI elements</figcaption>
                            </figure>

                            <hr className="my-16 -mx-3" />

                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>
                    </div>
                </section>

                <section className id="deliverables">
                        <div id="grid" className="grid grid-cols-9 items-center">
                        <section className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h2 className="md:px-6 text-2xl font-display font-semibold">Synthesis and Deliverables</h2>
                            <h3 id="personas" className="md:px-6 pt-8 text-lg font-semibold">Personas</h3>
                            <p className="md:px-6 py-2 text-base">From the data collected in member interviews and true intent studies, we organized our personas into three major archetypes, inspired by {"Nielsen Norman Group's"} research on ecommerce personas.</p>
                            <figure className="py-12">
                                <Image src={NewPersonas} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Summaries of each persona</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="journey-maps" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">Customer Journey Maps</h3>
                            <p className="md:px-6 py-2 text-base">To understand the differences in puchasing behaviors between these personas, we mapped their journeys from discovery to purchase.</p>
                            <figure className="py-12">
                                <Image src={JourneyMap} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Journey map of Jake, the persona interested in a quick purchase</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="affinity-diagram" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">Affinity Diagram</h3>
                            <p className="md:px-6 py-2 text-base">Using insights from both member and stakeholder I constructed an affinity diagram of needs, organized by role. This was important when evaluating new ecommerce platforms, in order to quickly evaluate whether they would support our needs.</p>
                            <figure className="py-12">
                                <Image src={AffinityDiagram} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Affinity diagram</figcaption>
                            </figure>
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>

                        <section id="research-questions" className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                            <h3 className="md:px-6 pt-8 text-lg font-semibold">Future Research Questions</h3>
                            <p className="md:px-6 py-2 text-base">Since I would be conducting evaluative research as the website was being updated, it was important for me to test hypotheses that arose during generative research.</p>
                            <figure className="py-12">
                                <Image src={FutureQuestions} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                                <figcaption className="text-base pt-1 text-center italic">Research Questions</figcaption>
                            </figure>
                            <hr className="my-16 -mx-3" />
                            <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                            
                            </aside>
                        </section>
                    </div>

                </section>

                <section id="conclusion" className="grid grid-cols-9 items-center">
                    <div className="col-span-9 xl:col-span-6 max-w-screen-md mx-auto">
                        <h2 className="md:px-6 text-2xl font-display font-semibold">Conclusion</h2>
                        <h3 className="md:px-6 pt-8 text-lg font-semibold">Next Steps</h3>
                        <p className="md:px-6 py-2 text-base">With generative research complete, I would begin the process of evaluative research in tandem with the implementing the new website. I detail that process in my Evaluative Research and Implementation of Ecommerce Website case study.</p>
                        <h3 className="md:px-6 pt-8 text-lg font-semibold">Reflections</h3>
                        <p className="md:px-6 py-2 text-base">This research revealed the incredible room for impact at PYRAMID, so much that {"it's"} enabled me to work with them for two years longer than we initally expected. Stakeholders now look to research as a tool for reducing through bias when evaluating situations, and we continue to consult and refine these deliverables. This shows the effects of getting quick wins and involving stakeholders throughout the research process.</p>
                        <p className="md:px-6 py-2 text-base">In retrospect, I would opt for using a <Link href="https://www.nngroup.com/articles/tree-testing/"><a>tree test</a></Link> instead of a card sorting study to evaulate navigation hierarchy. At the very least, I would have raised the number of participants to 25-30 per cluster in order to eclipse 95 percent confidence. However, 90 percent confidence certainly {"isn't"} bad, given the research context.</p>
                    </div>
                    <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                    
                    </aside>
                </section>

                <section id="conclusion" className="grid grid-cols-9 items-center mt-12">
                    <div className="col-span-9 xl:col-span-6 max-w-screen-md py-8 px-4 bg-gray-100 flex-col rounded-xl">
                        <p className="md:px-6 text-base">Next Project</p>
                        <Link href="/projects/pyramid-website"><a className="md:px-6 text-2xl font-display font-semibold">PYRAMID's Ecommerce Website in Shopify</a></Link>
                    </div>
                    <aside className="hidden xl:block xl:col-span-3 justify-self-center">
                    
                    </aside>
                </section>



                
                


                
            </article>
            
        
        
      
        </main>
    </>
 )
};
