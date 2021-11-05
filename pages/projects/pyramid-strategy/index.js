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










export default function index() {
 return (
    <>
    <NextSeo title="Generative Research for Ecommerce Strategy | Nick Mayernik"/>
      <article className="">
        <section className="max-w-screen-xl mx-auto pb-6 md:pb-20 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-20 items-center">
            <div className="max-w-xl md:col-span-8">
                <h1 className="text-2xl md:text-4xl font-semibold font-display leading-tight text-left max-w-screen-md text-gray-800 pb-6">Generative Research for Ecommerce Strategy</h1>
                <p className="text-base md:text-lg text-gray-700 leading-normal pb-6">In the discovery phase of a website redesign, I lead user and stakeholder research to understand the current product state and future needs.</p>
                <ul>
                    <li className="text-base text-gray-700">
                        <strong>Company:</strong> PYRAMID
                    </li>
                </ul>
            </div>

            <div className="md:col-span-4 p-6 bg-gray-100 rounded-2xl">
                <ul className="md:divide-y divide-solid grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-1 items-start">
                    <li className="md:pb-4">
                        <h2 className="text-md font-display font-semibold text-gray-700">Methods</h2>
                        <ul className="text-sm md:text-md text-gray-700">
                            <li className="py-0.5">Stakeholder Interviews</li>
                            <li className="py-0.5">Persona Workshop</li>
                            <li className="py-0.5">Member Interviews</li>
                            <li className="py-0.5">True Intent Studies</li>
                            <li className="py-0.5">Card Sorting</li>
                        </ul>
                    </li>
                    <li className="md:pt-4">
                        <h2 className="text-md font-display font-semibold text-gray-700">Deliverables</h2>
                        <ul className="text-sm md:text-md text-gray-700">
                            <li className="py-0.5">Personas</li>
                            <li className="py-0.5 leading-tight">Customer Journey Maps</li>
                            <li className="py-0.5">Affinity Diagram</li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
            
        </section>
        <figure>
            <Image src={Cover} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
        </figure>

        <section id="background" className="py-6 md:py-20 px-6 max-w-screen-xl mx-auto">
        <h1 className="max-w-screen-xl mx-auto font-display font-semibold text-2xl">Background</h1>

        <section id="stakeholder interviews" className="py-6 md:py-10">
            <div id="grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                <div id="left-column" className="md:col-span-8">
                    <h2 className="text-xl md:text-2xl font-medium font-display pb-1">About PYRAMID</h2>
                    <p className="text-base max-w-xl py-2">PYRAMID is Lehighton, PA’s largest sports and fitness club serving Carbon, Schuylkill, and Lehigh Counties. As my first project with PYRAMID, I was hired to <strong>conduct research and to implement a new website for the club</strong>. Stakeholders wanted to increase online sales, and to have their website serve as the primary point of contact with their customers.</p>
                    <h2 className="pt-6 md:pt-10 text-xl md:text-2xl font-medium font-display pb-1">Approach</h2>
                    <p className="text-base max-w-xl py-2">PYRAMID had never conducted research before, meaning that generative research would both offer insights about members and introduce stakeholders to UX strategy. My role involed other design and development tasks, so research composed about 3/5 of my working time blocks.</p>
                </div>
                <aside className="md:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                            <ul className="divide-y divide-solid text-base text-gray-700">
                                <li className="py-3">
                                    <h3 className="font-semibold font-display text-md">Project Length</h3>
                                    <ul>
                                        <li className="text-md">10 weeks</li>
                                    </ul>
                                </li>
                                <li className="py-3">
                                    <h3 className="font-semibold font-display text-md">Study Timeline</h3>
                                    <ul>
                                        <li className="text-md">Stakeholder Interviews: 1 week</li>
                                        <li className="text-md">Persona Workshop: 1 day</li>
                                        <li className="text-md">Member Interviews: 1 week</li>
                                        <li className="text-md">True Intent Study: 6 weeks</li>
                                        <li className="text-md">Card Sorting: 3 days</li>
                                        
                                    </ul>
                                </li>
                                <li className="py-3">
                                    <h3 className="font-semibold font-display text-md">Pre & Post-Study Timeline</h3>
                                    <ul>
                                        <li className="text-md">Preparation and Kickoff: 1 week</li>
                                        <li className="text-md">Synthesis: 2 weeks</li>
                                        <li className="text-md">Deliverable Creation: 2 weeks</li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
            </div>
        </section>
        
        </section>
        <hr />
        <section id="methods" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="max-w-screen-xl mx-auto font-display font-semibold text-2xl">Methods</h1>
            <section id="stakeholder interviews" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Stakeholder Interviews</h2>

                <div id="grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div id="left-column" className="md:col-span-8">
                        <p className="text-base max-w-xl py-2">To kick off the project, I recruited the four leading roles at the company for semi-structred, conversational interviews.</p>
                        <p className="text-base max-w-xl py-2">My goal was to understand the workflows of internal systems; where {"stakeholders'"} pain points were, and what might help them in the future. I also wanted to gauge their perceptions of members.</p>
                        <p className="text-base max-w-xl py-2">They offered valuable feedback about <strong>ZenPlanner</strong>, their member-management system and <strong>SpeedMobi</strong>, their WYSIWIG website manager. They clearly maintained close relationships with their members, which could provide additional insights.</p>
                    </div>
                    <aside className="md:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">Director of Operations</li>
                                    <li className="text-md">Director of Sports</li>
                                    <li className="text-md">Personal Training Lead</li>
                                    <li className="text-md">Front Desk Lead</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Approach</h3>
                                <ul>
                                    <li className="text-md">Semi-structured</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Session Length</h3>
                                <ul>
                                    <li className="text-md">45-60 minutes</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    <figure className="md:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={StakeholderQuestions} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 text-base pt-2 text-center italic">Sample stakeholder interview questions</figcaption>
                    </figure>
                </div>
            </section>

            <section id="persona exercise" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Persona Workshop</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">To leverage {"stakeholders'"} knowledge of their members, I led a participatory workshop where we constructed proto-personas.</p>
                        <p className="text-base max-w-xl py-2">These were not expected to be representative clusters, but instead a jumping-off point for future refinement. My hope was that these would help me understand who I might encounter in interviews.</p>
                        <p className="text-base max-w-xl py-2">Participants had 15 minutes per persona to build a total of five that they felt captured their membership base. These included personal attributes and attributes dealing with their relationship to PYRAMID.</p>
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">Four stakeholders who were interviewed</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Approach</h3>
                                <ul>
                                    <li className="text-md">Proto-personas</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Session Length</h3>
                                <ul>
                                    <li className="text-md">75 minutes</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={Persona} alt="Sample persona created during the workshop" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Sample persona created during the workshop</figcaption>
                    </figure>
                </div>
            </section>

            <section id="persona exercise" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Member Interviews</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">To understand customer journeys, stakeholders connected me with members who I recruited for 20 minute interviews. These interviews followed a walk-and-talk approach on treadmills or around the club.</p> 
                        <p className="text-base max-w-xl py-2">I wanted to understand how {"members'"} interacted with PYRAMID online, where their pain points were, and where else they shopped online.</p>
                        
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">25 members, five from each persona, who had purchased online in the past year</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Approach</h3>
                                <ul>
                                    <li className="text-md">Semi-structured</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Session Length</h3>
                                <ul>
                                    <li className="text-md">20-25 minutes</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={UserQuestions} alt="Sample member interview questions" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Sample member interview questions</figcaption>
                    </figure>
                </div>
            </section>

            <section id="true intent study" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">True Intent Study</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">Using an automated Drift chatbot that I programed, I conducted an unmoderated true intent study to explore the customer journey in real-time. The chatbot asked visitors why they were visiting {"PYRAMID's"} website, and later about their outcomes & experience.</p>
                        
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">55 website visitors</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </aside>
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={Chatbot} alt="Mockups of the now-defunct chatbot" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Mockups of the now-defuct chatbot interface</figcaption>
                    </figure>
                </div>
            </section>

            <section id="persona exercise" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Card Sorting</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">A noticable area for improvement on {"PYRAMID's"} website was its disjointed information architecture. Ignoring duplicate pages, PYRAMID had 15 pages on its website that needed organization.</p>
                        <p className="text-base max-w-xl py-2">To gather testable approaches to organizing those pages, I built a Trello board with cards representing each page and product. Participants were asked to create as many columns as needed, name them and place the product/page cards underneath them.</p>
                    </div>
                    <aside className="lg:col-span-4 px-6 py-3 bg-gray-100 rounded-2xl">
                        <ul className="divide-y divide-solid text-base text-gray-700">
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Participants</h3>
                                <ul>
                                    <li className="text-md">30 members who had purchased online in the past year</li>
                                </ul>
                            </li>
                            <li className="py-3">
                                <h3 className="font-semibold font-display text-md">Approach</h3>
                                <ul>
                                    <li className="text-md">Moderated, open card sort</li>
                                </ul>
                            </li>   
                        </ul>
                    </aside>
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={CardSort} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">The most frequent arrangement of pages and products</figcaption>
                    </figure>
                </div>
            </section>
        </section>

        <hr /> 
        <section id="synthesis & deliverables" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="font-display font-semibold text-2xl">Synthesis & Deliverables</h1>
            

            <section id="persona consolidation" className="py-6 md:py-10">
                <h2 className="max-w-xl text-xl md:text-2xl font-medium font-display pb-1">Consolidaing Personas</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">From the data collected in member interviews and true intent studies, we organized our personas into three major archetypes, inspired by {"Nielsen Norman Group's"} research on ecommerce personas:</p>
                    </div>
                    
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={NewPersonas} alt="Introduction to each persona" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Introduction to each persona</figcaption>
                    </figure>
                </div>
            </section>

            <section id="mapping their journeys" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Journey Mapping</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">To understand the differences in puchasing behaviors between these personas, we mapped their journeys from discovery to purchase.</p>
                    </div>
                    
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={JourneyMap} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Customer Journey Map of Jake, The Focused Buyer</figcaption>
                    </figure>
                </div>
            </section>

            <section id="mapping their journies" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Affinity Diagraming of Ecommerce Needs</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">Using insights from both member and stakeholder I constructed an affinity diagram of needs, organized by role. This was important when evaluating new ecommerce platforms, in order to quickly evaluate whether they would support our needs.</p>
                    </div>
                    
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={AffinityDiagram} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Selected needs from the afinity diagram</figcaption>
                    </figure>
                </div>
            </section>

            <section id="evaluative research questions" className="py-6 md:py-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Evaluative Research Questions</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">Since I would be conducting evaluative research as the website was being updated, it was important for me to test hypotheses that arose during generative research.</p>
                    </div>
                    
                    <figure className="lg:col-span-12 xl:-mx-10 2xl:-mx-20">
                        <Image src={FutureQuestions} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100}></Image>
                        <figcaption className="text-gray-400 pt-2 text-base text-center italic">Three questions to be answered in evaluative research</figcaption>
                    </figure>
                </div>
            </section>


        </section>

        <hr />


        <section id="synthesis & deliverables" className="py-10 md:py-20 px-6 max-w-screen-xl mx-auto">
            <h1 className="font-display font-semibold text-2xl">Conclusion</h1>
            

            <section id="persona consolidation" className="pt-6 md:pt-10 pb-5">
                <h2 className="max-w-xl text-xl md:text-2xl font-medium font-display pb-1">Next Steps</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">With generative research complete, I would begin the process of evaluative research in tandem with the implementing the new website. I detail that process in my Evaluative Research and Implementation of Ecommerce Website case study.</p>
                    </div>
                    
                
                </div>
            </section>


            <section id="mapping their journies" className="pb-6 md:pb-10">
                <h2 className="text-xl md:text-2xl font-medium font-display pb-1">Reflections</h2>

                <div id="grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div id="left-column" className="lg:col-span-8">
                        <p className="text-base max-w-xl py-2">This research revealed the incredible room for impact at PYRAMID, so much that {"it's"} enabled me to work with them for two years longer than we initally expected. Stakeholders now look to research as a tool for reducing through bias when evaluating situations, and we continue to consult and refine these deliverables. This shows the effects of getting quick wins and involving stakeholders throughout the research process.</p>
                        <p className="text-base max-w-xl py-2">In retrospect, the sample size used in our card sorting study is too small to make any meaningful generalizations. While our goal use was more about discovery than validation, a better approach would have been to use 20-25 participants per cluster, which a tool like Trello (or now FigJam) is perfect for doing.</p>
                    </div>
                </div>
            </section>

            

            
            </section>
        
      
    </article>
    </>
 )
};
