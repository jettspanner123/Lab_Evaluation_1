import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiLogIn, FiUser } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { IoMdKey } from "react-icons/io";
import { Button } from "./Button";
const SideNavbar = () => {
  const [active, setActive] = useState(0);
  const [signUpActive, setSignUpActive] = useState(false);
  const [logInActive, setLogInActive] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassowrd] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");




  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: "-50rem" }}
      transition={{
        duration: 3,
        delay: 3.5,
        ease: "easeInOut",
        type: "spring",
      }}
      className="w-full side_navbar font-Poppins bg-[#F9E2AF] border-[4px] border-black text-[#F9E2AF] font-bold h-full   rounded-[1rem]"
    >
      <h1 className="text-[2rem] my-[4rem] border-black border-[4px] text-black   w-[80%] bg-white py-6 mx-auto text-center rounded-xl">
        Chit Forms
      </h1>
      <ul>
        <li
          className={
            active == 0
              ? "bg-white border-[4px]  border-black text-black  my-6 text-[1.5rem] w-[80%] mx-auto p-4 rounded-xl text-center cursor-pointer hover:bg-white  transition-all duration-300"
              : "text-[1.5rem] w-[80%] my-6  mx-auto p-4 rounded-xl border-[4px] border-[#f9e2af] text-center cursor-pointer hover:bg-white hover:text-[#F9E2AF]  text-white transition-all duration-300"
          }
          onClick={() => setActive(0)}
        >
          <span className="hide">---</span>HOMEPAGE
          <span className="hide">---</span>
        </li>
        <li
          className={
            active == 1
              ? "bg-white border-[4px] border-black text-black  my-6 text-[1.5rem] w-[80%] mx-auto p-4 rounded-xl text-center cursor-pointer hover:bg-white  transition-all duration-300"
              : "text-[1.5rem] w-[80%] my-6 mx-auto p-4 rounded-xl text-center cursor-pointer border-[4px] border-[#f9e2af] hover:bg-white hover:text-[#F9E2AF] text-black transition-all duration-300"
          }
          onClick={() => setActive(1)}
        >
          <span className="hide">-</span>ONLINE FORMS
          <span className="hide">-</span>
        </li>
        <li
          className={
            active == 2
              ? "bg-white border-[4px] border-black text-black  my-6 text-[1.5rem] w-[80%] mx-auto p-4 rounded-xl text-center cursor-pointer hover:bg-white  transition-all duration-300"
              : "text-[1.5rem] w-[80%] my-6 mx-auto p-4 rounded-xl text-center border-[4px] border-[#f9e2af] cursor-pointer hover:bg-white hover:text-[#F9E2AF] text-black transition-all duration-300"
          }
          onClick={() => setActive(2)}
        >
          <span className="hide">-</span>CREATE FORMS
          <span className="hide">-</span>
        </li>
        <li
          className={
            active == 3
              ? "bg-white border-[4px] border-black text-black  my-6 text-[1.5rem] w-[80%] mx-auto p-4 rounded-xl text-center cursor-pointer hover:bg-white  transition-all duration-300"
              : "text-[1.5rem] w-[80%] my-6 mx-auto p-4 rounded-xl text-center border-[4px] border-[#f9e2af] cursor-pointer hover:bg-white hover:text-[#F9E2AF] text-black transition-all duration-300"
          }
          onClick={() => setActive(3)}
        >
          RECOMMENDED
        </li>
      </ul>
      <ul className="mt-[7rem] text-black">
        <li
          onClick={() => setLogInActive(!logInActive)}
          className="bg-white border-[4px] border-black hover:border-x-0  my-6 text-[1.5rem] w-[80%] mx-auto p-4 rounded-xl text-center cursor-pointer hover:bg-white  transition-all duration-300  hover:rounded-none hover:w-full flex items-center justify-center gap-[1rem]"
        >
          LogIn
          <FiLogIn size={30} />
        </li>
        <li
          className={
            "bg-white   my-6 text-[1.5rem] w-[80%] mx-auto p-4 rounded-xl border-[4px] border-black hover:border-x-0 text-center cursor-pointer hover:bg-white  transition-all duration-300 hover:rounded-none hover:w-full flex items-center justify-center gap-[0.5rem]"
          }
          onClick={() => setSignUpActive(!signUpActive)}
        >
          SignUp
          <MdOutlinePerson size={30} />
        </li>
      </ul>

      {/* this is the sign up and login dialog box */}
      <div
        className={
          signUpActive == true
            ? "w-[40%] h-[90%] rounded-xl absolute top-[50%] left-[50%]  border-[4px] border-black bg-white shadow_full translate-x-[-50%] translate-y-[-50%] z-[1000000] "
            : "hidden"
        }
      >
        <div className="flex relative">
          <h1 className="font-bold w-full text-[4rem] underline underline-2 text-center my-6 text-black">
            SignIn
          </h1>
          <RxCross1
            size={50}
            onClick={() => setSignUpActive(!signUpActive)}
            className="text-black absolute right-[4rem] cursor-pointer border-[4px] border-white hover:bg-[#f9e2af] hover:p-2 transition-all duration-300 hover:border-black  rounded-xl top-[3rem]"
          />
        </div>
      </div>
      {/* this is the log in dialog box */}
      <div
        className={
          logInActive == true
            ? "w-[40%] h-[90%]  rounded-xl absolute top-[50%] left-[50%]  border-[4px] border-black bg-white shadow_full translate-x-[-50%] translate-y-[-50%] z-[1000000] "
            : "hidden"
        }
      >
        <div className="flex flex-col relative">
          <h1 className="font-bold w-full underline underline-2 text-[4rem] text-center my-6 text-black">
            LogIn
          </h1>
          <div className="text-black flex justify-around w-[70%] mx-auto  mt-[8rem]">
            <FiUser
              size={60}
              className="bg-[#f9e2af] p-2 rounded-xl border-[4px] border-black"
            />
            <input
              className="w-[80%] border-[4px] border-black rounded-xl font-semibold px-5"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="text-black flex justify-around w-[70%] mx-auto  mt-[3rem]">
            <IoMdKey
              size={60}
              className="bg-[#f9e2af]  p-2 rounded-xl border-[4px] border-black"
            />
            <input
              className="w-[80%] border-[4px] border-black rounded-xl font-semibold px-5"
              type="password"
              placeholder="Password."
              onChange={(e) => setLoginPassowrd(e.target.value)}
            />
          </div>
          <div className="w-[68%] mx-auto mt-10">
            <Button placeholder="Submit" />
          </div>
          <div className="w-[68%] mx-auto  mt-10">
            <p className="text-black font-semibold ">Continue as Guest User?</p>
          </div>
          <div className="flex items-center justify-between w-[68%] bg-gray-200 p-6 transition-all duration-300 rounded-2xl mx-auto mt-5 hover:bg-gray-300 cursor-pointer text-black">
            <FiUser
              size={70}
              className="bg-[#f9e2af] p-2 border-[4px] border-black rounded-full"
            />
            <h1 className=" w-full text-2xl font-semibold ml-10">Guest</h1>
          </div>
          <RxCross1
            size={50}
            onClick={() => setLogInActive(!logInActive)}
            className="text-black absolute right-[4rem] cursor-pointer border-[4px] border-white hover:bg-[#f9e2af] hover:p-2 transition-all duration-300 hover:border-black  rounded-xl top-[3rem]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SideNavbar;
