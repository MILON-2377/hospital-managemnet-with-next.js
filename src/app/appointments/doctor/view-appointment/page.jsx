"use client";

import { MdEmail } from "react-icons/md";
import { SiAnytype } from "react-icons/si";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export default function ViewAppointment() {
  return (
    <div className=" w-full p-5 ">
      {/* header title */}
      <p className=" text-2xl font-bold ">Appointment Details</p>
      <div className=" border border-t-0 mt-5 "></div>

      {/* appointment details displaying */}
      <div className=" p-5 border border-gray-200 rounded-md mt-5 ">
        <div className="flex justify-between items-center">
          {/* image name */}
          <div className=" flex items-center gap-3">
            <div className="w-28 h-28 rounded-md bg-blue-200"></div>
            <div className="flex flex-col -mt-3">
              <p className="text-[18px] font-[550] text-cyan-500 ">Id</p>
              <p className="text-[18px] font-[550] card-title  ">name</p>
              <p className="text-[18px] font-[550] flex items-center gap-1  ">
                <span>
                  <MdEmail className="text-xl text-gray-500" />
                </span>
                <span>email</span>
              </p>
              <p className="text-[18px] font-[550]  ">phone number</p>
            </div>
          </div>

          {/* type of appointment */}
          <div>
            <p className="text-xl font-semibold ">Type of Appointment</p>
            <p className="flex items-center gap-2">
              <span>
                <SiAnytype className="text-3xl text-cyan-500 " />
              </span>
              <span className="text-[18px] font-[550] ">Direct visit</span>
            </p>
          </div>

          {/* new patient or upcoming */}
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-3">
              <p className=" text-[18] py-2 px-3 rounded-3xl bg-gray-500 text-white  ">
                New Patient
              </p>
              <p className=" text-[18] py-2 px-3 rounded-3xl bg-blue-500 text-white  ">
                New Patient
              </p>
            </div>
            <p>
              <span className="text-[18px] font-[550] ">
                Consultation Fees :{" "}
              </span>
              <span className="text-[18px] font-[550] ">$200</span>
            </p>

            <div className="flex items-center gap-4 ml-36 ">
              <p
                className="w-10 h-10 hover:cursor-pointer transition-all duration-200  hover:text-white
               hover:bg-blue-500 rounded-full bg-gray-100 flex items-center justify-center "
              >
                <BiSolidMessageRounded className="text-xl  " />
              </p>
              <p className="w-10 h-10 hover:cursor-pointer transition-all duration-200  hover:bg-blue-500 hover:text-white rounded-full text-xl bg-gray-100 flex items-center justify-center ">
                x
              </p>
            </div>
          </div>
        </div>

        <div className="border border-t-0 mt-5"></div>

        <div className="flex justify-between mt-5 ">
          <div>
            <p className="text-[18px] font-semibold ">
              Appointment Date And Time
            </p>
            <p className=" text-gray-500 text-[18px] font-[550] ">
              date and time
            </p>
          </div>

          <div>
            <p className="text-[18px] font-semibold ">Clinic Location</p>
            <p className=" text-gray-500 text-[18px] font-[550] ">location</p>
          </div>

          <div>
            <p className="text-[18px] font-semibold ">Location</p>
            <p className=" text-gray-500 text-[18px] font-[550] ">
              actual location
            </p>
          </div>

          <div>
            <p className="text-[18px] font-semibold ">Visit Type</p>
            <p className=" text-gray-500 text-[18px] font-[550] ">eneral</p>
          </div>
          <button className=" px-4 py-2 rounded-md bg-accent transition-all duration-200 hover:bg-opacity-80 active:scale-95 text-white text-[18px] font-semibold ">
            Start Session
          </button>
        </div>
      </div>

      {/* recent appointments section */}
      <div className="mt-5">
        <p className="text-2xl font-bold   ">Recent Appointments</p>
        <div className="flex flex-col gap-5">
          <div
            className={
              " flex items-center mt-5 justify-between  p-5 rounded-md bg-white shadow-md "
            }
          >
            {/* name and image */}
            <div className="flex items-center gap-2 ">
              <div className=" w-14 h-14 rounded-xl bg-blue-200 "></div>
              <div className="flex flex-col gap-1">
                <p className="text[18px] text-sky-500 font-[550] ">#d001</p>
                <p className="card-title">Milon Miah</p>
              </div>
            </div>

            {/* date and time and visit type */}
            <div className=" flex flex-col gap-1">
              <p className="text[18px] font-normal ">
                {new Date().toLocaleString()}
              </p>
              <p className=" flex items-center gap-1 ">
                <span className="text[18px] font-normal ">General visit</span>
                <span className="text[18px] font-normal ">|</span>
                <span className="text[18px] font-normal ">Video Call</span>
              </p>
            </div>

            {/* email and phone number */}
            <div className=" flex flex-col gap-1">
              <p className=" text-[18px] flex items-center gap-1 font-normal text-slate-800  ">
                <span>
                  <MdEmail className="text-xl text-gray-500 " />
                </span>
                <span className="text-black  ">milon.miah@qq.com</span>
              </p>
              <p className=" text-[18px] font-normal text-slate-800 ">
                {"+86 132458-4524"}
              </p>
            </div>

            {/* action btns section */}
            <div className=" flex items-center gap-2 ">
              <p
              
                className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white "
              >
                <FaEye className="text-xl" />
              </p>
            </div>
          </div>
          <div
            className={
              " flex items-center mt-5 justify-between  p-5 rounded-md bg-white shadow-md "
            }
          >
            {/* name and image */}
            <div className="flex items-center gap-2 ">
              <div className=" w-14 h-14 rounded-xl bg-blue-200 "></div>
              <div className="flex flex-col gap-1">
                <p className="text[18px] text-sky-500 font-[550] ">#d002</p>
                <p className="card-title">Sakil Sheikh</p>
              </div>
            </div>

            {/* date and time and visit type */}
            <div className=" flex flex-col gap-1">
              <p className="text[18px] font-normal ">
                {new Date().toLocaleString()}
              </p>
              <p className=" flex items-center gap-1 ">
                <span className="text[18px] font-normal ">General visit</span>
                <span className="text[18px] font-normal ">|</span>
                <span className="text[18px] font-normal ">Video Call</span>
              </p>
            </div>

            {/* email and phone number */}
            <div className=" flex flex-col gap-1">
              <p className=" text-[18px] flex items-center gap-1 font-normal text-slate-800  ">
                <span>
                  <MdEmail className="text-xl text-gray-500 " />
                </span>
                <span className="text-black  ">sakil@qq.com</span>
              </p>
              <p className=" text-[18px] font-normal text-slate-800 ">
                {"+86 132458-4524"}
              </p>
            </div>

            {/* action btns section */}
            <div className=" flex items-center gap-2 ">
              <p
               
                className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white "
              >
                <FaEye className="text-xl" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
