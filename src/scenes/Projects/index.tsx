import ServomancerDesktop from "@/assets/servomancer-desktop.png";
import TierDesktop from "@/assets/tier-desktop.png";
import FitnessDesktop from "@/assets/fitness-desktop.png";
import CarpentryDesktop from "@/assets/carpentry-desktop.png";

import { SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProjectItem from "@/components/ProjectItem";

interface ProjectsProps {
  isOpen: boolean;
  isDisabled: boolean;
  toggleMenu: () => void;
}

const Projects: React.FC<ProjectsProps> = ({
  isOpen,
  isDisabled,
  toggleMenu,
}) => {
  // Simplified menuClasses for correct open and closed positions
  const menuClasses = `fixed top-0 left-0 h-5/6 landscape-mobile:h-4/5 mt-20 landscape-mobile:mt-16 mt-20 w-[calc(100%-.5rem)] xs:w-[calc(100%-1rem)] transition-transform duration-500 ${
    isOpen ? "translate-x-0 z-20" : "-translate-x-[calc(100%)] z-10" // Assuming 1rem = 4 units, adjust accordingly if your setup differs
  } bg-opacity-50 flex flex-row`;

  const isAboveMd = useMediaQuery("(min-width: 1060px)");
  const isAboveSm = useMediaQuery("(min-width: 768px)");
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)",
  );

  return (
    <section className="flex overflow-hidden">
      <div className={menuClasses}>
        {/* CONTENT======================================================================= */}
        <div className="project-img w-full p-6 md:pl-16 landscape-mobile:p-6 bg-slide-bg rounded-r-xl border-y-[1px] border-r-[1px] border-slide-border bg-opacity-75 dark:bg-dark-slide-bg dark:bg-opacity-75 dark:border-dark-slide-border  backdrop-blur-xl overflow-hidden z-10">
          {" "}
          <SquaresPlusIcon
            className="absolute inset-10 sm:inset-20 md:inset-30 lg:inset-80 m-auto text-slide-icon opacity-35 dark:text-dark-slide-icon"
            z-0
          />{" "}
          {isAboveMd ? (
            <div
              className={`relative h-full w-full flex gap-8 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
              style={{
                transitionDuration: isOpen ? "1000ms" : "200ms",
              }}
            >
              {/* HEADER----------------------------- */}
              <div className="w-1/3 mx-auto my-auto z-10 ">
                <h2 className="text-4xl font-bold mb-4 text-text-header dark:text-dark-text-header">
                  Projects
                </h2>
                <p className="text-md text-text-content dark:text-dark-text-content">
                  Check out some of the projects I've worked on. Each reflects a
                  dedication to quality, creativity, and practicality.
                </p>
              </div>
              {/* PROJECTS---------------------------------- */}
              <div className="z-10 h-full w-2/3 ">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 p-4 md:p-8 h-full w-full lg:w-3/4 ml-auto">
                  <ProjectItem
                    imgSrc={ServomancerDesktop}
                    altText="Project One"
                    title={isAboveSm ? "Servomancer" : "Servomancer"}
                    description={
                      isAboveSm
                        ? "Web Application/AI Browser Extension"
                        : "AI Extension"
                    }
                    link="https://servomancertennis.com/"
                  />
                  <ProjectItem
                    imgSrc={CarpentryDesktop}
                    altText="Project Two"
                    title={isAboveSm ? "Cotter Carpentry" : "CC Site"}
                    description={isAboveSm ? "Web Application" : "Web App"}
                    link="https://dffj7242m7ucr.cloudfront.net"
                  />
                  <ProjectItem
                    imgSrc={FitnessDesktop}
                    altText="Project Three"
                    title={
                      isAboveSm ? "Ohio Fitness & Martial Arts" : "OF&MA Site"
                    }
                    description={isAboveSm ? "Web Application" : "Web App"}
                    link="https://d2knfuznay8em1.cloudfront.net"
                  />
                  <ProjectItem
                    imgSrc={TierDesktop}
                    altText="Project Four"
                    title={isAboveSm ? "Tier List Quiz" : "Tier Quiz"}
                    description={isAboveSm ? "Web Application" : "Web App"}
                    link="https://dwxi6v27vyx5l.cloudfront.net"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`relative h-full w-full flex flex-col lg:flex-row gap-8 landscape-mobile:gap-3 transition-opacity  ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDuration: isOpen ? "1000ms" : "200ms",
              }}
            >
              {/* HEADER */}
              <div className="w-full lg:w-1/3 mx-auto my-auto z-10 flex-shrink-0 pt-8 landscape-mobile:pt-0 md:pt-0">
                <h2 className="text-2xl font-bold mb-4 landscape-mobile:mb-0 text-text-header dark:text-dark-text-header">
                  Projects
                </h2>
                <p className="text-md text-text-content dark:text-dark-text-content hidden xs:inline">
                  Check out some of the projects I've worked on. Each reflects a
                  dedication to quality, creativity, and practicality.
                </p>
              </div>
              {/* PROJECTS */}
              <div className="w-full lg:w-2/3 h-full flex-grow overflow-hidden landscape-mobile:pr-6 pr-none sm:pr-8">
                <div className="grid grid-cols-2 gap-2 md:gap-4 h-full max-h-full">
                  <ProjectItem
                    imgSrc={ServomancerDesktop}
                    altText="Project One"
                    title={isAboveSm ? "Servomancer" : "Servomancer"}
                    description={
                      isAboveSm
                        ? "Web Application/AI Browser Extension"
                        : "AI Extension"
                    }
                    link="https://servomancertennis.com/"
                  />
                  <ProjectItem
                    imgSrc={CarpentryDesktop}
                    altText="Project Two"
                    title={isAboveSm ? "Cotter Carpentry" : "Cotter Carpentry"}
                    description={isAboveSm ? "Web Application" : "Web App"}
                    link="https://dffj7242m7ucr.cloudfront.net"
                  />
                  <ProjectItem
                    imgSrc={FitnessDesktop}
                    altText="Project Three"
                    title={
                      isAboveSm
                        ? "Ohio Fitness & Martial Arts"
                        : "Ohio Fitness Gym"
                    }
                    description={isAboveSm ? "Web Application" : "Web App"}
                    link="https://d2knfuznay8em1.cloudfront.net"
                  />
                  <ProjectItem
                    imgSrc={TierDesktop}
                    altText="Project Four"
                    title={isAboveSm ? "Tier List Quiz" : "Tier List Quiz"}
                    description={isAboveSm ? "Web Application" : "Web App"}
                    link="https://dwxi6v27vyx5l.cloudfront.net"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* TAB==============================================================================================*/}
        <div>
          {isAboveSm || isLandscapeMobile ? (
            <div
              className={`group h-[calc(100%-2px)] rounded-r-xl bg-close-bg dark:bg-dark-close-bg border-l border-l-zinc-800  border-r-slide-border  border-r border-zinc-600 hover:bg-close-hover dark:hover:bg-dark-close-hover dark:border-l-dark-close-border dark:border-r-dark-slide-border flex items-center justify-center w-8 z-20 ${
                isDisabled ? "opacity-10 cursor-auto z-10" : "cursor-pointer"
              }`}
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
              }}
            >
              {/* CONTENT DIV--------------------------------------------------------------------------------- */}
              <div className="transform -rotate-90 origin-center text-md md:text-md whitespace-nowrap flex gap-2 items-center text-text-gray dark:text-dark-text-gray group-hover:text-text-header dark:group-hover:text-dark-text-header">
                <XMarkIcon className="h-5 text-indigo-800 dark:text-dark-indigo-800 group-hover:text-indigo-600 dark:group-hover:text-dark-indigo-600" />
                close
              </div>
              {/* ----------------------------------------------------------------------------------------------- */}
            </div>
          ) : (
            <div
              className={`group h-10 w-16 bg-close-bg dark:bg-dark-close-bg hover:bg-close-hover dark:hover:bg-dark-close-hover bg-opacity-80 rounded-tr-lg rounded-bl-lg border border-l  dark:border-dark-slide-border border-zinc-600 dark:border-dark-zinc-600 flex items-center justify-center z-20 ${
                isDisabled ? "opacity-10 cursor-auto z-10" : "cursor-pointer"
              }`}
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "0", // Changed to top right corner
                right: "0",
              }}
            >
              <XMarkIcon className="h-5 text-indigo-800 dark:text-dark-indigo-800 group-hover:text-indigo-600 dark:group-hover:text-dark-indigo-600" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
