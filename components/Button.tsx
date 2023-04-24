import React from 'react'
import {motion} from 'framer-motion'
export const Button = (props: any) => {
  return (
    <motion.div 
      whileTap={{
        borderBottomWidth: "4px",
        translateY: "0.5rem"
      }}
      className='bg-[#f9e2af] border-[4px] border-black border-b-[10px] w-full font-bold flex justify-center items-center cursor-pointer rounded-xl text-2xl py-4 text-black '>{props.placeholder}</motion.div>
  )
}
