import ProjectCarousel from "@/components/ProjectCarousel";
import AnimatedBentoGrid from "../components/AnimatedBentoGrid";
import AnimatedNavbar from "../components/AnimatedNavbar";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="w-full flex flex-row fixed top-0 z-10 bg-yellow-900/40 shadow-md h-16 backdrop-blur-sm justify-between items-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#c8acd6]">
          {/* <span className="sm:hidden">AM</span> */}
          <div className="flex-row inline">
            <div>Aakash Mallik</div>{" "}
            <div className="text-sm text-white">{`{Researcher, Developer, Writer}`}</div>
          </div>
        </h2>
        <div>
          <AnimatedNavbar />
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full mt-16">
        <div className="w-full lg:w-4/6  order-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
            <div className="flex flex-row lg:flex-row items-center justify-center lg:w-full">
              <section className="flex flex-col items-start justify-center mx-auto p-2tems-center  w-full">
                <div className="flex flex-row items-end justify-between w-full">
                  <div className="text-3xl  flex flex-row font-bold mb-2 text-center transform -rotate-2">
                    <span className="relative">
                      About
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full transform translate-y-1"></span>
                    </span>
                  </div>
                </div>
                <div
                  className="intro
          py-2 px-2
          text-start lg:text-md text-sm flex items-center justify-center w-full"
                >
                  I am a student, researcher, whimsical developer, and a moody
                  writer. Currently pursuing my B.Tech in Electronics and
                  Electronics Engineering from National Institute of Technology
                  Karnataka, Surathkal. <br />
                  My primary ambition is to delve deep into the theoretical
                  foundations of AI and power-efficient hardware architectures.{" "}
                  <br />
                  My interests span a broad spectrum, including machine
                  learning, mathematics, astronomy, economics, literature,
                  anime, manga, and manhwa. I thoroughly enjoy an insightful
                  conversation on any topic... be it on the narrative depth of
                  Attack on Titan or on the philosophical underpinnings of the
                  universe. <br />
                </div>
              </section>
            </div>

            <div className="flex flex-row lg:flex-row items-center justify-center lg:w-full">
              <section className="flex flex-col items-start justify-center mx-auto p-2tems-center  w-full">
                <div className="text-3xl font-bold mb-2 text-center ">
                  <span className="relative">
                    Experience
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full translate-y-1 transform -rotate-3"></span>
                  </span>
                </div>
                <div
                  className="experience
          py-2
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
                      <h4 className="text-md font-thin">
                        September 2024 - Present
                      </h4>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <h3 className="text-sm font-thin">AI Developer Intern</h3>
                      <h3 className="text-sm font-thin"> Bengaluru, India</h3>
                    </div>
                    <p>
                      Working as an AI developer and researcher to implement the
                      second brain infrastruture. It aims to serve as an AI
                      companion and a knowledge repository for the user.
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
                      <h4 className="text-md font-thin">
                        May 2024 - July 2024
                      </h4>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <h3 className="text-sm font-thin">
                        Software Developer Intern
                      </h3>
                      <h3 className="text-sm font-thin">Chennai, India</h3>
                    </div>
                    <p>
                      As part of the Process Transformation and Automation team,
                      I developed full stack applications to streamline the
                      business functions and the manual processes.
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
                      <h4 className="text-md font-thin">
                        May 2024 - July 2024
                      </h4>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <h3 className="text-sm font-thin">
                        Software Developer Intern
                      </h3>
                      <h3 className="text-sm font-thin">Chennai, India</h3>
                    </div>
                    <p>
                      As part of the Process Transformation and Automation team,
                      I developed full stack applications to streamline the
                      business functions and the manual processes.
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
                      <h4 className="text-md font-thin">
                        May 2024 - July 2024
                      </h4>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <h3 className="text-sm font-thin">
                        Software Developer Intern
                      </h3>
                      <h3 className="text-sm font-thin">Chennai, India</h3>
                    </div>
                    <p>
                      As part of the Process Transformation and Automation team,
                      I developed full stack applications to streamline the
                      business functions and the manual processes.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col order-3 lg:w-4/6 lg:order-2 items-center justify-center ">
          <div>
            <div className="items-center justify-center lg:h-1/2 lg:w-full">
              <AnimatedBentoGrid />
            </div>

            <div className="p-8 order-2 lg:h-1/2 lg:order-1 lg:w-2/3 w-full">
              
              <ProjectCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
