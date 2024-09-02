"use client";
import { motion } from "framer-motion";
import img from "../../../public/assets/indicate.jpg";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { GrSchedules } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";

export default function FourSteps() {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className=" flex justify-between  mt-16 "
    >
      {/* details section */}
      <div className=" w-[95%] lg:p-10 mx-auto lg:w-[60%] sm:w-[90%] h-full ">
        <div className="">
          <p className=" text-xl text-blue-400 ">How it,s work</p>
          <p className=" text-3xl sm:text-4xl mt-2 font-bold ">
            4 easy steps to get your solution
          </p>
        </div>

        <div className=" grid grid-cols-1 mt-10 lg:grid-cols-2 gap-10 ">
          {fourSteps.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5"
            >
              <div className=" w-20 h-20 p-2 rounded-md flex items-center justify-center bg-sky-100 ">
                {item.icon}
              </div>
              <div className=" flex flex-col gap-2 ">
                <p className=" text-xl font-semibold ">{item.title}</p>
                <p className=" text-[18px] text-gray-500 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* image section */}
      <div className=" ml-5 hidden lg:block w-[720px] h-[500px] relative ">
        <Image
          className=" w-full h-full object-cover absolute right-16 "
          src={img}
          alt="4 steps indicate image"
        />
      </div>
    </motion.div>
  );
}

// details data
const fourSteps = [
  {
    title: "Search Doctor",
    description:
      "Search for a doctor based on specialization, location, or availability.",
    icon: <FaUserDoctor className="text-5xl text-green-500" />,
  },
  {
    title: "Check Doctor Profile",
    description:
      "Explore detailed doctor profiles on our platform to make informed healthcare decisions.",
    icon: <ImProfile className="text-5xl text-lime-500" />,
  },
  {
    title: "Schedule Appointment",
    description:
      "After choosing your preferred doctor, select a convenient time slot, & confirm your appointment.",
    icon: <GrSchedules className="text-5xl text-emerald-500" />,
  },
  {
    title: "Get Your Solution",
    description:
      "Discuss your health concerns with the doctor and receive personalized advice & solution.",
    icon: <AiOutlineSolution className="text-5xl text-teal-500 " />,
  },
];
