"use client";

import BasicInfo from "@/components/profileEdit/doctor/BasicInfo";
import Education from "@/components/profileEdit/doctor/Education";
import Expriences from "@/components/profileEdit/doctor/Expriences";
import { useState } from "react";

export default function DoctorProfileEdit() {
  const [showForm, setShowForm] = useState(1);

  return (
    <div className=" w-full p-5 mt-5 ">
      {/* titles */}
      <p className=" text-2xl font-bold ">Profile Settings</p>

      <div className=" mt-5 mb-5 border-t w-full "></div>

      {/*  selecting info */}
      <div className=" rounded-lg bg-white shadow-md p-5 mb-5 flex sm:flex-row flex-col sm:items-center gap-5 ">
        <button
          onClick={() => setShowForm(1)}
          className={` ${
            showForm === 1 && "bg-blue-500 text-white font-[600]"
          }  px-4 py-3 border sm:border-none rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white font-[500] active:scale-95 active:bg-opacity-80 `}
        >
          Basic Details
        </button>
        <button
          onClick={() => setShowForm(2)}
          className={` ${
            showForm === 2 && "bg-blue-500 text-white font-[600]"
          }  px-4 py-3 border sm:border-none rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white font-[500] active:scale-95 active:bg-opacity-80 `}
        >
          Exprience
        </button>
        <button
          onClick={() => setShowForm(3)}
          className={` ${
            showForm === 3 && "bg-blue-500 text-white font-[600]"
          }  px-4 py-3 border sm:border-none rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white font-[500] active:scale-95 active:bg-opacity-80 `}
        >
          Education
        </button>
      </div>

      {/* basic info */}
      {showForm === 1 && <BasicInfo />}

      {/* exprience */}
      {showForm === 2 && <Expriences />}

      {/* education */}
      {showForm === 3 && <Education />}
    </div>
  );
}
