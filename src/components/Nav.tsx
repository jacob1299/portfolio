import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

interface NavProps {
  links: ILink[];
}

export type ILink = {
  title: string;
  to: string;
};

export const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <div className="bg-[#2a9d8f] flex flex-col items-end w-screen">
      <div className="flex flex-row w-1/4 text-2xl justify-around">
        {links.map((link, index) => (
          <Button className="bg-[#f4a261] hover:bg-[#e9c46a]">
            <Link to={links[index].to} key={`link-${index}`}>
              {links[index].title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
