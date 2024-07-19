// LightDarkModeSwitch.tsx
import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "@/components/ThemeContext";

const LightDarkModeSwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center justify-center p-1.5 rounded-full  bg-zinc-600 dark:bg-stone-500"
      aria-label="Toggle Dark Mode"
    >
      {!isDarkMode ? (
        <SunIcon className="w-6 h-6 text-gray-100 group-hover:text-yellow-500 animate-rotate-scale transition-all duration-200" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-100 group-hover:text-blue-300 animate-rotate-scale transition-all duration-200" />
      )}
    </button>
  );
};

export default LightDarkModeSwitch;
