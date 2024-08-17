"use client";
import { motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";
import { GrTestDesktop } from "react-icons/gr";
import { GiMedicinePills } from 'react-icons/gi';
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

export default function Features() {
  return (
    <motion.div className="mt-16 w-[95%] lg:w-full mx-auto grid grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6 lg:p-10 ">
      <motion.div
      className="p-4 h-[200px hover:bg-blue-300 duration-200 hover:cursor-pointer w-full lg:w-[170px] flex items-center justify-center flex-col gap-8 border border-gray-200 rounded-md  ">
        <motion.div
        whileHover={{rotate:360}}
        transition={{duration:0.3}}
        className="w-16 h-16 flex items-center justify-center p-2 rounded-full bg-blue-100 "> 
          <FcCalendar className="text-5xl" />
        </motion.div>
        <p className="text-xl font-semibold text-center text-slate-700 ">Book Appointment</p>
      </motion.div>
      <motion.div
      className="p-4 h-[200px hover:bg-orange-100 duration-200 hover:cursor-pointer w-full lg:w-[170px] flex items-center justify-center flex-col gap-8 border border-gray-200 rounded-md  ">
        <motion.div
        whileHover={{rotate:360}}
        transition={{duration:0.3}}
        className="w-16 h-16 flex items-center justify-center p-3 rounded-full bg-orange-100 "> 
          <GrTestDesktop className="text-5xl" />
        </motion.div>
        <p className="text-xl text-center text-slate-700 font-semibold">Lab testing Services</p>
      </motion.div>


      <motion.div
      className="p-4 h-[200px hover:bg-sky-300 duration-200 hover:cursor-pointer w-full lg:w-[170px] flex items-center justify-center flex-col gap-8 border border-gray-200 rounded-md  ">
        <motion.div
        whileHover={{rotate:360}}
        transition={{duration:0.3}}
        className="w-16 h-16 flex items-center justify-center p-2 rounded-full bg-sky-200 "> 
          <GiMedicinePills className="text-5xl" />
        </motion.div>
        <p className="text-xl text-center text-slate-700 font-semibold ">Medicines & Supplies</p>
      </motion.div>


      <motion.div
      className="p-4 h-[200px hover:bg-green-200 duration-200 hover:cursor-pointer w-full lg:w-[170px] flex items-center justify-center flex-col gap-8 border border-gray-200 rounded-md  ">
        <motion.div
        whileHover={{rotate:360}}
        transition={{duration:0.3}}
        className="w-16 h-16 flex items-center justify-center p-2 rounded-full bg-green-100 "> 
          <BsFillFileEarmarkMedicalFill className="text-5xl" />
        </motion.div>
        <p className="text-xl font-semibold text-center text-slate-700 ">Reports & services</p>
      </motion.div>


      <motion.div
      className="p-4 h-[200px hover:bg-cyan-200 duration-200 hover:cursor-pointer w-full lg:w-[170px] flex items-center justify-center flex-col gap-8 border border-gray-200 rounded-md  ">
        <motion.div
        whileHover={{rotate:360}}
        transition={{duration:0.3}}
        className="w-16 h-16 flex items-center justify-center p-2 rounded-full bg-cyan-100 "> 
          <RiMentalHealthFill className="text-5xl" />
        </motion.div>
        <p className="text-xl text-center text-slate-700 font-semibold ">Health Care Service</p>
      </motion.div>


      <motion.div
      className="p-4 h-[200px hover:bg-lime-200 duration-200 hover:cursor-pointer w-full lg:w-[170px] flex items-center justify-center flex-col gap-8 border border-gray-200 rounded-md  ">
        <motion.div
        whileHover={{rotate:360}}
        transition={{duration:0.3}}
        className="w-16 h-16 flex items-center justify-center p-2 rounded-full bg-lime-100 "> 
          <IoCall className="text-5xl" />
        </motion.div>
        <p className="text-xl text-center text-slate-700 font-semibold ">Talk to Doctor</p>
      </motion.div>
      
    </motion.div>
  );
}
