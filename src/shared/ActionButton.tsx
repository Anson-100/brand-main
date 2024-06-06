import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="border-[2px] border-white-1cla00 hover:border-purple-100 rounded-lg h-[100px] w-[200px] relative mt-auto ml-auto hover:bg-purple-100 hover:text-black-100 transition-all duration-100"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      <p className="absolute bottom-2 right-5 font-bold text-btn">{children}</p>
    </AnchorLink>
  );
};

export default ActionButton;
