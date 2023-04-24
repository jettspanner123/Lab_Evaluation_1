import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {motion} from 'framer-motion'
const LocalStorage = () => {
  const [show, setShow] = useState(true);
    
    return (
      <motion.div
        
        className={
          show == true
            ? "bg-[rgba(0,0,0,0.75)] flex  justify-center items-center w-[100vw] h-[100vh] z-[1000] absolute top-0"
            : "opacity-0 hidden"
        }
      >
        <div className="w-[90%] bg-white h-[29rem] rounded-xl py-6 border-[4px] border-black">
          <div className="w-full  relative text-[#f9e3af] text-[3rem] py-5 font-bold text-center">
            Local Storage Permission.
            <AiOutlineClose
              className="absolute right-[7rem] top-6 cursor-pointer border-[4px] border-white hover:border-black rounded-xl hover:bg-[#f9e1af] hover:text-black hover:p-2 transition-all duration-300"
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
          <div className="w-[90%] border-b-[10px]  font-bold flex border-[4px] bg-[#f9e2af] border-black hover:translate-y-2   hover:border-b-[4px]  cursor-pointer justify-center items-center  mx-auto rounded-xl text-2xl  py-4 mb-5" onClick={() => setShow(!show)}>
            I Understand
          </div>
        </div>
      </motion.div>
    );
}

export default LocalStorage