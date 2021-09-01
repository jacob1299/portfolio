import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface NavProps {
  links: ILink[];
}

export type ILink = {
  title: string;
  to: string;
};

export const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <Router>
      <div className="bg-gray-900 w-full flex flex-col items-end">
        <div className="flex flex-row w-1/4 text-2xl justify-around">
          {links.map((link, index) => (
            <div className="text-gray-200 hover:text-blue-300" key={`link-${index}`}>
              <Link to={links[index].to} key={`link-${index}`}>
                {links[index].title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
};
