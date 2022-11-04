import React from "react";
import { Link } from "react-router-dom";

const LinkSection = () => {
  return (
    <div className=" mx-4 lg:mx-[180px] pb-6">
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <a className=" font-medium text-[18px]" href="/">
          Twitter Link
        </a>
      </div>
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <a
          className=" font-medium text-[18px]"
          id="btn__zuri"
          href="https://training.zuri.team/"
        >
          Zuri Team
        </a>
      </div>
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <a
          className=" font-medium text-[18px]"
          id="books"
          href="http://books.zuri.team"
        >
          Zuri Books
        </a>
      </div>
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <a
          className=" font-medium text-[18px]"
          href="https://books.zuri.team/python-for-beginners?ref_id=<Olaniran Micheal>"
        >
          Python Books
        </a>
      </div>
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <a
          className=" font-medium text-[18px]"
          id="pitch"
          href="https://background.zuri.team"
        >
          Background Check for Coders
        </a>
      </div>
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <a
          className=" font-medium text-[18px]"
          id="book__design"
          href="https://books.zuri.team/design-rules"
        >
          Design Books
        </a>
      </div>
      <div className="flex justify-center py-5 mb-5 rounded-[8px] bg-[#EAECF0]">
        <Link to={"/contact"} className=" font-medium text-[18px]" id="contact">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default LinkSection;
