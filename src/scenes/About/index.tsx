import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useContext } from "react";
// import AboutOne from "@/assets/about-one.jpg";
import ProfilePic from "@/assets/profile-pic.png";
import ProfilePicMd from "@/assets/profile-pic-md.png";

import SigDark from "@/assets/sig-dark.png";
import Sig from "@/assets/sig.png";
import { ThemeContext } from "@/components/ThemeContext";

import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface AboutProps {
  isOpen: boolean;
  isDisabled: boolean;
  toggleMenu: () => void;
}

const About: React.FC<AboutProps> = ({ isOpen, isDisabled, toggleMenu }) => {
  // Updated menuClasses for a right-side sliding menu
  const menuClasses = `fixed top-0 right-0 h-5/6 landscape-mobile:h-4/5 mt-20 landscape-mobile:mt-16 w-[calc(100%-.5rem)] xs:w-[calc(100%-1rem)] transition-transform duration-500 ${
    isOpen ? "translate-x-0 z-20" : "translate-x-[calc(100%)] z-10"
  } bg-opacity-50 flex flex-row-reverse`;

  const isAboveSm = useMediaQuery("(min-width: 768px)");
  const isAboveMd = useMediaQuery("(min-width: 1060px)");
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)",
  );

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className="flex overflow-hidden">
      <div className={menuClasses}>
        {/* Sliding menu */}
        <div className="project-img w-full p-6 md:px-16 landscape-mobile:p-6 bg-slide-bg dark:bg-opacity-65 dark:bg-dark-slide-bg rounded-l-lg border-y-[1px] border-l-[1px] border-slide-border dark:border-dark-slide-border bg-opacity-75  backdrop-blur-xl overflow-hidden z-10">
          {" "}
          <UserCircleIcon
            className="absolute inset-10 sm:inset-20 md:inset-30 lg:inset-80 m-auto text-slide-icon opacity-35 dark:text-dark-slide-icon"
            z-0
          />{" "}
          <div
            className={`relative h-full w-full flex flex-col md:flex-row landscape-mobile:flex-row gap-4 sm:gap-8 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDuration: isOpen ? "1000ms" : "200ms",
            }}
          >
            {/* CONTENT------------------------------------------ */}
            <div className="my-auto z-10 w-full sm:w-2/3 md:w-1/3 pt-8 landscape-mobile:pt-0 md:pt-0">
              <h2 className="text-2xl md:text-4xl text-text-header dark:text-dark-text-header font-bold mb-4 landscape-mobile:mb-2">
                About
              </h2>
              <p className="text-text-content dark:text-dark-text-content text-md">
                Welcome to my portfolio. I specialize in creating practical,
                high-quality solutions using the latest AI tools. Take a look at
                my work to see what I can do. Thanks for visiting and enjoy your
                stay.
              </p>
              <img
                src={isDarkMode ? SigDark : Sig}
                alt="signature"
                className="w-40 landscape-mobile:w-32 mx-auto pt-2 landscape-mobile:pt-0"
              />
            </div>
            {/* IMAGE------------------------------------- */}
            <div className="w-full md:w-2/3 h-full flex justify-center items-center overflow-hidden z-10 landscape-mobile:pr-6 pr-6 md:pr-none">
              {isAboveMd ? (
                <img
                  src={ProfilePic}
                  alt="About"
                  className="max-w-full max-h-full object-cover rounded-md md:mx-auto filter grayscale transition duration-200 ease-in-out hover:filter-none"
                />
              ) : (
                <img
                  src={ProfilePicMd}
                  alt="About"
                  className="max-w-full max-h-full object-cover rounded-md md:mx-auto filter grayscale transition duration-200 ease-in-out hover:filter-none"
                />
              )}
            </div>
          </div>
        </div>

        {/* Tab, which moves with the menu, mirrored to be on the left side of the menu */}
        <div>
          {isAboveSm || isLandscapeMobile ? (
            <div
              className={`group h-[calc(100%-2px)]  bg-close-bg dark:bg-dark-close-bg border-l border-l-zinc-800   border-zinc-600 hover:bg-close-hover dark:hover:bg-dark-close-hover dark:border-l-dark-close-border dark:border-r-dark-slide-border flex items-center justify-center w-8 z-20 ${
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
              <div className="transform -rotate-90 origin-center text-md md:text-md whitespace-nowrap flex gap-2 items-center text-text-content dark:text-dark-text-content group-hover:text-text-header dark:group-hover:text-dark-text-header">
                <XMarkIcon className="h-5 text-indigo-800 group-hover:text-indigo-600" />
                close
              </div>
              {/* ----------------------------------------------------------------------------------------------- */}
            </div>
          ) : (
            <div
              className={`group h-10 w-16 bg-close-bg dark:bg-dark-close-bg hover:bg-close-hover dark:hover:bg-dark-close-hover bg-opacity-80 rounded-bl-lg border border-l  border-zinc-600 dark:border-dark-slide-border flex items-center justify-center z-20 ${
                isDisabled ? "opacity-10 cursor-auto z-10" : "cursor-pointer"
              }`}
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "0", // Changed to top right corner
                right: "0",
              }}
            >
              <div className="transform origin-center text-md md:text-md whitespace-nowrap flex gap-2 items-center text-content dark:text-dark-text-content group-hover:text-header dark:group-hover:text-dark-text-header">
                <XMarkIcon className="h-5 text-indigo-800 group-hover:text-indigo-600" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
