import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

import Projects from "@/scenes/Projects";
import Contact from "@/scenes/Contact";
import About from "@/scenes/About";
import {
  SquaresPlusIcon,
  UserCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/assets/logo-white-large.png";
import LogoDark from "@/assets/logo-dark-large.png";

const ControlPanel: React.FC = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = (tabName: string) => {
    if (openTab === tabName) {
      setOpenTab(null); // Allows closing the current tab.
    } else {
      setOpenTab(tabName); // Open the selected tab.
    }
  };

  const toggleMenu = (tabName: string) => {
    handleToggleMenu(tabName);
  };

  const isDisabled = (tabName: string) => {
    return !!openTab && openTab !== tabName;
  };

  const closeMenu = () => {
    setOpenTab(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const { isDarkMode } = useContext(ThemeContext);

  const buttonStyling =
    "group bg-button-bg dark:bg-dark-button-bg rounded-lg border border-button-border dark:border-dark-button-border tab flex items-center justify-center w-40 p-3 bt-bp:py-4 hover:bg-button-bg-hover dark:hover:bg-dark-button-bg-hover text-gray-300 dark:text-dark-text-gray hover:text-text-header dark:hover:text-dark-text-header dark:hover:border-dark-button-border-hover landscape-mobile:py-3";
  const buttonIconStyling =
    "h-6 text-text-gray dark:text-dark-text-gray group-hover:text-text-content dark:group-hover:text-dark-text-content";
  // ------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------

  return (
    <div className="relative h-screen w-full bg-screen-bg dark:bg-dark-screen-bg gap-8 xs:gap-4 landscape-mobile:gap-0 flex flex-col items-center justify-center landscape-mobile:pt-4">
      {/* LOGO SECTION----------------------------------- */}
      <div className="flex flex-col items-center">
        <img
          src={isDarkMode ? LogoDark : Logo}
          alt="signature"
          className="w-60 landscape-mobile:w-40 opacity-[90] se:w-32"
        />

        <div className="flex gap-2 se:text-md xs:text-lg text-text-header dark:text-dark-text-header mt-4 items-center">
          <p className="font-bold">Anson Hunnell{""}</p>

          <p className="text-indigo-700 ">/</p>
          <p className="text-text-gray dark:text-dark-text-gray ">
            Software Engineering
          </p>
        </div>
      </div>

      {/* BUTTON SECTION----------------------------------- */}
      <div className="flex flex-col bt-bp:flex-row gap-6 mt-8">
        {/* PROJECT BUTTON------------- */}
        <div
          className={`${buttonStyling} ${
            isDisabled("projects")
              ? "opacity-10 cursor-auto z-10"
              : "cursor-pointer"
          }`}
          onClick={() => handleToggleMenu("projects")}
        >
          <div className="transform text-md whitespace-nowrap flex gap-2 items-center">
            <SquaresPlusIcon className={`${buttonIconStyling}`} />
            Projects
          </div>
        </div>{" "}
        {/* ABOUT BUTTON------------- */}
        <div
          className={`${buttonStyling}  ${
            isDisabled("about")
              ? "opacity-10 cursor-auto z-10"
              : "cursor-pointer"
          }`}
          onClick={() => handleToggleMenu("about")}
        >
          <div className="transform text-md whitespace-nowrap flex gap-2 items-center">
            <UserCircleIcon className={`${buttonIconStyling}`} />
            About
          </div>
        </div>
        {/* CONTACT BUTTON------------- */}
        <div
          className={`${buttonStyling} ${
            isDisabled("contact")
              ? "opacity-10 cursor-auto z-10"
              : "cursor-pointer"
          }`}
          onClick={() => handleToggleMenu("contact")}
        >
          <div className="transform text-md whitespace-nowrap flex gap-2 items-center">
            <ChatBubbleOvalLeftEllipsisIcon
              className={`${buttonIconStyling}`}
            />
            Contact
          </div>
        </div>
      </div>
      {/* POP UP SECTION STRUCTURE----------------------------------------------------- */}
      <div ref={panelRef}>
        <Projects
          isOpen={openTab === "projects"}
          isDisabled={!!openTab && openTab !== "projects"}
          toggleMenu={() => toggleMenu("projects")}
        />
        <About
          isOpen={openTab === "about"}
          isDisabled={!!openTab && openTab !== "about"}
          toggleMenu={() => toggleMenu("about")}
        />
        <Contact
          isOpen={openTab === "contact"}
          isDisabled={!!openTab && openTab !== "contact"}
          toggleMenu={() => toggleMenu("contact")}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
