"use client";

import { useState } from "react";
import { FaCalendarPlus, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

export default function BookAppointmentView() {
  const [dateChoose, setDateChoose] = useState(new Date().toLocaleString());
  const [timeChoose, setTimeChoose] = useState("");

  console.log(timeChoose.id);
  return (
    <div className=" p-5 mt-5 ">
      {/* header */}
      <div className=" border rounded-md p-5 bg-gray-50 flex items-center gap-5">
        <div className=" w-24 h-24 rounded-md bg-blue-100 "></div>
        <div className="flex flex-col gap-2">
          <p className=" text-[18px] font-[600] ">name</p>
          <div className=" text-[16px] font-[500] flex items-center gap-2 ">
            <div className=" flex items-center gap-1 ">
              <FaStar className=" text-[16px] text-yellow-500 " />
              <FaStar className=" text-[16px] text-yellow-500 " />
              <FaStar className=" text-[16px] text-yellow-500 " />
              <FaStar className=" text-[16px] text-yellow-500 " />
            </div>
            <span>Rating</span>
          </div>
          <p className=" flex items-center -ml-1 gap-1 ">
            <MdLocationOn className=" text-xl text-gray-500 " />
            <span className=" text-[16px] ">location</span>
          </p>
        </div>
      </div>

      <div className=" mt-8 flex sm:flex-row flex-col sm:items-center gap-5 sm:gap-0 justify-between">
        <div>
          <p className=" text-[16px] font-[600] ">22 December 2024</p>
          <p className=" text-[16px] text-gray-500 font-[500] ">Monday</p>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" w-full px-4 py-2 flex items-center gap-4 rounded-md border sm:w-[320px] "
          >
            <FaCalendarPlus className=" text-xl text-gray-500 " />
            <input
              type="text"
              value={dateChoose}
              className=" w-full sm:w-auto focus:outline-none focus:border-none bg-transparent "
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
          >
            <li
              onClick={() => {
                const today = new Date();
                setDateChoose(today.toLocaleString());
              }}
            >
              <a>Today</a>
            </li>
            <li
              onClick={() => {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                setDateChoose(yesterday.toLocaleString());
              }}
            >
              <a>Yesterday</a>
            </li>
            <li
              onClick={() => {
                const last7Days = new Date();
                last7Days.setDate(last7Days.getDate() - 7);
                setDateChoose(last7Days.toLocaleString());
              }}
            >
              <a>Last 7 Days</a>
            </li>
            <li
              onClick={() => {
                const last30Days = new Date();
                last30Days.setDate(last30Days.getDate() - 30);
                setDateChoose(last30Days.toLocaleString());
              }}
            >
              <a>Last 30 Days</a>
            </li>
            <li
              onClick={() => {
                const thisMonth = new Date();
                thisMonth.setDate(1); // Set to the first day of the current month
                setDateChoose(thisMonth.toLocaleString());
              }}
            >
              <a>This Month</a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" border  rounded-md p-5 mt-10 ">
        <div className=" w-full lg:relative">
          <div className=" w-full mb-5 lg:hidden flex items-center justify-between ">
            <button className=" p-1 rounded-full hover:border ">
              <IoIosArrowBack className=" text-2xl " />
            </button>
            <button className=" p-1 rounded-full hover:border ">
              <IoIosArrowForward className=" text-2xl " />
            </button>
          </div>

          <div className=" lg:flex items-center justify-evenly grid sm:grid-cols-4 px-2 lg:px-0 grid-cols-2 gap-3 ">
            <div>
              <p className=" text-xl font-semibold ">MON</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
            <div>
              <p className=" text-xl font-semibold ">TUE</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
            <div>
              <p className=" text-xl font-semibold ">WED</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
            <div>
              <p className=" text-xl font-semibold ">THU</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
            <div>
              <p className=" text-xl font-semibold ">FRI</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
            <div>
              <p className=" text-xl font-semibold ">SAT</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
            <div>
              <p className=" text-xl font-semibold ">SUN</p>
              <p className=" text-[16px] text-gray-500 ">20 Aug 2024</p>
            </div>
          </div>

          
          <button className=" lg:block  p-1 rounded-full hover:border hidden lg:absolute top-5 -left-3 ">
            <IoIosArrowBack className=" text-2xl " />
          </button>
          <button className=" lg:block p-1 rounded-full hover:border hidden lg:absolute top-5  -right-3 ">
            <IoIosArrowForward className=" text-2xl " />
          </button>
        </div>

        <div className=" mt-5 mb-5 border-t "></div>

        <div className=" grid sm:grid-cols-4 grid-cols-2 lg:grid-cols-8 gap-5 ">
          {[...times].map((item, idx) => (
            <button
              key={idx + 1}
              onClick={() => setTimeChoose(item)}
              className={` px-4 py-3 ${
                item.id === timeChoose.id
                  ? "bg-blue-500 text-white "
                  : "bg-gray-100"
              } transition-all duration-200 hover:bg-white hover:text-black rounded-md border  text-black font-[600] text-[16px] `}
            >
              {item.time}
            </button>
          ))}
        </div>
      </div>

      <div className=" w-full flex justify-end mt-8 ">
        <button className=" w-full sm:w-[300px] btn text-[16px] btn-accent text-white ">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

// times data
const times = [
  { id: 1, time: "9:00 AM" },
  { id: 2, time: "9:30 AM" },
  { id: 3, time: "10:00 AM" },
  { id: 4, time: "10:30 AM" },
  { id: 5, time: "11:00 AM" },
  { id: 6, time: "11:30 AM" },
  { id: 7, time: "12:00 PM" },
  { id: 8, time: "12:30 PM" },
  { id: 9, time: "1:00 PM" },
  { id: 10, time: "1:30 PM" },
  { id: 11, time: "2:00 PM" },
  { id: 12, time: "2:30 PM" },
  { id: 13, time: "3:00 PM" },
  { id: 14, time: "3:30 PM" },
  { id: 15, time: "4:00 PM" },
  { id: 16, time: "4:30 PM" },
  { id: 17, time: "5:00 PM" },
  { id: 18, time: "5:30 PM" },
  { id: 19, time: "6:00 PM" },
  { id: 20, time: "6:30 PM" },
];
