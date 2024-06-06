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
      className="group project-item  aspect-w-1 aspect-h-1 relative rounded-md sm:rounded-md overflow-hidden cursor-pointer group transition-all duration-200  "
      onClick={handleClick}
    >
      <img
        src={imgSrc}
        alt={altText}
        className="object-cover w-full h-full rounded sm:rounded-md"
      />
      <div className=" absolute bottom-0 left-0 right-0 landscape-mobile:h-full bg-indigo-900 bg-opacity-75 backdrop-blur-sm py-2 rounded-b-md landscape-mobile:rounded-md sm:rounded-md  landscape-mobile:py-1 px-4 landscape-mobile:px-2 group-hover:bg-indigo-700 transition-all duration-200">
        <p className="text-xs sm:text-sm font-bold text-gray-100">{title}</p>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
