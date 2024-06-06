import LightDarkModeSwitch from "@/components/LightDarkModeSwitch";
import { ThemeContext } from "@/components/ThemeContext";
import { useContext } from "react";

import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import IconGH from "@/assets/icon-gh.svg";
import IconGHDark from "@/assets/icon-gh-dark.svg";
import Logo from "@/assets/logo-white-large.png";
import LogoDark from "@/assets/logo-dark-large.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({}: Props) => {
  const flexBetween = "flex items-center justify-between";

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  // const isLandscapeMobile = useMediaQuery(
  //   "(max-height: 440px) and (orientation: landscape)",
  // );

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <nav>
      <div
        className={`$ ${flexBetween} bg-button-bg dark:bg-dark-button-bg fixed top-0 z-30 w-full py-4 landscape-mobile:py-2 border-b-[1px] border-nav-border dark:border-dark-nav-border nav-glow`}
      >
        <div className={`flex items-center justify-between mx-auto w-5/6`}>
          {/* {isAboveMediumScreens ? (
            <p className="text-center text-lg text-text-header dark:text-dark-text-header">
              Anson Hunnell
            </p>
          ) : (
            <p className="text-center text-lg text-text-header dark:text-dark-text-header ">
              Anson Hunnell
            </p>
          )} */}
          <img
            src={isDarkMode ? LogoDark : Logo}
            alt="signature"
            className="w-16landscape-mobile:w-40 opacity-[90]"
          />
          <div className="flex gap-4">
            <a
              href="https://github.com/Anson-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isDarkMode ? IconGHDark : IconGH}
                alt="GitHub"
                className="h-[36px] hover:scale-[1.05] transition-transform duration-200"
              />
            </a>
            <LightDarkModeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
