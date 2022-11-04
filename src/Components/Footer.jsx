import React from "react";
import I4G from "../Assets/I4G.png";
import zuriLogo from "../Assets/logo.36d2d48a.png";

const Footer = () => {
  return (
    <div className="lg:mx-[150px] pb-5 md:block  mx-4">
      <hr className=" mb-12" />
      <div className="md:flex grid gap-3  md:justify-between items-center">
        <img src={zuriLogo} alt="" />
        <p className=" text-[#667085] font-normal text-[16px]">
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4G} alt="" />
      </div>
    </div>
  );
};

export default Footer;
