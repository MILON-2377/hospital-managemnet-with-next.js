"use client";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";

import {
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col gap-6 h-auto p-10 mt-16 bg-accent ">
      <div className=" w-full flex justify-between ">
        <div className=" w-full ">
          <h1 className=" text-5xl font-bold ">CareLife</h1>
          <p className="text-[16px] w-full mt-8 font-[500] text-white ">
            CareLife connects patients with top local doctors, offering easy
            registration, appointment booking, and management through a
            user-friendly platform.
          </p>
          <div className=" flex items-center mt-5 gap-3 ">
            <FaFacebook className=" text-3xl text-white " />
            <FaSquareWhatsapp className=" text-3xl text-white " />
            <FaTwitterSquare className=" text-3xl text-white " />
            <FaLinkedin className=" text-3xl text-white " />
          </div>
        </div>

        <div className=" mt-5 w-full ">
          <p className=" text-2xl font-[500] text-white ">For Patients</p>
          <p className=" mt-4 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Search for doctors
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              LogIn
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Register
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Booking
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Patient dashboard
            </motion.span>
          </p>
        </div>

        <div className=" mt-5 w-full">
          <p className=" text-2xl font-[500] text-white ">For Doctors</p>
          <p className=" mt-4 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Appointments
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Chat
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              LogIn
            </motion.span>
          </p>
          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Register
            </motion.span>
          </p>

          <p className=" mt-2 text-[18px] flex items-center gap-2 text-white font-[500] ">
            <FaArrowRight />
            <motion.span
              whileHover={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" hover:cursor-pointer "
            >
              Doctor dashboard
            </motion.span>
          </p>
        </div>

        <div className=" mt-5 w-full">
          <p className=" text-2xl font-[500] text-white ">Contact Us</p>

          <p className=" mt-5 flex items-center gap-2">
            <MdLocationOn className=" text-3xl text-gray-100 " />
            <span className="text-[16px] font-[500] text-white ">
              Nanchong, Sichuan, China
            </span>
          </p>
          <p className=" mt-3 flex items-center gap-2">
            <BsFillTelephoneFill className=" text-2xl text-gray-100 " />
            <span className="text-[16px] font-[500] text-white ">
              +86 13185084-667
            </span>
          </p>
          <p className=" mt-3 flex items-center gap-2">
            <MdEmail className=" text-3xl text-gray-100 " />
            <span className="text-[16px] font-[500] text-white ">
              milon.miah@qq.com
            </span>
          </p>
        </div>
      </div>
      <div className=" border-t flex items-center justify-between py-5 mt-5 ">
        <p className=" text-[16px] font-semibold text-white ">
            2024 CareLife, All rights reserved.
        </p>
        <p className=" text-[16px] flex items-center gap-5 font-semibold text-white ">
            <span className=" hover:text-blue-500 hover:scale-90 transition-all duration-200 hover:cursor-pointer ">
                Terms and Conditions
            </span>
            <span>|</span>
            <span>Policy</span>
        </p>
      </div>
    </div>
  );
}
