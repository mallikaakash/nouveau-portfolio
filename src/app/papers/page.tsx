import PaperCard from "@/components/PaperCard";
import React from "react";
import Link from "next/link"; // Add this import

const papersList = [
    {
        title: "QGAPHnet : Quantum Genetic Algorithm Based Hybrid QLSTM Model for Soil Moisture Estimation",
        conference: "IEEE IGARSS 2024, Athen, Greece",
        abstract: "This paper introduces a comprehensive investigation into soil moisture and temperature dynamics, employing a dynamic soil moisture dataset. Utilising Quantum Long Short Term Memory (QLSTM), we apply Quantum Genetic Algorithm (QGA) and Particle Swarm Optimisation (PSO) to study and predict patterns within the dataset.",
        status: "published",
        paperLink: "https://ieeexplore.ieee.org/document/10641651"
    },
    {
        title: "A Survey of Hyperparameter Selection Methods for Weather Forecasting using State-of-the-Art Machine Learning Algorithms",
        conference: "International Joint Conference on Computational Intelligence ",
        abstract: "This paper explores the Quantum LSTM (QLSTM) network and QLSTM Ensemble models.It studies various machine learning models like XGBoost, SVR, KNN Regressor, Random Forest Regressor and the application of meta-heuristic algorithms, like Genetic Algorithm (GA), Differential Evolution (DE), and Particle Swarm Optimization (PSO), on some deep learning model architectures like ANNs, LSTMs and GRUs, to automate the process of finding the best hyperparameters for the models. ",
        status: "To be published - tentatively April",
        paperLink: ""
    },
    {
        title: "AQSPACENET: HYBRID STATE-SPACE LSTM ARCHITECTURE FOR NEAR-REAL-TIME AIR QUALITY INDEX PREDICTION",
        conference: "IEEE IGARSS 2025, Brisbane, Australia",
        abstract: "This paper proposes a novel framework - AQSPACENET, a hybrid cell architecture that combines the State Space Model (SSM) paradigm with the classical Long Short Term Memory (LSTM) architecture by replacing the standard forget gate with a learnable, dynamic Kalman Gain–based mechanism to predict Air Quality Index levels.",
        status: "In review",
        paperLink: ""
    }
]

const page = () => {
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="fixed top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors">
        ← Back to Home
      </Link>
      
      <div>
      <div className="text-3xl flex flex-row font-bold m-4 ml-0 text-center transform ">
            <span className="relative text-xl md:text-2xl lg:text-3xl">
            Research Papers
            <div className="absolute bottom-0 left-0 w-full -translate-y-0.5 h-1 rounded-full transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1418 125"
                fill="#000"
              >
                <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
              </svg>
            </div>
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
                status={paper.status}
                paperLink={paper.paperLink}
            />
        ))}
      </div>
    </div>
  );
};

export default page;
