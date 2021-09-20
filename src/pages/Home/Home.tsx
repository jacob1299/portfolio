import React from "react";
import { Image } from "../../components/Image";

import headshot from "../../../src/headshot_closeup.jpg";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-indigo-900">
      {/* style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0)), url(${aurora})`} */}
      <div className="flex flex-col h-auto my-auto">
        <div className="text-3xl text-white font-extrabold pl-12">
          Hi, I'm Jacob. <br />
        </div>
        <p className="text-2xl text-white pl-14 pt-4">
          I have a strong passion for learning and desire to always do my best.
          <br />
          Some call this a try-hard, but I call it <br />
          <span className="ml-96 text-3xl font-bold text-green-600">
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
