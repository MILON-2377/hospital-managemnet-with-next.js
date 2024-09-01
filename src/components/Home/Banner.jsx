"use client";
import { motion } from "framer-motion";
import img from "../../../public/assets/bannerOne.jpg";
import { CiSearch } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const [selectDate, setSelectedDate] = useState(null);
  const {push} = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 10 }}
      transition={{ y: { duration: 1 } }}
      className={` lg:h-[650px] w-[95%] mx-auto lg:w-full flex justify-between  `}
    >
      <div className=" w-full lg:flex-1 lg:ml-10 h-full mt-20 ">
        <p className="text-5xl leading-[60px] font-bold">
          Begin <span className="text-blue-500"> your journey to </span> better
          health with <span className="text-cyan-500">CareLife</span>
        </p>
        <p className=" text-xl mt-3 text-gray-400 ">
          Where top-rated doctors are ready to assist
        </p>
        <button
        onClick={() => push("/signup")}
        className=" mt-10 w-[250px] px-4 py-3 bg-accent text-white hover:bg-white hover:text-accent font-semibold transition-all duration-200 border border-gray-200 rounded-md active:scale-95 active:bg-accent active:bg-opacity-45 ">
          Schedule Your Consultation
        </button>

        {/* search section */}
        <div className=" p-5 border z-10 h-[100px] flex items-center mt-20 border-gray-200 rounded-md">
          <label className=" flex items-center  ">
            <p className=" h-full  ">
              <CiSearch className="text-2xl text-gray-400" />
            </p>
            <input
              className=" p-3 placeholder:text-[16px] focus:outline-none focus:border-none "
              type="search"
              placeholder="Search doctors "
            />
          </label>
          <div className="divider divider-horizontal h-[80%] my-auto "></div>
          <label className=" flex items-center w-[120px] gap-3">
            <span>
              <CiLocationArrow1 className="text-[24px] text-gray-400" />
            </span>
            <span className=" lg:text-xl text-[16px] text-gray-400 ">Location</span>
          </label>
          <div className="divider divider-horizontal h-[80%] my-auto "></div>
          <label className=" flex items-center gap-3">
            <span>
              <MdOutlineCalendarMonth className="text-[24px] text-gray-400" />
            </span>
            <DatePicker
              value={selectDate}
              onChange={(newDate) => {
                setSelectedDate(newDate.toLocaleString());
              }}
              placeholderText="Select expectd schedule date"
              className="focus:outline-none text-[16px] focus:border-none "
            />
          </label>
          {/* <button className="p-3 rounded-md bg-cyan-300">Search</button> */}
        </div>
      </div>


      <div
        style={{ backgroundImage: `url(${img.src})` }}
        className="w-[50%] hidden lg:block h-[650px] relative bg-cover bg-center "
      >
        {/* check up section */}
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: [0, 15, 0], opacity: [1, 1, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className=" p-4 w-[250px] absolute top-32 z-50 bg-base-100 shadow-lg rounded-md flex items-center gap-3 "
        >
          <span>
            <FaCircleCheck className="text-3xl text-green-500" />
          </span>
          <span className="text-xl text-slate-700 ">Regular Check up</span>
        </motion.div>

        {/* meet our doctors section */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            y: [0, 15, 0],
            opacity: [1, 1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className=" absolute w-[260px] top-[450px] right-24 z-50 p-4 bg-base-100 shadow-lg rounded-md "
        >
          <p className="text-xl text-slate-700 ">Meet our doctors</p>
          <div className="avatar-group mt-3 -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar ">
              <div className="w-12 bg-green-500">
                <p className="text-white text-xl text-center mt-2 ">6k</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// doctors images
const doctors = ["", "", "", "", ""];
