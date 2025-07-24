// import { useEffect, useRef } from "react";
import ServomancerDesktop from "@/assets/servomancer-desktop.png";
import ServomancerMobile from "@/assets/servomancer-mobile.png";

import TierDesktop from "@/assets/tier-desktop.png";
import TierMobile from "@/assets/tier-mobile.png";

import FitnessDesktop from "@/assets/fitness-desktop.png";
import FitnessMobile from "@/assets/fitness-mobile.png";

import CarpentryDesktop from "@/assets/carpentry-desktop.png";
import CarpentryMobile from "@/assets/carpentry-mobile.png";

// import CoolEnglishDesktop from "@/assets/cool-english-desktop.png";
// import CoolEnglishMobile from "@/assets/cool-english-mobile.png";

import AIHubDesktop from "@/assets/ai-hub-desktop.png";
import AIHubMobile from "@/assets/ai-hub-mobile.png";

import useMediaQuery from "@/hooks/useMediaQuery";
import ProjectItem from "@/components/ProjectItem/index";
import ProjectItemMobile from "@/components/ProjectItem/ProjectItemMobile";

import { SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const menuClasses = `fixed top-0 left-0 h-[90%] landscape-mobile:h-4/5 mt-20 landscape-mobile:mt-16 mt-20 w-[calc(100%-.5rem)] xs:w-[calc(100%-1rem)] transition-transform duration-500 ${
    isOpen ? "translate-x-0 z-20" : "-translate-x-[calc(100%)] z-10" // Assuming 1rem = 4 units, adjust accordingly if your setup differs
  } bg-opacity-50 flex flex-row`;

  // const isAboveMd = useMediaQuery("(min-width: 1060px)");
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
          {isAboveSm ? (
            <div
              className={`relative pr-8 md:mr-0 h-full w-full flex flex-col md:flex-row justify-between  gap-8 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
              style={{
                transitionDuration: isOpen ? "1000ms" : "200ms",
              }}
            >
              {/* HEADER----------------------------- */}
              <div className="w-1/2 md:w-1/3 ml-4 md:ml-0 mt-8 md:mx-auto md:my-auto z-10 pb-4 md:pb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-header dark:text-dark-text-header">
                  Projects
                </h2>
                <p className="text-md text-text-content dark:text-dark-text-content lg:w-4/6">
                  Check out some of the projects I've worked on. Each reflects a
                  dedication to quality, creativity, and practicality.
                </p>
              </div>
              {/* PROJECTS---------------------------------- */}
              <div className="projects-scrollable w-full md:w-2/3 z-10 h-full overflow-y-auto p-4 mr-8">
                <div className="flex flex-col h-full mx-auto gap-8">
                  {" "}
                  <ProjectItem
                    imgSrc={AIHubDesktop}
                    altText="Project Four"
                    title="Paradise Food Tours"
                    description="Web Application"
                    techStack="React, TypeScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53, DynamoDB, Lambda, SES, API Gateway, Cognito)"
                    link="https://paradisefoodtours.com/"
                  />
                  <ProjectItem
                    imgSrc={FitnessDesktop}
                    altText="Project Four"
                    title="Ohio Fitness & Martial Arts"
                    description="Web Application"
                    techStack="React, TypeScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53, DynamoDB, Lambda, SES, API Gateway, Cognito)"
                    link="https://ohiofitnessmartialarts.com/"
                  />
                  {/* <ProjectItem
                    imgSrc={CoolEnglishDesktop}
                    altText="Project Four"
                    title="Cool English (Grayscale Version)"
                    description="Web Application"
                    techStack="React, TypeScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53)"
                    link="https://dky9afmykrd3g.cloudfront.net/"
                  /> */}
                  <ProjectItem
                    imgSrc={ServomancerDesktop}
                    altText="Project One"
                    title="Servomancer"
                    description="Web Application/AI Browser Extension"
                    techStack="React, TypeScript, Tailwind CSS, Python, AWS (S3, Cloudfront, Route 53, Lambda)"
                    link="https://d3uwbaee6v16v3.cloudfront.net/"
                  />{" "}
                  {/* <ProjectItem
                    imgSrc={AIHubDesktop}
                    altText="Project Two"
                    title="AI Hub"
                    description="Web Application/AI Browser Extension"
                    techStack="React, TypeScript, Tailwind CSS, Python, AWS (S3, Cloudfront, Route 53, Lambda)"
                    link="https://d1g3hir3bpucsm.cloudfront.net/"
                  /> */}
                  <ProjectItem
                    imgSrc={CarpentryDesktop}
                    altText="Project Three"
                    title="Cotter Carpentry"
                    description="Web Application"
                    techStack="React, JavaScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53)"
                    link="https://dffj7242m7ucr.cloudfront.net"
                  />{" "}
                  <ProjectItem
                    imgSrc={TierDesktop}
                    altText="Project Five"
                    title="Jiu-Jitsu Tier List Quiz"
                    description="Web Application"
                    techStack="Vanilla HTML, Vanilla JavaScript, Vanilla CSS"
                    link="https://dwxi6v27vyx5l.cloudfront.net"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`relative h-full w-full flex flex-col lg:flex-row gap-6 landscape-mobile:gap-3 transition-opacity  ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDuration: isOpen ? "1000ms" : "200ms",
              }}
            >
              {/* HEADER MOBILE ----------------------------------------------*/}
              <div className="w-full lg:w-1/3 mx-auto my-auto z-10 flex-shrink-0 pt-6 sm:pt-8 landscape-mobile:pt-0 md:pt-0">
                <h2 className="text-2xl font-bold sm:mb-4 landscape-mobile:mb-0 text-text-header dark:text-dark-text-header">
                  Projects
                </h2>
                <p className="text-md text-text-content dark:text-dark-text-content hidden xs:inline">
                  Check out some of the projects I've worked on. Each reflects a
                  dedication to quality, creativity, and practicality.
                </p>
              </div>
              {/* PROJECTS MOBILE ---------------------- */}
              <div className="projects-scrollable z-10 h-full overflow-y-auto md:p-4 ">
                <div className="flex flex-col h-full  mx-auto gap-y-12">
                  <ProjectItemMobile
                    imgSrc={AIHubMobile}
                    altText="Project Four"
                    title="Paradise Food Tours"
                    description="Web Application"
                    techStack="React, TypeScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53, DynamoDB, Lambda, SES, API Gateway, Cognito)"
                    link="https://paradisefoodtours.com/"
                  />
                  <ProjectItemMobile
                    imgSrc={FitnessMobile}
                    altText="Project Four"
                    title="Ohio Fitness & Martial Arts"
                    description="Web Application"
                    techStack="React, TypeScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53, DynamoDB, Lambda, SES, Api Gateway)"
                    link="https://ohiofitnessmartialarts.com/"
                  />
                  {/* <ProjectItemMobile
                    imgSrc={CoolEnglishMobile}
                    altText="Project Four"
                    title="Cool English (Grayscale Version)"
                    description="Web Application"
                    techStack="React, TypeScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53)"
                    link="https://dky9afmykrd3g.cloudfront.net/"
                  /> */}
                  {/* <ProjectItemMobile
                    imgSrc={AIHubMobile}
                    altText="Project Two"
                    title="AI Hub"
                    description="Web Application/AI Browser Extension"
                    techStack="React, TypeScript, Tailwind CSS, Python, AWS (S3, Cloudfront, Route 53, Lambda, API Gateway)"
                    link="https://d1g3hir3bpucsm.cloudfront.net/"
                  /> */}
                  <ProjectItemMobile
                    imgSrc={CarpentryMobile}
                    altText="Project Three"
                    title="Cotter Carpentry"
                    description="Web Application"
                    techStack="React, JavaScript, Tailwind CSS, AWS (S3, Cloudfront, Route 53)"
                    link="https://dffj7242m7ucr.cloudfront.net"
                  />{" "}
                  <ProjectItemMobile
                    imgSrc={ServomancerMobile}
                    altText="Project One"
                    title="Servomancer"
                    description="Web Application/AI Browser Extension"
                    techStack="React, TypeScript, Tailwind CSS, Python, AWS (S3, Cloudfront, Route 53, Lambda, API Gateway)"
                    link="https://d3uwbaee6v16v3.cloudfront.net/"
                  />{" "}
                  <ProjectItemMobile
                    imgSrc={TierMobile}
                    altText="Project Five"
                    title="Jiu-Jitsu Tier List Quiz"
                    description="Web Application"
                    techStack="Vanilla HTML, Vanilla JavaScript, Vanilla CSS"
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
              {/* CLOSE DIV--------------------------------------------------------------------------------- */}
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
