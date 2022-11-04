import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [send, setSend] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    if (message && check && firstName && lastName && email) {
      setMessage("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setCheck(!check);
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 2000);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      alert("Error:Fill in the neccessary information");
    }
  };

  const textField = (e) => {
    setMessage(e.target.value);
  };
  const firstNameInput = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameInput = (e) => {
    setLastName(e.target.value);
  };
  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const checkbox = (e) => {
    const checkedBox = e.target.checked;
    checkedBox ? setCheck(true) : setCheck(false);
  };

  return (
    <div className="py-[90px] contact mx-4 ">
      <h1 className="font-bold pb-3 text-[36px]">Contact Me</h1>
      <p className="pb-5 text-[#475467] text-[20px] font-normal">
        Hi there, contact me to ask about anything you have in mind
      </p>
      <div className={`${send ? "mb-4 p-5 bg-[#30f880]" : "hidden"}`}>
        <h1 className="font-bold">Message Sent!</h1>
      </div>
      {/* form */}
      <form action="">
        <div className="grid gap-5 md:grid-cols-2 pb-4">
          {/* first name input */}
          <div className=" grid gap-2">
            <label htmlFor="first_name" className=" font-medium text-[14px]">
              First name
            </label>
            <input
              onChange={firstNameInput}
              required
              value={firstName}
              className="border focus:outline-none py-2 border-[#D0D5DD] px-3 rounded-[8px]"
              placeholder="Enter Your first name"
              id="first_name"
              type="text"
            />
          </div>
          {/* last name input */}
          <div className="grid gap-2">
            <label htmlFor="last_name" className=" font-medium text-[14px]">
              Last name
            </label>
            <input
              onChange={lastNameInput}
              required
              value={lastName}
              className="border focus:outline-none py-2 border-[#D0D5DD] px-3 rounded-[8px]"
              placeholder="Enter Your last name"
              id="last_name"
              type="text"
            />
          </div>
        </div>
        {/* email input */}
        <div className=" grid pb-4">
          <label htmlFor="email" className=" pb-2 font-medium text-[14px]">
            Email
          </label>
          <input
            onChange={emailInput}
            required
            value={email}
            className="border focus:outline-none py-2 border-[#D0D5DD] px-3 rounded-[8px]"
            placeholder="yourname@gmail.com"
            id="email"
            type="email"
          />
        </div>
        {/* message textarea */}
        <div className=" grid pb-5">
          <label htmlFor="message" className=" font-medium  pb-2 text-[14px]">
            Message
          </label>
          <textarea
            onChange={textField}
            value={message}
            name=""
            cols="10"
            rows="5"
            className="border py-2 focus:outline-none border-[#D0D5DD] px-3 rounded-[8px]"
            placeholder="Send me a message and i will reply you as soon as possible"
            id="message"
            type="email"
          ></textarea>
        </div>

        {/* privacy permission */}

        <div className="flex items-center gap-2">
          <input
            onChange={checkbox}
            checked={check ? true : false}
            type="checkbox"
            name=""
            id=""
          />
          <p className="text-[16px] leading-6 font-normal text-[#475467]">{`You agree to providing your data to {name} who may contact You.`}</p>
        </div>

        {/* submisson button */}
        <button
          onClick={submitHandler}
          id="btn__submit"
          className="w-full py-[12px] font-semibold text-white text-[16px] rounded-[8px] mt-6 bg-[#1570EF]"
        >
          Send a message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
