import React from "react";
import innsbruck from "../../../src/innsbruck.jpg";

export const Bio: React.FC = () => {
  return (
    <div
      className="w-auto h-full bg-auto bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.5)), url(${innsbruck})`,
      }}
    >
      <div className="flex flex-col p-2 w-full h-full text-black my-auto mx-auto text-center">
        <h2 className="text-3xl font-bold pb-8">About Me</h2>
        <p className="px-16 font-bold">
          Ever since I was a child, I have been fascinated by the weather.
          You're probably wondering why this matters since I am a software
          engineer. Well, it gave me a strong passion for learning and led me to
          be incredibly self-motivated. It all began with a colorful temperature
          map on the news when I was four years old. Since then, I have been
          obsessed with tornadoes, hurricanes, and especially snow (though
          hodograph data is fun to read). If you know anything about
          meteorology, I was the kid looking at the 06Z GFS run each night
          before bed, or morning if I was tired. I've been called upon numerous
          times to give a forecast for family events and sports games, and even
          have friends randomly texting me if it's going to rain tomorrow (which
          I just look at the forecast like they could, but I wouldn't ever tell
          them that ;) ) However, all of this also led me to finding software.
          Through freaking out each time I analyzed a numerical weather model
          and atmospheric dynamics tool, I began to appreciate software at a
          deeper level. This, as well as my father, helped me to choose to
          pursue an academic career in computer science. From my very first
          "Hello, World!" program, I have become increasingly drawn to the
          diversity and scope of practice that software engineering has. I truly
          believe the saying "You can do anything if you put your mind to it."
          is especially true when it comes to software, and I am excited to be a
          part of the software movement in my future career.
        </p>
      </div>
    </div>
  );
};
