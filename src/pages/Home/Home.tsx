import React from "react";
import { Image } from "../../components/Image";

import headshot from "../../../src/headshot_closeup.jpg";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-[#e9c46a]">
      {/* style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0)), url(${aurora})`} */}
      <div className="flex flex-col">
        <div className="text-3xl text-[#e76f51] font-extrabold pl-12 pt-8">
          Hi, I'm Jacob. <br />
        </div>
        <p className="text-2xl text-[#264653] pl-14 pt-4">
          I have a strong passion for learning and desire to always do my best.
          <br />
          Some call this a try-hard, but I call it <br />
          <span className="ml-96 pt-24 text-3xl font-bold text-[#2a9d8f]">
            SUCCESS.
          </span>
        </p>
      </div>
      <Image
        url={headshot}
        imageClass="h-auto md:h-2/3 sm:mx-auto lg:mx-0 lg:ml-auto p-3 "
      />
    </div>
  );
};
