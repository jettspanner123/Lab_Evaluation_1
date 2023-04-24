import React, {useState} from 'react'
import {BiMenuAltRight}from "react-icons/bi"
const TopNavbar = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(0);
  return (
    <div className="relative text-[1.5rem] text-[#F9E2AF] font-bold text-center pt-2 ">
      <span className="underline decoration-black text-black underline-offset-8">
        TopNavbar
      </span>
      <div>
        <BiMenuAltRight
          size={50}
          className="absolute right-4  rounded-xl p-2 top-[0.25rem] text-black "
          onClick={() => setShow(!show)}
        />
        <div
          className={
            show == true
              ? "border-4 border-black bg-white shadow-xl rounded-xl mt-6 h-[27rem] flex justify-center items-center  w-full mx-auto transition-all duration-300"
              : "bg-white rounded-xl mt-6 h-0 transition-all duration-300 relative w-full mx-auto"
          }
        >
          <ul className={show == true ? "block bg-[#f9e2af] p-4 py-6 border-[4px] border-black w-[90%] mx-auto h-[92%]  rounded-xl" : "hidden"}>
            <li
              className={
                active == 0
                  ? "font-bold text-xl my-4 bg-white border-[4px] border-black transition-all duration-300 text-black  p-4 rounded-xl"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl text-black border-[4px] border-[#f9e2af]"
              }
              onClick={() => setActive(0)}
            >
              HOMEPAGE
            </li>
            <li
              className={
                active == 1
                  ? "font-bold text-xl my-4 bg-white  p-4 rounded-xl border-[4px] transition-all duration-300 border-black text-black"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl text-black border-[4px] border-[#f9e2af]"
              }
              onClick={() => setActive(1)}
            >
              ONLINE FORMS
            </li>
            <li
              className={
                active == 2
                  ? "font-bold text-xl my-4 bg-white  p-4 rounded-xl border-[4px] transition-all duration-300 border-black text-black"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl text-black border-[4px] border-[#f9e2af]"
              }
              onClick={() => setActive(2)}
            >
              CREATE FORMS
            </li>
            <li
              className={
                active == 3
                  ? "font-bold text-xl my-4 bg-white  p-4 rounded-xl border-[4px] transition-all duration-300 border-black text-black"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl text-black border-[4px] border-[#f9e2af]"
              }
              onClick={() => setActive(3)}
            >
              RECOMMENDATIONS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar