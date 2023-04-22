import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {motion} from 'framer-motion'
const LocalStorage = () => {
  const [show, setShow] = useState(false);
    
    return (
      <motion.div
        
        className={
          show == true
            ? "bg-[rgba(0,0,0,0.75)] flex  justify-center items-center w-[100vw] h-[100vh] z-[1000] absolute top-0"
            : "opacity-0 hidden"
        }
      >
        <div className="w-[90%] bg-white rounded-xl py-6">
          <div className="w-full  relative text-[#f9e3af] text-[3rem] py-5 font-bold text-center">
            Local Storage Permission.
            <AiOutlineClose
              className="absolute right-[7rem] top-6 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </div>
          <div className="w-[90%] mx-auto p-4 text-xl text-center my-10">
            This site uses local storage to store data locally. With the help of
            local storage the site it able to be better in the user experience
            department. The data is not deleted when the browser is closed, and
            are available for future sessions. With this we will be able to get,
            store and sort the data entered and will be a handfull. Thank You.
          </div>
          <div className="w-[90%] font-bold flex border-2 border-white hover:border-[#F9E2AF] hover:bg-white  hover:text-[#F9E2AF] transition-all duration-300 cursor-pointer justify-center items-center bg-[#F9E2AF] mx-auto rounded-xl text-2xl text-white py-4 mb-5" onClick={() => setShow(!show)}>
            I Understand
          </div>
        </div>
      </motion.div>
    );
}

export default LocalStorage