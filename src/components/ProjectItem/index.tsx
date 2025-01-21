import React from "react";

interface ProjectItemProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
  techStack: string; // New prop for technologies used
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  altText,
  title,
  description,
  link,
  techStack,
}) => {
  return (
    <div className="project-tile landscape-mobile:rounded-sm rounded p-4">
      <img
        src={imgSrc}
        alt={altText}
        className="object-cover w-full  landscape-mobile:rounded-sm rounded"
      />
      <div className="flex flex-col pt-2 gap-1">
        <p className="text-base sm:text-lg font-bold text-gray-100">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
        <p className="text-sm text-gray-400 mt-1">{techStack}</p>{" "}
        {/* Tech Stack */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-3 py-2 text-base font-semibold text-gray-200 bg-indigo-600 rounded hover:bg-indigo-500 transition text-center"
        >
          Visit Site <span className="text-lg">↗</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
