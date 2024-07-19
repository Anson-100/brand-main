import React from "react";

interface ProjectItemProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  altText,
  title,
  description,
  link,
}) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="logo group aspect-w-1 aspect-h-1 relative cursor-pointer group transition-all duration-100 bg-gray-200 hover:bg-gray-100 bg-opacity-30 hover:bg-opacity-100 landscape-mobile:rounded-sm  rounded"
      onClick={handleClick}
    >
      <img
        src={imgSrc}
        alt={altText}
        className="object-cover w-full h-full  landscape-mobile:rounded-sm rounded "
      />
      <div className=" absolute bottom-0 left-0 right-0 landscape-mobile:h-full bg-indigo-950 dark:bg-indigo-900 dark:bg-opacity-75 bg-opacity-75 backdrop-blur-sm py-2   landscape-mobile:py-1 px-4 landscape-mobile:px-2 group-hover:bg-indigo-700 transition-all duration-100  landscape-mobile:rounded-sm rounded-b">
        <p className="text-xs sm:text-sm font-bold text-gray-100">{title}</p>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
