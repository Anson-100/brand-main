import React from "react";
import {
  ChevronLeftIcon,
  StopIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

interface ProjectItemMobileProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
  techStack: string;
  isLive?: boolean;
}

const ProjectItemMobile: React.FC<ProjectItemMobileProps> = ({
  imgSrc,
  altText,
  title,
  description,
  link,
  techStack,
  // isLive = false,
}) => {
  return (
    <div className="relative project-tile landscape-mobile:rounded-sm rounded-xl p-4 dark:bg-stone-700 backdrop-blur-sm dark:bg-opacity-20">
      <div className="p-1 border-zinc-400 border rounded-lg relative w-[84%] mx-auto mb-4 bg-zinc-900">
        {/* PHONE IMAGE================== */}
        <div className="rounded-b border-zinc-400 border rounded relative">
          <div className="h-5 w-full bg-zinc-800 rounded-t flex items-center justify-center">
            <div className="rounded-full h-3 w-3 bg-zinc-950"></div>
          </div>

          <img
            src={imgSrc}
            alt={altText}
            className="object-cover w-full  landscape-mobile:rounded-sm "
          />
          <div className="absolute bottom-0 h-8 w-full bg-zinc-200 flex items-center justify-between px-12">
            <Bars3Icon className="rotate-90 h-5 text-zinc-700" />
            <StopIcon className="h-5 text-zinc-700" />
            <ChevronLeftIcon className="h-5 text-zinc-700" />
          </div>
        </div>
      </div>
      {/* {isLive ? (
        <div className="absolute top-10 right-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          LIVE
        </div>
      ) : (
        <div className="absolute text-sm top-8 right-8 rounded-full bg-zinc-900 p-2">
          Beta
        </div>
      )} */}
      <div className="flex flex-col pt-2 gap-1">
        <p className="text-base sm:text-xl font-bold text-gray-100 dark:text-gray-800">
          {title}
        </p>
        <p className="text-sm text-gray-300 dark:text-gray-700">
          {description}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
          {techStack}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-3 py-2 text-base font-semibold text-gray-200 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition text-center"
        >
          Visit Site <span className="text-lg">↗</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectItemMobile;
