import PaperCard from "@/components/PaperCard";
import React from "react";
import Link from "next/link"; // Add this import

let papersList = [
    {
        title: "Quantum Computing in Neural Networks",
        conference: "IEEE Quantum Computing Conference 2023",
        abstract: "This paper explores the integration of quantum computing principles in neural network architectures...",
        year: "2023",
        paperLink: "https://example.com/quantum-paper"
    },
    {
        title: "Efficient Deep Learning for Edge Devices",
        conference: "ACM Mobile Computing Symposium 2023",
        abstract: "A novel approach to optimize deep learning models for resource-constrained edge devices...",
        year: "2023",
        paperLink: "https://example.com/edge-computing-paper"
    },
    {
        title: "Blockchain-based Secure Data Transfer",
        conference: "International Conference on Cybersecurity 2022",
        abstract: "Implementing secure data transfer protocols using blockchain technology...",
        year: "2022",
        paperLink: "https://example.com/blockchain-paper"
    }
]

const page = () => {
  return (
    <div className="flex flex-col items-start justify-start h-screen m-8 w-1/2 mx-auto">
      <Link href="/" className="mb-4 text-gray-600 hover:text-gray-900 transition-colors">
        ← Back to Home
      </Link>
      
      <div>
        <div className="text-3xl flex flex-row font-bold mb-2 text-center transform">
          <span className="relative">
            Research Papers
            <span className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full transform" 
                  style={{
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0, 0 0)',
                    height: '4px',
                    background: 'linear-gradient(to right, 1px 0%, 8px 100%)'
                  }}>
            </span>
          </span>
        </div>
        <h1 className="text-xl font-thin">
          This section lists papers that I have written or co-authored.
        </h1>
      </div>

      {/* Rest of your existing code */}
      <div className="grid grid-cols-1 gap-4 mt-8 w-full">
        {papersList.map((paper, index) => (
            <PaperCard
                key={index}
                title={paper.title}
                conference={paper.conference}
                abstract={paper.abstract}
                year={paper.year}
                paperLink={paper.paperLink}
            />
        ))}
      </div>
    </div>
  );
};

export default page;
