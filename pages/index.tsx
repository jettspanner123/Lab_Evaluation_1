import type { NextPage } from "next";
import { motion } from "framer-motion";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";
import LocalStorage from "../components/LocalStorage";
import HamburgerMenu from "../components/HamburgerMenu";
const Home: NextPage = () => {
  return (
    <div className="">
      <LocalStorage />
      <div className="w-[100vw] h-[100vh] bg-[#F9E2AF] relative  justify-center items-center md:flex hidden ">
        <motion.div
          className="flex justify-around gap-[1rem]"
          animate={{
            transform: "rotate(360deg)",
          }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: 1,
          }}
        >
          <motion.div
            animate={{ display: "none" }}
            transition={{ delay: 3 }}
            className="bg-white center_div rounded-[50%] h-[4rem] w-[4rem] border-[4px] border-black"
          >
            <motion.div
              animate={{ display: "block" }}
              initial={{ display: "none" }}
              transition={{
                delay: 3,
              }}
            >
              1
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-white center_div rounded-[50%] h-[4rem] w-[4rem] flex overflow-hidden justify-center md:justify-start`"
            animate={{
              y: 0,
              height: "96vh",
              width: "98vw",
              borderRadius: "1rem",
            }}
            initial={{
              height: "4rem",
              width: "4rem",
              borderRadius: "50%",
              border: "4px solid black",
            }}
            transition={{
              duration: 1,
              delay: 3,
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{ display: "block" }}
              initial={{ display: "none" }}
              transition={{
                delay: 3,
              }}
              className="w-[20%] hidden md:block p-4"
            >
              <SideNavbar />
            </motion.div>
            <motion.div
              animate={{ display: "block" }}
              initial={{ display: "none" }}
              transition={{
                delay: 3,
              }}
              className="w-[80%] main_div bg-[#F9E2AF] border-[4px] border-black m-4 rounded-xl mr-5 "
            >
              {
                <div className="w-full  m-6 flex justify-between pr-12  ">
                  <HamburgerMenu />
                  <motion.div
                    animate={{ rotate: "720deg" }}
                    transition={{
                      duration: 3,
                      delay: 3,
                      repeat: 1000,
                      stiffness: 1,
                    }}
                    className="w-[8rem]  h-[8rem] relative  rounded-[50%] bg-white border-[4px] border-black"
                  >
                    <div className="w-[1.5rem] h-[1.5rem] bg-[#f9e2af] absolute left-4 top-[3.6rem] text-[#F9E2AF] border-[4px] border-black rounded-[50%]"></div>
                  </motion.div>
                </div>
              }
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ display: "none" }}
            transition={{ delay: 3 }}
            className="bg-white center_div rounded-[50%] h-[4rem] w-[4rem] flex border-[4px] border-black"
          ></motion.div>
        </motion.div>
      </div>
      {/* FOR MOBILE PHONES DIKHEAD */}
      <div className="md:hidden block w-[100vw] h-[100vh] p-4 bg-[#F9E2AF]">
        <div className="w-full bg-white rounded-xl h-full border-[4px] border-black p-4">
          <TopNavbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
