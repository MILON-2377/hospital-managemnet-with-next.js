"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import MedicalInfo from "@/components/patientInfoForm/MedicalInfo";
import PersonalInfo from "@/components/patientInfoForm/PersonalInfo";
import { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useSelector } from "react-redux";

export default function PatientForm() {
  const { user } = useAuth();
  const [isChecked, setIsChecked] = useState(1);
  const patientInfo = useSelector(
    (state) => state.patientInfoReducer.patientIfo
  );

  useEffect(() => {
    const personalInfoKeys = Object.keys(patientInfo.personalInfo);
    const medicalInfoKeys = Object.keys(patientInfo.medicalInfo);
    const identificationInfoKeys = Object.keys(patientInfo.identificationInfo);

    if (personalInfoKeys.length === 0) setIsChecked(1);
    if (medicalInfoKeys.length === 0 && personalInfoKeys.length > 0)
      setIsChecked(2);
    if (identificationInfoKeys.length === 0 && medicalInfoKeys.length > 0)
      setIsChecked(3);
    if (
      identificationInfoKeys.length > 0 &&
      medicalInfoKeys.length > 0 &&
      personalInfoKeys.length > 0
    )
      setIsChecked(4);
  }, [patientInfo]);

  return (
    <div className=" w-full bg-white flex gap-5 lg:flex-row flex-col lg:gap-10 ">
      {/* image section */}
      <div className=" p-10 flex flex-col gap-3 ">
        <label className="flex items-center gap-2 ">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border border-cyan-400 `}
          >
            <div
              className={` w-3 h-3 rounded-full ${
                isChecked === 1 ? " bg-blue-500 " : " "
              } `}
            ></div>
          </div>
          <span className=" text-[18px] font-bold ">Personal Information</span>
        </label>
        <p>
          <IoIosArrowRoundDown className=" text-2xl " />
        </p>
        <label className="flex items-center gap-2 ">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border border-cyan-400 `}
          >
            <div
              className={` w-3 h-3 rounded-full ${
                isChecked === 2 ? " bg-blue-500 " : " "
              } `}
            ></div>
          </div>
          <span className=" text-[18px] font-bold ">Medical Information</span>
        </label>
        <p>
          <IoIosArrowRoundDown className=" text-2xl " />
        </p>
        <label className="flex items-center gap-2 ">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border border-cyan-400 `}
          >
            <div
              className={` w-3 h-3 rounded-full ${
                isChecked === 3 ? " bg-blue-500 " : " "
              } `}
            ></div>
          </div>
          <span className=" text-[18px] font-bold ">
            Identification Information
          </span>
        </label>
        <p>
          <IoIosArrowRoundDown className=" text-2xl " />
        </p>
        <label className="flex items-center gap-2 ">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border border-cyan-400 `}
          >
            <div
              className={` w-3 h-3 rounded-full ${
                isChecked === 4 ? " bg-blue-500 " : " "
              } `}
            ></div>
          </div>
          <span className=" text-[18px] font-bold ">Review Information</span>
        </label>
      </div>
      <div className=" lg:w-[50%] mx-auto ">
        {isChecked === 1 && <PersonalInfo />}
        {isChecked === 2 && <MedicalInfo />  }
      </div>
    </div>
  );
}
