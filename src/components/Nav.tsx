import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Button } from "../components/Button";
import menu from "../assets/menu.svg";

interface NavProps {
  links: ILink[];
}

export type ILink = {
  title: string;
  to: string;
};

const width = window.screen.width;
const height = window.screen.height;

export const Nav: React.FC<NavProps> = ({ links }) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleOpen = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-row w-1/4 text-2xl justify-around text-blue-700 font-semibold ml-auto">
      {width < 768 ? (
        <Menu
          isOpen={toggle}
          onOpen={handleOpen}
          customBurgerIcon={<img src={menu} />}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/bio">
            Bio
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      ) : (
        links.map((link: ILink, index: number) => (
          <div className="pr-6">
            <Link to={links[index].to} key={`link-${index}`}>
              {links[index].title}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
