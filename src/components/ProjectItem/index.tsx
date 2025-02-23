import React from "react";

interface ProjectItemProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
  techStack: string;
  isLive?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
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
      <div className="rounded-b border-zinc-400 border rounded-lg overflow-hidden p-1 bg-zinc-900">
        <div className="rounded border-zinc-400 border overflow-hidden">
          {" "}
          <img
            src={imgSrc}
            alt={altText}
            className="object-cover w-full landscape-mobile:rounded-sm "
          />
        </div>
      </div>
      <div className="w-24 md:w-32 h-6 border-zinc-400 border-x mx-auto bg-zinc-950"></div>
      <div className="w-1/3 h-2 md:h-3 border-zinc-400 border rounded-sm mx-auto mb-4 bg-zinc-900"></div>

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

export default ProjectItem;
