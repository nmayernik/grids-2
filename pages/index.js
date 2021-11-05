import Link from "next/link";
import Image from "next/image";
import Cover from "pages/projects/pyramid-website/assets/pwcover.png";
import RSVP from "pages/projects/rsvp/homecover.png";
import Generative from "pages/projects/pyramid-strategy/assets/generativecover.png";



export default function index() {

    return(
    <div className="max-w-screen-xl mx-auto px-6 pt-5">
        <section className="py-5">
            <h1 className="text-2xl md:text-3xl font-display font-semibold leading-tight text-left max-w-3xl text-gray-700">UX Researcher and Designer, working on fitness & ecommerce experiences at PYRAMID.</h1>
        </section>
        <section className="py-20">
            <h1 className="text-xl font-display text-gray-600 font-medium pb-5">Featured Case Studies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <article>
                    <Link href="projects/pyramid-strategy"><a className="hover:border">
                        <Image src={Generative} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100} className="rounded-lg"></Image>
                    </a></Link>
                    <Link href="projects/pyramid-strategy"><a className="underline">
                        <h1 className="py-1 lg:pl-2 font-display text-xl font-medium">
                            Generative Research for Ecommerce Strategy
                        </h1>
                    </a></Link>

                    <ul className="lg:pl-1 pt-2">
                        <li className="inline bg-yellow-200 text-yellow-700 py-0.5 px-2 rounded-full">Research</li>
                    </ul>
                </article>
                <article>
                    <Link href="projects/pyramid-website"><a className="hover:border">
                        <Image src={Cover} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100} className="rounded-xl"></Image>
                    </a></Link>
                    
                    <Link href="projects/pyramid-website"><a className="underline">
                        <h1 className="lg:pl-2 py-1 font-display text-xl font-medium">
                            Ecommerce Website in Shopify
                        </h1>
                    </a></Link>
                    <ul className="lg:pl-1 pt-2">
                        <li className="inline bg-yellow-200 text-yellow-700 py-0.5 px-2 rounded-full">Research</li>
                        <li className="ml-3 inline bg-blue-200 text-blue-700 py-0.5 px-2 rounded-full">Design</li>

                    </ul>
                </article>
                <article>
                    <Link href="projects/rsvp"><a className="hover:border">
                        <Image src={RSVP} alt="PYRAMID.fitness homepage" layout="intrinsic" objectFit="cover" quality={100} className="rounded-xl"></Image>
                    </a></Link>
                    
                    <Link href="projects/rsvp"><a className="underline">
                        <h1 className="lg:pl-2 py-1 font-display text-xl font-medium">
                            Class Reservation System During COVID-19
                        </h1>
                    </a></Link>
                    <ul className="lg:pl-1 pt-2">
                        <li className="inline bg-yellow-200 text-yellow-700 py-0.5 px-2 rounded-full">Research</li>
                    </ul>
                </article>
                
                
            </div>
        </section>
    </div>
    )
    
};
