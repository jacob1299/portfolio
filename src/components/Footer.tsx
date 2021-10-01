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
  const width = window.screen.width;

  return (
    <div className="flex flex-0 justify-around bg-none mx-auto w-full lg:w-1/2 bottom-0 fixed">
      {React.Children.toArray(
        footerItems.map((item, index) => (
          <>
            {item.image && <Image url={item.image} imageClass="h-14" />}
            {item.Icon && (
              <a href={item.link}>
                {width < 768 ? (
                  <item.Icon size="6em" className="text-black "></item.Icon>
                ) : (
                  <item.Icon size="3em" className="text-black "></item.Icon>
                )}
              </a>
            )}
          </>
        ))
      )}
    </div>
  );
};
