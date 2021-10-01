import React from "react";
import { Image } from "../../components/Image";
import inigo from "../../assets/inigo.jpg";

export const Jokes: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full bg-gray-100">
      <div className="text-3xl font-extrabold text-center text-black font-extrabold">
        Inconceivable!
      </div>
      <Image url={inigo} imageClass="h-2/3 mx-auto mt-6 max-w-2/3" />
    </div>
  );
};
