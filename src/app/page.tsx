import ProjectCarousel from "@/components/ProjectCarousel";
import AnimatedBentoGrid from "../components/AnimatedBentoGrid";
import AnimatedNavbar from "../components/AnimatedNavbar";
import LeftPanel from "@/components/LeftPanel";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="w-full flex flex-row fixed top-0 z-10 bg-yellow-900/40 shadow-md h-fit backdrop-blur-sm justify-between items-center px-4">
        <>
          {/* <span className="sm:hidden">AM</span> */}
          <div className="flex-row inline text-xl sm:text-2xl font-semibold text-[#131010] m-2 ml-0">
            <div>Aakash Mallik</div>{" "}
            <div className="text-sm text-white">{`{Researcher, Developer, Writer}`}</div>
          </div>
        </>
        <div>
          <AnimatedNavbar />
        </div>
      </nav>

      <div className="flex flex-col md:flex-row items-start justify-center w-full mt-16">
        <LeftPanel />

        <div className="w-full flex flex-col order-3 lg:w-4/6 lg:order-2 lg:sticky lg:top-20 items-center justify-center p-4 ">
          <div className="items-center justify-center lg:h-1/2 w-full">
            <div className="text-xl font-bold mt-8 md:mt-0 mb-4 md:pl-10 flex flex-row items-center justify-start">
              Stuff that I am working on 
              <FaArrowRight className=""/> 
            </div>
            <AnimatedBentoGrid />
          </div>
          <div className="p-8 order-2 lg:h-1/2 lg:order-1  md:w-2/3 items-center justify-center">
            <ProjectCarousel />
            
          </div>
        </div>
      </div>
    </div>
  );
}
