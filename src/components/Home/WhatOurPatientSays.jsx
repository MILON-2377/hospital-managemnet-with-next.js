"use client";
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function WhatOurPatientSays() {
  const [current, setCurrent] = useState(0);

  const onPrevHandle = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextHandle = () => {
    if (data.length - 1 > current) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="mt-16 relative flex flex-col items-center ">
        <div className=" absolute left-3 right-3 flex z-20 mx-auto w-[95%] sm:w-[90%] items-center justify-between ">
          <button
            onClick={onPrevHandle}
            className="w-12 h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border border-gray-200 hover:bg-teal-500"
          >
            <IoIosArrowBack className="text-5xl hover:text-white text-sky-500" />
          </button>
          <button
            onClick={onNextHandle}
            className="w-12 h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border border-gray-200 hover:bg-teal-500"
          >
            <IoIosArrowForward className="text-5xl hover:text-white text-sky-500" />
          </button>
        </div>

        <motion.div className="flex flex-nowrap gap-5 ">
          {[...data].map((item, idx) => (
            <motion.div
              key={idx}
              className="w-[700px] flex items-center gap-10 "
            >
              <div className=" w-40 h-40 rounded-full bg-green-200 "></div>
              <div className=" flex flex-col gap-2 ">
                <div>
                  <p className=" text-4xl font-bold ">What our patients says</p>
                  <p className=" text-[18px] text-gray-500 ">{item.comments}</p>
                </div>

                <div>
                  <p className="card-title">{item.name}</p>
                  <p className=" text-[18px] text-gray-500 ">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// comments
const data = [
  {
    name: "John Doe",
    img: "john-doe.jpg",
    location: "New York, NY",
    comments:
      "The service was excellent! The doctor was very attentive and provided a great solution to my health issue. Highly recommend!",
  },
  {
    name: "Jane Smith",
    img: "jane-smith.jpg",
    location: "Los Angeles, CA",
    comments:
      "Booking an appointment was so easy, and the doctor was amazing. I felt really cared for and would definitely use this service again.",
  },
  {
    name: "Michael Johnson",
    img: "michael-johnson.jpg",
    location: "Chicago, IL",
    comments:
      "I appreciated the detailed profiles of the doctors which helped me choose the right one. The consultation was thorough and informative.",
  },
  {
    name: "Emily Davis",
    img: "emily-davis.jpg",
    location: "Houston, TX",
    comments:
      "Great experience overall! The platform is user-friendly, and the doctor I saw was very professional and compassionate.",
  },
];
