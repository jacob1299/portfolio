import React from "react";
import { Image } from "../../components/Image";
import headshot from "../../../src/headshot_closeup.jpg";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 h-auto">
      {/* style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0)), url(${aurora})`} */}
      <div className="flex flex-col ">
        <div className="text-6xl lg:text-3xl text-blue-600 font-extrabold pl-2 pt-8">
          Hi, I'm Jacob. <br />
        </div>
        <p className="text-5xl lg:text-2xl text-black pl-3 pt-4">
          I have a strong passion for learning and desire to always do my best.
          <br />
          Some call this a try-hard, but I call it <br />
          <span className="ml-12 lg:ml-96 pt-24 text-8xl lg:text-2xl font-bold text-green-600">
            SUCCESS.
          </span>
        </p>
        <Image url={headshot} imageClass="mx-auto h-96 lg:h-64 mt-24 lg:mt-0" />
      </div>
    </div>
  );
};
