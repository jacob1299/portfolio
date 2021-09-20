import React from "react";
import { Link } from "react-router-dom";
import { ContactCards } from "../../components/ContactCards";
import { Button } from "../../components/Button";
import { FaCloudDownloadAlt } from "react-icons/fa";
import pdf from "../../assets/badolato_resume.pdf";

const contacts = [
  {
    title: "Email: ",
    content: "jacobb1299@gmail.com",
  },
  {
    title: "Phone: ",
    content: "(205)-567-5135",
  },
  {
    title: "SSN: ",
    content: (
      <Link className="hover:underline" to="/jokes">
        Click to view
      </Link>
    ),
  },
  {
    title: (
      <div>
        <div>Instagram </div>{" "}
        {/*<p className='text-xs'>because I know employers stalk it! <span>&#128517;</span><br/><span className='text-xs'>*Please don't actually DM me*</span></p>*/}
      </div>
    ),
    content: "jacob__1299",
  },
];

export const Contact: React.FC = () => {
  return (
    <div className="bg-indigo-900 h-full w-full">
      <Button className="flex flex-row bg-indigo-300 mx-3 w-auto text-gray-900 mt-2 space-x-4">
        <a href={pdf} download="badolato_resume.pdf">
          Resumé
        </a>
        <FaCloudDownloadAlt className="my-1" />
      </Button>
      <div className="flex flex-col justify-center pt-12">
        <div className="text-2xl text-center text-gray-100 mb-16">
          Please reach out to me at any of the following!
        </div>
        <div className="flex flex-col ">
          <ContactCards cards={contacts} />
        </div>
      </div>
    </div>
  );
};
