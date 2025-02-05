'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionItems = [
    {
      title: "Blogs (ML, Maths, Astrophysics, Misc...) that I refer to -",
      content: <div><Link href="https://colah.github.io" className="text-blue-500">Colah&apos;s Blog</Link>
      <br />
      <Link href="https://lmsys.org/blog/" className="text-blue-500">LLM Sys blog</Link>
      <br />
      <Link href="https://huyenchip.com" className="text-blue-500">Chip Huyen&apos;s Blogs</Link>
      <br />
      <Link href="https://jalammar.github.io" className="text-blue-500">Jay Alammar&apos;s Blogs</Link>
      <br />
      <Link href="https://eugeneyan.com/writing" className="text-blue-500">Eugene Yan&apos;s Blogs</Link>
      <br />
      <Link href="https://karpathy.github.io" className="text-blue-500">Andrew "The Goat" Karpathy&apos;s Blogs</Link>
      <br />
      <Link href="https://lilianweng.github.io/" className="text-blue-500">Lilian Weng&apos;s Blogs</Link>
      <br/>
      <Link href="https://gregmankiw.blogspot.com/" className="text-blue-500">Greg Mankiw&apos;s Blog -
      Random Observations for Students of Economics</Link>
      <br/>
      <Link href="https://gregorygundersen.com/blog/" className="text-blue-500">Gregory Gunderson&apos;s Blogs</Link>
      <br/>
      <Link href="https://www.paulgraham.com/articles.html" className="text-blue-500">Paul Graham&apos;s Essays</Link>
      <br/>
      <Link href="https://www.neelnanda.io/mechanistic-interpretability" className="text-blue-500">Neel Nanda&apos;s Blogs on Mech Interp</Link>
      <br/>
      <Link href="https://distill.pub/" className="text-blue-500">Distill.pub</Link>
      <br/>
      <Link href="https://thegradient.pub/" className="text-blue-500">The Gradient</Link>
      <br/>
      </div>     
    },
    {
      title: "Books, Series and Movies that I have love",
      content: <div> 
        Isaac Asimov&apos;s Books top here. Both his Short story collection volumes as well as series. 
        <br/> 
        Closely followed by HG Wells and George Orwell. I enjoy a healthy dose of fantasy novels with the Harry Potter and Percy Jackson series (all of them) being my top ones along with the Six of Crows Duology. 
        <br/>
        I love the Black Mirror, the Dark, Stranger things, The Fall of the House of Usher series.
        <br/>
        I am an avid anime watcher and manwha/webtoon reader. Top ones are Horimiya, Attack on Titan, Bleach, Black Clover, Solo Levelling, Monster,Dr. Stone, Omniscient Reader&apos;s Viewpoint, Unordinary....anddd the list is pretty long to be honest.
        
        </div>
    },
    {
      title: "Philosophy, Motivation, etc",
      content: <div>
        Still figuring out stuff but definitely advocate reading the Gita.
        <br/> 
        I love these two videos (will add others soon) - 
        <br /> 
        <Link href="https://youtu.be/d-uyxvQ7fb4?si=m1sT9uNftAI1yHR0" className="text-blue-500"> Tum Mujhe Kab Tak Rokoge</Link>
        <br />
        <Link href="https://www.paulgraham.com/hamming.html" className="text-blue-500">You and Your Research by Richard Hamming Essay  </Link>
        <br/>
        <Link href="https://www.youtube.com/watch?v=a1zDuOPkMSw" className="text-blue-500"> and the video </Link>
        <br />
        Recommend reading The Autobiography of Charlie Chaplin too.

      </div>
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start justify-start h-screen m-8 w-full md:w-1/2 mx-auto">
      <Link href="/" className="fixed top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors">
        ← Back to Home
      </Link>

      <div className="w-full mt-16">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium text-gray-800">{item.title}</span>
              <span className="text-2xl text-gray-600">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 bg-[#ded9bf] rounded-2xl m-2">
                <div className="text-gray-600">{item.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page