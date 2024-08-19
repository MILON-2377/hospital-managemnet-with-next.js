"use client";
import React from "react";
import { FaCalendarPlus } from "react-icons/fa";

export default function FavouritesDoctors() {
  return (
    <div className=" flex flex-col gap-3 ">
      {[...doctors].map((item, idx) => (
        <div
          key={idx + item.img}
          className=" flex items-center justify-between "
        >
          <div className=" flex items-center gap-2 ">
            <div className=" w-12 h-12 bg-center rounded-full">
                <img src={item.img} alt={item.img} 
                className=" w-full h-full rounded-full object-cover "
                />
            </div>
            <p className=" flex flex-col gap-1 ">
              <span className=" text-sm font-semibold ">{item.doctorName}</span>
              <span className=" text-[14px] text-gray-500 font-[500] ">
               {item.specialty}
              </span>
            </p>
          </div>

          <div className="p-2 hover:bg-blue-500 hover:cursor-pointer hover:text-white transition-all duration-200 flex items-center justify-center rounded-full bg-gray-100 ">
            <FaCalendarPlus className=" hover:text-white text-gray-500 " />
          </div>
        </div>
      ))}
    </div>
  );
}

const doctors = [
  {
    doctorName: "Dr. Emily Johnson",
    specialty: "Cardiologist",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    doctorName: "Dr. Michael Thompson",
    specialty: "Dermatologist",
    img: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    doctorName: "Dr. Sophia Martinez",
    specialty: "Neurologist",
    img: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    doctorName: "Dr. James Anderson",
    specialty: "Orthopedic Surgeon",
    img: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=1060&t=st=1723925503~exp=1723926103~hmac=b32a47931615848e383838a13b899b6ebd726f9bcc41a170115c0d555458e6d2",
  },
  {
    doctorName: "Dr. Olivia Brown",
    specialty: "Pediatrician",
    img: "https://img.freepik.com/free-photo/family-doctor-doctor-s-office_23-2148168504.jpg?w=360&t=st=1723925521~exp=1723926121~hmac=29064a6d7fac840969debe235c8aec0efc337088efe7fc1fbc1a39f89779b027",
  },
];
