import React from "react";
const LeftPanel = () => {
  return (
    <div className="w-full lg:w-4/6 order-1 flex flex-col items-center justify-center p-4">
      <section className="flex flex-col items-start justify-center mx-auto  w-full">
        <div className="text-3xl flex flex-row font-bold mb-2 text-center transform">
          <span className="relative">
            Welcome
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
        <div
          className="intro
         px-2
          text-start lg:text-md text-sm flex items-center justify-center w-full"
        >
          I am Aakash Mallik and this is my attempt at carving a digital niche in my image. 
          <br/>
          I am an upcoming SDE at Wells Fargo, an independent researcher, whimsical developer, and a moody writer.
          Currently pursuing my B.Tech in Electronics and Electronics
          Engineering from National Institute of Technology Karnataka,
          Surathkal. <br />
          My interests are varied and I am interested by a lot of things and thereby my twitter pseudonym &#x2192; JackOfAllTrades &#x028;Trying to get Jacked now &#x3b;P&#x029;. <br />  
          Over the years I have dabbled in a lot of stuff spanning multiple
          domains, and then decided for myself that research and technology is
          where my heart lies. Now I have completely pivoted to the field of AI
          research and software development. <br />
          My primary goal is to delve deep into the theoretical foundations of
          AI and power-efficient hardware architectures. <br />
        
        </div>
      </section>

      <div className="flex flex-col items-start justify-center lg:w-full mt-4">
        <div className="text-3xl flex flex-row font-bold mb-2 text-center transform">
          <span className="relative">
            Experience
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
        <div className="experience px-2 text-start lg:text-md text-sm flex flex-col items-center justify-center w-full">
          {/* Attenomics Labs */}
          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a
                  href="https://www.linkedin.com/company/neosapien/posts/?feedView=all"
                  className="hover:text-neutral-600"
                >
                  Attenomics Labs
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                April 2025 - Present
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              AI Developer • Remote
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Freelance AI consultant and developer working at the intersection of AI and web3. Building custom models and applications to suit the needs of the startup.
            </p>
          </div>
          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a
                  href="https://www.linkedin.com/company/neosapien/posts/?feedView=all"
                  className="hover:text-neutral-600"
                >
                  NeoSapien
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                September 2024 - March 2025
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              AI Developer Intern • Bengaluru, India
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Working as an AI developer and researcher to implement the Second
              Brain infrastruture. It aims to serve as an AI companion and a
              knowledge repository for the user.
            </p>
          </div>

          {/* Similar pattern for other experiences */}
          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a href="" className="hover:text-neutral-600">
                  On The Record Technology, California
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                October 2024 - December 2024
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              Software Developer • Remote
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Developed a desktop application - BlueCat for legal proceedings
              transcription in courts. As one of the early engineers (contract),
              my work focused on the speech-to-text models transcription
              infrastructure, along with coding frontend components.
            </p>
          </div>

          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a
                  href="https://www.linkedin.com/company/wellsfargo/"
                  className="hover:text-neutral-600"
                >
                  Wells Fargo
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                May 2024 - July 2024
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              Software Developer Intern • Chennai, India
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              As part of the Process Transformation and Automation team, I
              developed full stack applications to streamline the business
              functions and the manual processes.
            </p>
          </div>

          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a
                  href="https://www.linkedin.com/company/caarya/posts/?feedView=all"
                  className="hover:text-neutral-600"
                >
                  IIT Delhi
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                November 2023 - January 2024
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              Winter Research Intern • Remote
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Worked under the guidance of Dr. Tapan K Gandhi on classification of the stages and progress of Non-Alcoholic Fatty Liver Disease, based on clinical tabulated data.
            </p>
          </div>

          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a
                  href="https://www.linkedin.com/company/caarya/posts/?feedView=all"
                  className="hover:text-neutral-600"
                >
                  Caarya
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                January 2023 - May 2023
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              Business Strategy Intern • Remote
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Caarya is a student work-study initiative whose goal is to drive
              the Indian startup ecosystem. I worked with a vibrant team of
              fantastic individuals and was guided by my peers and seniors. This
              is where I learnt the very fundamentals of the operational
              strategy of a startup.
            </p>
          </div>

          <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                <a
                  href="https://www.linkedin.com/company/opensecretsnacks/posts/?feedView=all"
                  className="hover:text-neutral-600"
                >
                  Open Secret
                </a>
              </h2>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                October 2022 - November 2022
              </span>
            </div>
            <h3 className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              Business Strategy & Marketing Intern • Remote
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Dipping my toes into the startup culture. Worked as business
              strategy intern and marketing intern. Built the presence of the
              brand on college campus and generated sales of 40k INR in a month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
