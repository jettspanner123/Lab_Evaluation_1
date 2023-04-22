import React, {useState} from 'react'
import {BiMenuAltRight}from "react-icons/bi"
const TopNavbar = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(0);
  return (
    <div className="relative text-[1.5rem] text-[#F9E2AF] font-bold text-center pt-2 ">
      TopNavbar
      <div>
        <BiMenuAltRight
          size={50}
          className="absolute right-4  rounded-xl p-2 top-[0.25rem] "
          onClick={() => setShow(!show)}
        />
        <div
          className={
            show == true
              ? "bg-white border-4 border-[#F9E2AF] shadow-xl rounded-xl mt-6 h-[22rem] w-full mx-auto transition-all duration-300"
              : "bg-white rounded-xl mt-6 h-0 transition-all duration-300 relative w-full mx-auto"
          }
        >
          <ul className={show == true ? "block p-4 py-6" : "hidden"}>
            <li
              className={
                active == 0
                  ? "font-bold text-xl my-4 bg-[#F9E2AF] text-white p-4 rounded-xl"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl"
              }
              onClick={() => setActive(0)}
            >
              HOMEPAGE
            </li>
            <li
              className={
                active == 1
                  ? "font-bold text-xl my-4 bg-[#F9E2AF] text-white p-4 rounded-xl"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl"
              }
              onClick={() => setActive(1)}
            >
              ONLINE FORMS
            </li>
            <li
              className={
                active == 2
                  ? "font-bold text-xl my-4 bg-[#F9E2AF] text-white p-4 rounded-xl"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl"
              }
              onClick={() => setActive(2)}
            >
              CREATE FORMS
            </li>
            <li
              className={
                active == 3
                  ? "font-bold text-xl my-4 bg-[#F9E2AF] text-white p-4 rounded-xl"
                  : "font-bold text-xl my-4 py-4 rounded-l-xl"
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