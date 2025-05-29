"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Attenomics Labs",
    position: "AI Developer",
    duration: "Apr25 - Present",
    location: "Remote",
    description: "Freelance AI consultant and developer working at the intersection of AI and web3. Building custom models and applications to suit the needs of the startup.",
    link: "https://www.linkedin.com/company/neosapien/posts/?feedView=all"
  },
  {
    id: 2,
    company: "NeoSapien",
    position: "AI Developer Intern",
    duration: "Sep24 - Mar25",
    location: "Bengaluru, India",
    description: "Working as an AI developer and researcher to implement the Second Brain infrastructure. It aims to serve as an AI companion and a knowledge repository for the user.",
    link: "https://www.linkedin.com/company/neosapien/posts/?feedView=all"
  },
  {
    id: 3,
    company: "On The Record Technology",
    position: "Software Developer",
    duration: "Oct24 - Dec24",
    location: "California, Remote",
    description: "Developed a desktop application - BlueCat for legal proceedings transcription in courts. As one of the early engineers (contract), my work focused on the speech-to-text models transcription infrastructure, along with coding frontend components."
  },
  {
    id: 4,
    company: "Wells Fargo",
    position: "Software Developer Intern",
    duration: "May24 - July24",
    location: "Chennai, India",
    description: "As part of the Process Transformation and Automation team, I developed full stack applications to streamline the business functions and the manual processes.",
    link: "https://www.linkedin.com/company/wellsfargo/"
  },
  {
    id: 5,
    company: "IIT Delhi",
    position: "Winter Research Intern",
    duration: "Nov23 - Jan24",
    location: "Remote",
    description: "Worked under the guidance of Dr. Tapan K Gandhi on classification of the stages and progress of Non-Alcoholic Fatty Liver Disease, based on clinical tabulated data.",
    link: "https://www.linkedin.com/company/caarya/posts/?feedView=all"
  },
  {
    id: 6,
    company: "Caarya",
    position: "Business Strategy Intern",
    duration: "Jan23 - May23",
    location: "Remote",
    description: "Caarya is a student work-study initiative whose goal is to drive the Indian startup ecosystem. I worked with a vibrant team of fantastic individuals and was guided by my peers and seniors. This is where I learnt the very fundamentals of the operational strategy of a startup.",
    link: "https://www.linkedin.com/company/caarya/posts/?feedView=all"
  },
  {
    id: 7,
    company: "Open Secret",
    position: "Business Strategy & Marketing Intern",
    duration: "Oct22 - Nov22",
    location: "Remote",
    description: "Dipping my toes into the startup culture. Worked as business strategy intern and marketing intern. Built the presence of the brand on college campus and generated sales of 40k INR in a month.",
    link: "https://www.linkedin.com/company/opensecretsnacks/posts/?feedView=all"
  }
];

// Function to get point along SVG path at given percentage
const getPointAlongPath = (percentage: number) => {
  // New SVG path: M 250 -20 C 180 -10 120 -5 80 20 C 40 45 60 80 120 90 C 180 100 220 120 160 140 C 100 160 40 150 -20 160
  // We'll calculate approximate points along this longer cubic bezier path
  const t = percentage / 100;
  
  // Breaking down the path into segments and approximating
  if (t <= 0.25) {
    // First segment: M 250 -20 C 180 -10 120 -5 80 20
    const localT = t / 0.25;
    const x = 250 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 180 * localT * (1 - localT) * (1 - localT) +
              3 * 120 * localT * localT * (1 - localT) +
              80 * localT * localT * localT;
    const y = -20 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * -10 * localT * (1 - localT) * (1 - localT) +
              3 * -5 * localT * localT * (1 - localT) +
              20 * localT * localT * localT;
    return { x, y };
  } else if (t <= 0.5) {
    // Second segment: C 40 45 60 80 120 90
    const localT = (t - 0.25) / 0.25;
    const x = 80 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 40 * localT * (1 - localT) * (1 - localT) +
              3 * 60 * localT * localT * (1 - localT) +
              120 * localT * localT * localT;
    const y = 20 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 45 * localT * (1 - localT) * (1 - localT) +
              3 * 80 * localT * localT * (1 - localT) +
              90 * localT * localT * localT;
    return { x, y };
  } else if (t <= 0.75) {
    // Third segment: C 180 100 220 120 160 140
    const localT = (t - 0.5) / 0.25;
    const x = 120 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 180 * localT * (1 - localT) * (1 - localT) +
              3 * 220 * localT * localT * (1 - localT) +
              160 * localT * localT * localT;
    const y = 90 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 100 * localT * (1 - localT) * (1 - localT) +
              3 * 120 * localT * localT * (1 - localT) +
              140 * localT * localT * localT;
    return { x, y };
  } else {
    // Fourth segment: C 100 160 40 150 -20 160
    const localT = (t - 0.75) / 0.25;
    const x = 160 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 100 * localT * (1 - localT) * (1 - localT) +
              3 * 40 * localT * localT * (1 - localT) +
              -20 * localT * localT * localT;
    const y = 140 * (1 - localT) * (1 - localT) * (1 - localT) + 
              3 * 160 * localT * (1 - localT) * (1 - localT) +
              3 * 150 * localT * localT * (1 - localT) +
              160 * localT * localT * localT;
    return { x, y };
  }
};

const ExperienceRoadmap: React.FC = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[600px] overflow-visible">
      {/* SVG Path Background - Bigger and longer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-50 -50 350 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="pathGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Longer and more winding road-like path */}
        <path
          d="M 250 -20 C 180 -10 120 -5 80 20 C 40 45 60 80 120 90 C 180 100 220 120 160 140 C 100 160 40 150 -20 160"
          stroke="rgba(139, 69, 19, 0.5)"
          strokeWidth="2"
          fill="none"
          filter="url(#pathGlow)"
          className="drop-shadow-sm"
          strokeDasharray="8,4"
        />
      </svg>

      {/* Experience Milestones as Cards */}
      {experiences.map((experience, index) => {
        const percentage = (index / (experiences.length - 1)) * 100;
        const point = getPointAlongPath(percentage);
        const isHovered = hoveredExperience === experience.id;
        
        return (
          <motion.div
            key={experience.id}
            className="absolute z-10"
            style={{
              left: `${((point.x + 70) / 420) * 100}%`,
              top: `${((point.y + 70) / 270) * 100}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isHovered ? 50 : 10,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              zIndex: isHovered ? 50 : 10
            }}
            transition={{ 
              delay: index * 0.15, 
              duration: 0.4,
              zIndex: { duration: 0 }
            }}
            onHoverStart={() => setHoveredExperience(experience.id)}
            onHoverEnd={() => setHoveredExperience(null)}
          >
            <div className="relative cursor-pointer">
              {/* Mini Card with Smooth Transitions */}
              <motion.div
                layout
                animate={{
                  width: isHovered ? 350 : 160,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  layout: { duration: 0.6, ease: "easeInOut" }
                }}
                className="relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 rounded-xl shadow-lg border-2 border-amber-300 dark:border-amber-600 p-3 transform"
                style={{
                  minHeight: isHovered ? 'auto' : '70px',
                  transformOrigin: 'center center'
                }}
              >
                {/* Vintage paper texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-amber-300/20 dark:from-transparent dark:via-amber-700/20 dark:to-amber-600/20 rounded-xl pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Compact view */}
                  <motion.div
                    animate={{ 
                      opacity: isHovered ? 0 : 1,
                      display: isHovered ? 'none' : 'block'
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <h4 className="text-sm font-bold text-amber-900 dark:text-amber-100 leading-tight">
                      {experience.company.length > 18 ? experience.company.substring(0, 15) + '...' : experience.company}
                    </h4>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-1 leading-tight">
                      {experience.position.length > 20 ? experience.position.substring(0, 17) + '...' : experience.position}
                    </p>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                      {experience.duration}
                    </span>
                  </motion.div>

                  {/* Expanded view */}
                  <motion.div
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      display: isHovered ? 'block' : 'none'
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeInOut",
                      delay: isHovered ? 0.2 : 0
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 leading-tight pr-2">
                        {experience.link ? (
                          <a href={experience.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200">
                            {experience.company}
                          </a>
                        ) : (
                          experience.company
                        )}
                      </h3>
                      <span className="text-xs text-amber-700 dark:text-amber-300 font-medium whitespace-nowrap">
                        {experience.duration}
                      </span>
                    </div>
                    
                    <div className="text-sm text-amber-800 dark:text-amber-200 mb-2 font-medium">
                      {experience.position} &#x2022; {experience.location}
                    </div>
                    
                   
                    
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-3 right-3 w-3 h-3 border border-amber-400 dark:border-amber-500 rounded-full opacity-30" />
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-amber-400 dark:bg-amber-500 rounded-full opacity-40" />
                  </motion.div>
                </div>

                {/* Milestone dot on the road */}
                <motion.div 
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 rounded-full border border-amber-200 dark:border-amber-700 shadow-sm"
                  animate={{
                    width: isHovered ? 16 : 12,
                    height: isHovered ? 16 : 12,
                    backgroundColor: isHovered ? 'rgb(217 119 6)' : 'rgb(146 64 14)'
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExperienceRoadmap; 