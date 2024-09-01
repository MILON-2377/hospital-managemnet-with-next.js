"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function Priceing() {
  const [isBasicPlaneHover, setBasicPlaneHover] = useState(false);
  const [isEnterPriseHover, setIsEnterPriseHover] = useState(false);
  return (
    <div className=" w-full mt-16  lg:px-10 py-14 ">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center"
      >
        <h1 className=" text-4xl font-bold ">Pricing Plan</h1>
        <span className="text-5xl -mt-12 -ml-2 text-sky-500 font-bold ">+</span>
        <span className="text-4xl -mt-12 -ml-2 opacity-25 text-sky-500 font-bold ">
          +
        </span>
      </motion.div>

      <motion.div 
      initial={{y:70, opacity:0}}
      whileInView={{y:0, opacity:1,}}
      transition={{duration:1}}
      viewport={{once:true}}
      className=" mt-10 w-full flex lg:flex-row flex-col gap-6">
        {/* basic plan */}
        <motion.div
          onMouseEnter={() => setBasicPlaneHover(true)}
          onMouseLeave={() => setBasicPlaneHover(false)}
          className={` ${
            isBasicPlaneHover ? " bg-blue-500 text-white " : " bg-zinc-50 "
          } p-5 sm:w-[90%] w-[95%] h-[450px] mt-16 gap-5 mx-auto border border-gray-200 rounded-md `}
        >
          <div className="flex items-center gap-2">
            <motion.div className=" w-16 h-16 rounded-lg flex items-center justify-center bg-white ">
              <FaUser className="text-4xl text-blue-500" />
            </motion.div>
            <p className="text-xl font-semibold ">Basic</p>
          </div>

          <div className=" mt-5 flex items-center gap-3">
            <p className="text-3xl font-bold">$80</p>
            <span className="mt-4 text-gray-300">/monthly</span>
          </div>

          <p className=" mt-5 text-xl font-semibold ">Whats included</p>

          <div className={`  mt-5 flex flex-col gap-2`}>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isBasicPlaneHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isBasicPlaneHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                Profile Creation
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isBasicPlaneHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isBasicPlaneHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                Appointment Bookin
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isBasicPlaneHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isBasicPlaneHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                Notification Aletts
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isBasicPlaneHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isBasicPlaneHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                Limited Telemedicine Access
              </span>
            </p>
          </div>
          <button
            className={` ${
              isBasicPlaneHover ? " bg-blue-400 " : "bg-blue-500"
            } mt-5 px-4 py-3 rounded-md  text-xl font-semibold text-white w-full `}
          >
            Choose Plan
          </button>
        </motion.div>

        {/* pro plan */}
        <motion.div className=" w-[95%] rounded-md mx-auto sm:w-[90%] lg:w-full bg-blue-500 p-5 ">
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div className=" w-16 h-16 rounded-lg flex items-center justify-center bg-white ">
                <IoHomeSharp className="text-4xl text-blue-500" />
              </motion.div>
              <p className="text-xl font-semibold text-white ">Pro</p>
            </div>
            <p className=" p-4 bg-blue-400 text-white font-semibold rounded-md ">
              Popular
            </p>
          </div>
          <div className=" mt-5 flex items-center gap-3">
            <p className="text-3xl text-white font-bold">$80</p>
            <span className="mt-4 text-gray-300">/monthly</span>
          </div>

          <p className=" mt-5 text-xl font-semibold text-white ">
            Whats included
          </p>

          <div className={`  mt-5 flex flex-col gap-2`}>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={` text-2xl text-white `} />
              </span>
              <span className={` text-[18px] text-white `}>
                Profile Creation
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={`text-2xl text-white `} />
              </span>
              <span className={` text-[18px] text-white `}>
                Appointment Bookin
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={` text-2xl text-white `} />
              </span>
              <span className={` text-[18px] text-white `}>
                Notification Aletts
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={`text-2xl text-white `} />
              </span>
              <span className={`text-[18px] text-white `}>
                Limited Telemedicine Access
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={` text-2xl text-white `} />
              </span>
              <span className={`text-[18px] text-white `}>
                Exclusive Discounts
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={`text-2xl text-white `} />
              </span>
              <span className={` text-[18px] text-white `}>
                Exclusive Discounts
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={`text-2xl text-white `} />
              </span>
              <span className={` text-[18px] text-white `}>
                Appointment History
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle className={` text-2xl text-white `} />
              </span>
              <span className={` text-[18px] text-white `}>
                Priority Customer
              </span>
            </p>
          </div>
          <button
            className={` bg-blue-400 transition-all duration-200 active:scale-95 active:bg-opacity-70 mt-5 px-4 py-3 rounded-md  text-xl font-semibold text-white w-full `}
          >
            Choose Plan
          </button>
        </motion.div>

        {/* basic plan */}
        <motion.div
          onMouseEnter={() => setIsEnterPriseHover(true)}
          onMouseLeave={() => setIsEnterPriseHover(false)}
          className={` ${
            isEnterPriseHover ? " bg-blue-500 text-white " : " bg-zinc-50 "
          } p-5 sm:w-[90%] h-[450px] mt-16 w-[95%] gap-5 mx-auto border border-gray-200 rounded-md `}
        >
          <div className="flex items-center gap-2">
            <motion.div className=" w-16 h-16 rounded-lg flex items-center justify-center bg-white ">
              <FaRegCalendarDays className="text-4xl text-blue-500" />
            </motion.div>
            <p className="text-xl font-semibold ">EnterPirse</p>
          </div>

          <div className=" mt-5 flex items-center gap-3">
            <p className="text-3xl font-bold">$280</p>
            <span className="mt-4 text-gray-300">/monthly</span>
          </div>

          <p className=" mt-5 text-xl font-semibold ">Whats included</p>

          <div className={`  mt-5 flex flex-col gap-2`}>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isEnterPriseHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isEnterPriseHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                All Basic Plan Features
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isEnterPriseHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isEnterPriseHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                All Premium Plan Features
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isEnterPriseHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isEnterPriseHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                Personalized Health Insights
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <FaCheckCircle
                  className={`${
                    isEnterPriseHover ? " text-white " : ""
                  } text-2xl text-blue-500 `}
                />
              </span>
              <span
                className={`${
                  isEnterPriseHover ? " text-white " : ""
                } text-[18px] text-gray-600 `}
              >
                Family Account Management
              </span>
            </p>
          </div>
          <button
            className={` ${
              isEnterPriseHover ? " bg-blue-400 " : "bg-blue-500"
            } mt-5 px-4 py-3 rounded-md transition-all duration-200 active:scale-95 active:bg-opacity-70  text-xl font-semibold text-white w-full `}
          >
            Choose Plan
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
