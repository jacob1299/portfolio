import React from "react";
import { Image } from "../../components/Image";
import inigo from "../../assets/inigo.jpg";

export const Jokes: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full bg-gray-700">
      <div className="text-3xl font-extrabold text-center text-white font-extrabold py-4">
        Inconceivable!
      </div>
      <Image url={inigo} imageClass="h-2/3 mx-auto my-auto" />
    </div>
  );
};
