import React from "react";
import { Image } from "../components/Image";
import { IconType } from "react-icons";

interface FooterProps {
  footerItems: FooterItem[];
}

type FooterItem = {
  link: string;
  image?: any;
  Icon?: IconType;
};

export const Footer: React.FC<FooterProps> = ({ footerItems }) => {
  return (
    <div className="bg-[#f4a261] w-screen">
      <div className="flex flex-row justify-around w-1/2 my-2 mx-auto text-white">
        {React.Children.toArray(
          footerItems.map((item, index) => (
            <div className="my-auto">
              {item.image && <Image url={item.image} imageClass="h-14" />}
              {item.Icon && (
                <a href={item.link}>
                  <item.Icon size="3em" className="text-[#264653]"></item.Icon>
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
