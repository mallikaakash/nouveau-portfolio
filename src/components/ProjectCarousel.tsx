
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
}


const projects: Project[] = [
    {
        title: "PaliGemma",
        description: " Implemented Paligemma- a Multimodal Vision Language model and the  Sigmoid Loss for Language Image Pre-Training (SIGLip) from scratch using Python and PyTorch.",
        link: "https://github.com/mallikaakash",
        type: "Machine Learning"
      },
  {
    title: " QGAPHEnsemble",
    description: "A novel architecture combining Hybrid QLSTM Network Ensemble via Adaptive Weighting for Short Term Weather Forecasting achieving SOTA results: MAPE BO-QEnsemble-0.91 & GenHybQLSTM-0.92.",
    link: "../../public/QEnsemble.pdf",
    type: "Machine Learning"
  },
  {
    title: "DPViz",
    description: "A web based visualizer in order to learn andunderstand various dynamic programming algorithms by means of a visual aid. Built it one afternoon when I was learning DP, as I found it tedious to visualize with pen and paper.",
    link: "https://dpviz.vercel.app/",
    type: "Web Dev"
  },
  
  // Add more projects here
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const project = projects[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex items-center justify-center h-[260px]">
      <div className="w-full  mx-auto relative h-full px-0 sm:px-12"> 
        <div className=" bg-yellow-900/20 bg-opacity-30 rounded-3xl h-full overflow-hidden backdrop-blur-lg transition-all duration-300 p-4 pl-12 sm:p-6">
          <div className="flex flex-row items-center justify-between space-x-4">
            <h3 className="text-sm md:text-xl font-semibold text-yellow-700 truncate flex-1">{project.title}</h3> 
            <Link
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-yellow-800 hover:font-bold font-semibold transition-all duration-300 text-xs
                         bg-gradient-to-br from-yellow-500/30 to-yellow-500/10
                         px-4 py-2 rounded-full whitespace-nowrap
                         border border-transparent hover:border-yellow-300/40
                         shadow-lg hover:shadow-xl hover:scale-105 hover:bg-yellow-300/10"
            >
              View 
            </Link>
          </div>
          <p className="text- text-xs mb-4">{project.type}</p>
          <p className="text-black text-sm">{project.description}</p>
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-900/70 text-white p-3 rounded-l-full hover:bg-yellow-950/70 transition-colors duration-300"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-900/70 text-white p-3 rounded-r-full hover:bg-yellow-950/70 transition-colors duration-300"
        >
          <FaChevronRight />
        </button>
        <div className="absolute -bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-yellow-950/70' : 'bg-yellow-200/70' 
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default ProjectCarousel;