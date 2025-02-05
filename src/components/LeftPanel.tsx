import React from "react";
import NeedleUnderline from "../../public/needle-underline (1).svg";

const LeftPanel = () => {
  return (
    <div className="w-full lg:w-4/6 order-1 flex flex-col items-center justify-center p-4">
      <section className="flex flex-col items-start justify-center mx-auto  w-full">
        <div className="text-3xl flex flex-row font-bold mb-2 text-center transform">
          <span className="relative">
            About Me
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
          I am a student, researcher, whimsical developer, and a moody writer.
          Currently pursuing my B.Tech in Electronics and Electronics
          Engineering from National Institute of Technology Karnataka,
          Surathkal. <br />
          Over the years I have dabbled in a lot of stuff spanning multiple
          domains, and then decided for myself that research and technology is
          where my heart lies. Now I have completely pivoted to the field of AI
          research and software development. <br />
          My primary goal is to delve deep into the theoretical foundations of
          AI and power-efficient hardware architectures. <br />
          Even now my interests span a broad spectrum, including machine
          learning, mathematics, astrophysics, literature - poetry and prose,
          anime/manga/manhwa. I thoroughly enjoy an insightful conversation on
          any topic... be it on the narrative depth of Attack on Titan or on the
          philosophical underpinnings of the universe. <br />
        </div>
      </section>

      <div className="flex flex-col items-start justify-center lg:w-full">
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
        <div
          className="experience
         px-2
          text-start lg:text-md text-sm flex flex-col items-center justify-center w-full"
        >
          <div className="flex flex-col w-full px-2">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold">
                <a
                  href="https://www.linkedin.com/company/neosapien/posts/?feedView=all"
                  className="hover:underline"
                >
                  NeoSapien
                </a>
              </h2>
              <h4 className="text-md font-thin">September 2024 - Present</h4>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700/60">
                AI Developer Intern
              </h3>
              <h3 className="text-sm font-thin"> Bengaluru, India</h3>
            </div>
            <p>
              Working as an AI developer and researcher to implement the Second
              Brain infrastruture. It aims to serve as an AI companion and a
              knowledge repository for the user.
            </p>
          </div>

          <div className="flex flex-col w-full px-2 mt-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold">
                <a href="" className="hover:underline">
                  On The Record Technology, California
                </a>
              </h2>
              <h4 className="text-md font-thin">
                October 2024 - December 2024
              </h4>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700/60">
                Software Developer
              </h3>
              <h3 className="text-sm font-thin">Remote</h3>
            </div>
            <p>
              We are building a desktop application - BlueCat for legal
              proceedings transcription in courts. As one of the early engineers
              &#40;contract&#41;, my work focused on the speech-to-text models
              transcription infrastructure, along with coding frontend
              components.
            </p>
          </div>

          <div className="flex flex-col w-full px-2 mt-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold">
                <a
                  href="https://www.linkedin.com/company/wellsfargo/"
                  className="hover:underline"
                >
                  Wells Fargo
                </a>
              </h2>
              <h4 className="text-md font-thin">May 2024 - July 2024</h4>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700/60">
                Software Developer Intern
              </h3>
              <h3 className="text-sm font-thin">Chennai, India</h3>
            </div>
            <p>
              As part of the Process Transformation and Automation team, I
              developed full stack applications to streamline the business
              functions and the manual processes.
            </p>
          </div>

          <div className="flex flex-col w-full px-2 mt-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold">
                <a
                  href="https://www.linkedin.com/company/caarya/posts/?feedView=all"
                  className="hover:underline"
                >
                  Caarya
                </a>
              </h2>
              <h4 className="text-md font-thin">January 2023 - May 2023</h4>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700/60">
                Business Strategy Intern
              </h3>
              <h3 className="text-sm font-thin">Remote</h3>
            </div>
            <p>
              Caarya is a student work-study initiative whose goal is to drive
              the Indian startup ecosystem. I worked with a vibrant team of
              fantastic individuals and was guided by my peers and seniors. This
              is where I learnt the very fundamentals of the operational
              strategy of a startup.
            </p>
          </div>

          <div className="flex flex-col w-full px-2 mt-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold">
                <a
                  href="https://www.linkedin.com/company/opensecretsnacks/posts/?feedView=all"
                  className="hover:underline"
                >
                  Open Secret
                </a>
              </h2>
              <h4 className="text-md font-thin">
                October 2022 - November 2022
              </h4>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700/60">
                Business Strategy & Marketting Intern
              </h3>
              <h3 className="text-sm font-thin">Remote</h3>
            </div>
            <p>
              Dipping my toes into the startup cukture. Worked as business
              strategy intern and marketting intern. Built the presence of the
              brand on college campus and generated sales of 40k INR in a month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
