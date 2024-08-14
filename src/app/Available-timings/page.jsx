"use client";

import { useState } from "react";

export default function AvailableTimings() {
  const [availability, setAvailability] = useState(1);
  return (
    <div className="mt-5 p-5 ">
      {/* title */}
      <div>
        <p className="text-2xl font-bold ">Available Timings</p>
      </div>

      <div className=" mt-5 mb-5 border-t "></div>

      <div className=" flex items-center gap-3 ">
        <button
          onClick={() => setAvailability(1)}
          className={`${
            availability === 1
              ? "bg-blue-500 font-semibold text-white "
              : "bg-gray-100 hover:bg-blue-500 transition-all duration-200 hover:text-white text-black font-[450] "
          } px-4 py-2 rounded-md   `}
        >
          General Availability
        </button>
        <button
          onClick={() => setAvailability(2)}
          className={`${
            availability === 2
              ? "bg-blue-500 font-semibold text-white "
              : "bg-gray-100 hover:bg-blue-500 transition-all duration-200 hover:text-white font-[450] text-black "
          } px-4 py-2 rounded-md   `}
        >
          General Availability
        </button>
      </div>

      {/* select available slots */}
      <div className=" rounded-md border border-gray-200 mt-5 p-5 ">
        <p className="text-[18px] font-bold ">Select Available Slots</p>

        {/* divider */}
        <div className=" mt-5 mb-5 border-t "></div>

        <div>
          <p className=" text-[18px] text-gray-500 font-[450] ">
            Select Available Days
          </p>
          <div className=" mt-5 flex items-center gap-5 ">
            {weeks?.map((item) => (
              <button
                key={item.id}
                className=" px-4 py-2 rounded-md bg-gray-200 transition-all duration-200 hover:bg-blue-500 hover:text-white font-semibold active:bg-opacity-70 active:scale-95  "
              >
                {item.day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// week days data
const weeks = [
  {
    id: 1,
    day: "Sunday",
  },
  {
    id: 2,
    day: "Monday",
  },
  {
    id: 3,
    day: "Tuesday",
  },
  {
    id: 4,
    day: "Wednesday",
  },
  {
    id: 5,
    day: "Thursday",
  },
  {
    id: 6,
    day: "Friday",
  },
  {
    id: 7,
    day: "Saturday",
  },
];
