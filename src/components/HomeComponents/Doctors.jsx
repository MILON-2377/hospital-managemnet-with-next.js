"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample data for doctors
const doctors = [
  {
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    imageUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvY3RvcnMlMjBwcm9maWxlfGVufDB8fDB8fHww",
    description: "Dr. John Doe is a highly experienced cardiologist...",
  },
  {
    name: "Dr. Jane Smith",
    specialization: "Neurologist",
    imageUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvY3RvcnMlMjBwcm9maWxlfGVufDB8fDB8fHww",
    description: "Dr. Jane Smith specializes in neurological disorders...",
  },
  {
    name: "Dr. Michael Brown",
    specialization: "Pediatrician",
    imageUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvY3RvcnMlMjBwcm9maWxlfGVufDB8fDB8fHww",
    description:
      "Dr. Michael Brown is a trusted pediatrician with over 20 years of experience...",
  },
  {
    name: "Dr. Emily Davis",
    specialization: "Orthopedic Surgeon",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673953510186-580f42dd1492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGRvY3RvcnMlMjBwcm9maWxlfGVufDB8fDB8fHww",
    description: "Dr. Emily Davis is an expert orthopedic surgeon...",
  },
];

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

function DoctorCard({ name, specialization, imageUrl, description }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className=" text-center h-[350px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="absolute inset-0 bg-gray-50 bg-opacity-90 flex cursor-pointer flex-col p-4  items-center justify-center "
        >
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-gray-600 text-sm ">{specialization}</p>
          <p className="text-gray-600 text-sm ">{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function DoctorsSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="mt-20 w-[95%] mx-auto">
      
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Doctors</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialization={doctor.specialization}
            imageUrl={doctor.imageUrl}
            description={doctor.description}
          />
        ))}
      </div>
    </section>
  );
}


