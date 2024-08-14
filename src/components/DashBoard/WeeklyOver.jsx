"use client";

import { useState } from "react";

export default function WeeklyOver() {
  const [chart, setChart] = useState(1);
  return (
    <div className="w-full border border-gray-200 rounded-md p-5 ">
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-bold ">Weekly OverView</p>
        <p className="text-[18px] ">March 10 to March 20</p>
      </div>

      <div className=" w-full flex items-center">
        <div className=" flex items-center mt-5 ">
          <button
            onClick={() => setChart(1)}
            className={` ${
              chart === 1
                ? "text-blue-500 rounded-md rounded-b-none border border-b-0  "
                : " border-b "
            } px-3 py-1 text-[18px] font-[450] `}
          >
            Revenue
          </button>
          <button
            onClick={() => setChart(2)}
            className={` ${
              chart === 2
                ? "text-blue-500  border border-b-0 rounded-md rounded-b-none "
                : " border-b "
            } text-[18px] px-3 py-1 font-[450] `}
          >
            Appointments
          </button>
        </div>
        <div className=" w-full border border-t-0  mt-[55px] "></div>
      </div>
    </div>
  );
}
