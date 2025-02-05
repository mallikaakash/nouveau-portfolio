import ProjectCarousel from "@/components/ProjectCarousel";
import AnimatedBentoGrid from "../components/AnimatedBentoGrid";
import AnimatedNavbar from "../components/AnimatedNavbar";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import LeftPanel from "@/components/LeftPanel";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="w-full flex flex-row fixed top-0 z-10 bg-yellow-900/40 shadow-md h-16 backdrop-blur-sm justify-between items-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#131010]">
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

      <div className="flex flex-col md:flex-row items-start justify-center w-full mt-16">
        <LeftPanel />

        <div className="w-full flex flex-col order-3 lg:w-4/6 lg:order-2 lg:sticky lg:top-20 items-center justify-center p-4 ">
          <div className="items-center justify-center lg:h-1/2 w-full">
            <div className="text-xl font-bold mb-2 md:pl-10 flex flex-row items-center justify-start">
              The stuff I am working on 
              <FaArrowRight className=""/> 
            </div>
            <AnimatedBentoGrid />
          </div>
          <div className="p-8 order-2 lg:h-1/2 lg:order-1  w-2/3 items-center justify-center">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
