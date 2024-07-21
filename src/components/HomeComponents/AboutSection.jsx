"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          color: "black",
          opacity: "0.8",
          fontSize: "20px"
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="mt-20 bg-[#704214] flex gap-1 py-10 bg-opacity-5 h-full w-full ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative flex lg:flex-row gap-5"
      >
        <div className=" w-[40%] px-8 ">
          <div className="lg:h-[400px] w-[350px] rounded-t-full ">
            <img
              className="w-full h-full object-cover object-center rounded-t-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fwA3sS9vXBUL_1m5cGj_q1RcKn8qoDsPDg&s"
            />
          </div>
          <div className=" absolute left-[15%] top-[40%] lg:w-[350px] lg:h-[50%] ">
            <img
              className="w-full h-full object-cover "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtj-pT5Om7M7n2e0rCLD1oGsPO0wYFAAtgg&s"
              alt=""
            />
          </div>
        </div>

        <div className="divider relative lg:divider-horizontal">OR</div>

        <div
          className=" flex-1  flex lg:flex-col justify-center px-5 items-center gap-5 font-sans "
        >
          <h1 className="text-6xl md:text-3xl font-bold ">
            Welcome to our CareLife
          </h1>
          <Section className="font-sans text-2xl text-gray-600 ">
            Welcome to CareLife, where compassionate care meets advanced medical
            excellence. Our dedicated team of healthcare professionals is
            committed to providing top-notch medical services and ensuring your
            well-being. At CareLife, we prioritize patient-centered care,
            focusing on your individual needs and offering a comprehensive range
            of medical treatments and services. We strive to create a healing
            environment where you feel comfortable and cared for. From our
            state-of-the-art facilities to our highly skilled physicians and
            support staff, every aspect of our hospital is designed to deliver
            the highest quality of care. Whether you are here for a routine
            check-up, specialized treatment, or emergency care, you can trust us
            to be by your side every step of the way.
          </Section>
          <div></div>
        </div>
      </motion.div>
    </div>
  );
}
