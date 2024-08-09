"use client";

import { FaCalendarAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function AppointmentSuccess() {
  return (
    <div className=" w-full py-32 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <IoMdCheckmarkCircleOutline className="text-8xl text-green-500 " />
        <p className=" flex items-center font-semibold justify-center  ">
          <span className="text-xl text-black ">Your</span>
          <span className="text-xl ml-2 text-green-500">
            appointment request{" "}
            <span className="text-xl text-black ml-1 ">has</span>{" "}
          </span>
        </p>
        <p className="text-xl font-semibold -mt-2 text-center text-black">
          been successfully submitted!
        </p>
        <p className="text-sm text-black -mt-2 ">
          We'll be in touch shortly to confirm.
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-4 border border-gray-200  border-r-0 border-l-0">
        <p className="text-xl text-black ">Requested appointment details:</p>
        <div className=" w-[200px] flex items-center gap-3 px-3 py-2 border border-gray-200 bg-base-200  rounded-md">
          <div className="w-8 h-8 flex items-center justify-center rounded-full">
            {/* <img
              className="w-full h-full rounded-full object-conver "
              src={image}
              alt="physician name"
            /> */}
          </div>
          <p className="text-xl text-gray-700">name</p>
        </div>
        <p className="ml-5 flex items-center gap-2 ">
          <FaCalendarAlt className="text-xl text-gray-400" />
          <span>25 jun 2024-5.00pm</span>
        </p>
      </div>
    </div>
  );
}
