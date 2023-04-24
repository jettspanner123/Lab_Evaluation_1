import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {motion} from 'framer-motion'
const HamburgerMenu = () => {
    const [showing, setShowing] = useState(false);
    const options = ['Home', 'Online Forms', 'Create Forms', 'Recommended']
  return (
    <div className="hamburger_menu hidden ">
      <ul className="flex justify-around gap-[0.5rem] ">
        <li 
            onClick={() => setShowing(!showing)}
            className="bg-white  hover:bg-black hover:text-[#f9e1af] transition-all duration-200  text-black flex justify-center items-center p-4 rounded-xl border-[4px] border-black">
          <HiMenuAlt3 size={30} />
        </li>
        <li className="bg-white hover:border-b-[10px] transition-all duration-300 cursor-pointer text-black font-semibold text-xl p-3 flex justify-center items-center rounded-xl border-[4px] border-black">
          SignUp
        </li>
        <li className="bg-white hover:border-b-[10px]  duration-300 text-black font-semibold text-xl p-3 rounded-xl flex justify-center items-center border-[4px] border-black">
          LogIn
        </li>
      </ul>
      <div className={showing == true ? "h-[25rem] transition-all duration-300 w-[25rem] bg-white absolute z-[1000] rounded-xl border-[4px] top-[8rem] border-black" : "top-[-100rem]"}>
        <ul className={showing == true ? "block p-4" : "hidden"}>
          {
            options.map((index) => (
              <li className='w-full text-center text-2xl font-semibold py-4 mt-4 hover:bg-[#f9e2af] rounded-xl border-[4px] border-black transition-all duration-300 hover:border-b-[10px] cursor-pointer'>{index}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu