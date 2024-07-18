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
          color: "white",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6"
      >
        <div className="float-left px-4">
          <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
            Welcome to our CareLife
          </h1>
        </div>
        <div className=" bg-center w-full bg-no-repeat 
        bg-[url('https://media.istockphoto.com/id/1095568822/photo/doctor-and-patient-talking-and-discussing-health-treatment-while-sitting-at-the-desk.jpg?s=2048x2048&w=is&k=20&c=OZ2bXu50vtdturTZKwVsbxutVnx8LbJVa5llts-JLmg=')]
         h-[300px] flex items-center gap-5 justify-center px-10 py-8 font-sans md:text-xl ">
          <Section className="font-sans text-xl text-white ">
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
