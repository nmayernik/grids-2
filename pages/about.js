import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function AboutPage() {
  return (
    <>
    <NextSeo title="About | Nick Mayernik"/>
    <div className="max-w-screen-xl mx-auto px-6 pt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-5">
      <section className="max-w-xl lg:col-span-8">
          <h1 className="text-3xl font-semibold font-display leading-tight text-left max-w-screen-md text-gray-800 pb-6">About</h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-snug font-medium pb-6">{"I'm"} a User Experience Researcher with three years experience and a recent psychology graduate of <Link href="http://lafayette.edu"><a className="underline">Lafayette College</a></Link>.</p>
          <p className="text-base lg:text-lg text-gray-600 leading-normal pb-3">With training in qualitative and quantitative methods, {"I'm"} interested in learning about users and building humane technologies to support them.</p>
          <p className="text-base lg:text-lg text-gray-600 leading-normal pb-3">Having worked in non-tech industries like fitness and education, I am experienced in establishing user-centric cultures involving diverse, interdiscplinary teams.</p>
          <p className="text-base lg:text-lg text-gray-600 leading-normal pb-3">Before becoming a UX Researcher, I worked  on the design and development of small, native iOS apps. While research is my primary focus, I enjoy contributing across the product development life cycle.</p>

      </section>
      <section className="lg:col-span-4 p-6 bg-gray-100 rounded-2xl">
        <ul className="divide-y divide-solid">
          <li className="pb-4">
            <h2 className="text-lg lg:text-lg font-display font-medium text-gray-800">Resume</h2>
            <Link href="https://www.icloud.com/iclouddrive/0oLzn_Lqu8Cq-oixmxxu2NM_g#Nick_Mayernik_Resume"><a className="inline text-base text-gray-700 underline">Download</a></Link>
            <Link href="http://read.cv/nickmayernik"><a className="inline text-base pl-4 text-gray-700 underline">Read.cv ↗</a></Link>
          </li>

          <li className="py-4">
            <h2 className="text-lg font-display font-medium text-gray-800">Email</h2>
            <Link href="mailto:contact@nickmayernik.com"><a className="inline text-base text-gray-700 underline">contact@nickmayernik.com</a></Link>
          </li>

          <li className="pt-4">
            <h2 className="text-lg font-display font-medium text-gray-800">Links</h2>
            <Link href="http://linkedin.com/in/nickmayernik"><a className="inline text-base  text-gray-700 underline">LinkedIn ↗</a></Link>
            <Link href="http://changelog.nickmayernik.com"><a className="inline text-base pl-4 text-gray-700 underline">Polywork ↗</a></Link>
          </li>
        </ul>
      </section>
      
    </div>
    </>
  );
}
