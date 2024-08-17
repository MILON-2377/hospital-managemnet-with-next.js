"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { patientSaysData } from "@/componentsData/patientSaysData";
import { AnimatePresence, wrap, motion } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: "0%",
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 100, duration: 2 },
      opacity: { duration: 0.5 }, // Controls fade-in speed
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 100, duration:2 },
      opacity: { duration: 0.5 }, // Controls fade-out speed
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function WhatOurPatientSays() {
  const [[page, direction], setPage] = useState([0, 0]);

  const commentsIndex = wrap(0, patientSaysData.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className=" bg-gray-50 mt-16 w-full p-5 lg:p-10 h-[520px] lg:h-[450px] ">
      <div className="relative w-full ">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className=" w-full absolute lg:top-8 lg:left-10 flex flex-col lg:flex-row lg:p-10 gap-6"
          >
            <div className=" mx-auto w-[100px] h-[100px] sm:w-[220px]  sm:h-[220px] rounded-full">
              <img
                src={patientSaysData[commentsIndex].img}
                alt={patientSaysData[commentsIndex].name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className=" ml-10 ">
              <p className=" text-[18px]  lg:block lg:-mt-8 mb-5 text-blue-500 ">Testimonials</p>
              <h1 className=" text-2xl lg:text-3xl font-bold">What our client says</h1>
              <p className="w-[90%] mt-5 lg:mt-10 text-[16px] lg:text-[18px] font-[450] text-gray-600">
                {patientSaysData[commentsIndex].comments}
              </p>
              <p className="mt-5  lg:block  card-title">
                {patientSaysData[commentsIndex].name}
              </p>
              <p className=" lg:block  ">{patientSaysData[commentsIndex].location}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(1)}
          className="absolute top-32 lg:top-40 right-0 z-50 lg:right-4 w-12 h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border border-gray-200 hover:bg-teal-500"
        >
          <IoIosArrowForward className="text-5xl hover:text-white text-sky-500" />
        </button>
        <button
          onClick={() => paginate(-1)}
          className="w-12 z-50 h-12 top-32 left-0 lg:top-40 absolute lg:left-4 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border border-gray-200 hover:bg-teal-500"
        >
          <IoIosArrowBack className="text-5xl hover:text-white text-sky-500" />
        </button>
      </div>
    </div>
  );
}
