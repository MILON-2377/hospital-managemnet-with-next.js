"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { FaClock } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function AvailableTimings() {
  const [availability, setAvailability] = useState(1);
  const [timeInterVals, setTimeInterVals] = useState("10 Minutes");
  const [duration, setDuration] = useState("30 Minutes");
  const [isInterValsClick, setIsInterValsClick] = useState(false);
  const [isDurationClick, setIsDurationClick] = useState(false);
  const { control, handleSubmit } = useForm();

  // appointment intervals handle
  useEffect(() => {
    setIsInterValsClick(false);
  }, [timeInterVals]);

  useEffect(() => {
    setIsDurationClick(false);
  }, [duration]);

  const onSubmit = (data) => {};

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
          <div className=" mt-5 grid grid-cols-2 sm:grid-cols-5 lg:flex lg:items-center gap-5 ">
            {weeks?.map((item) => (
              <button
                key={item.id}
                className={` ${
                  item.day === "Monday"
                    ? "bg-blue-500 text-white "
                    : "bg-gray-200"
                } px-4 py-2 rounded-md  transition-all duration-200 hover:bg-blue-500 hover:text-white font-semibold active:bg-opacity-70 active:scale-95  `}
              >
                {item.day}
              </button>
            ))}
          </div>
        </div>

        {/* add available time slots */}
        <div className=" p-5 border mt-5 border-gray-200 rounded-md ">
          <div className=" flex items-center justify-between ">
            <p className=" text-[18px] font-bold ">Monday</p>
            <div className="flex items-center gap-5">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="text-blue-500 font-[500] hover:cursor-pointer text-[16px] "
              >
                Add Slots
              </button>
              <button className="text-red-500 hover:cursor-pointer font-[500] text-[16px] ">
                Delete All
              </button>
            </div>
          </div>

          {/* divider */}
          <div className=" mt-5 mb-5 border-t "></div>

          {/* availabe time displaying */}
          <div className=" grid grid-cols-2 sm:flex sm:items-center gap-5 ">
            <button className=" flex items-center gap-2 px-4 transition-all duration-200 hover:bg-slate-800 hover:text-white py-3 rounded-md bg-gray-100 ">
              <FaClock className="text-xl text-gray-500" />
              <span className="text-[18px] font-bold ">9:45 AM</span>
            </button>
            <button className=" flex items-center gap-2 px-4 transition-all duration-200 hover:bg-slate-800 hover:text-white py-3 rounded-md bg-gray-100 ">
              <FaClock className="text-xl text-gray-500" />
              <span className="text-[18px] font-bold ">10:00 AM</span>
            </button>
            <button className=" flex items-center gap-2 px-4 transition-all duration-200 hover:bg-slate-800 hover:text-white py-3 rounded-md bg-gray-100 ">
              <FaClock className="text-xl text-gray-500" />
              <span className="text-[18px] font-bold ">11 AM</span>
            </button>
            <button className=" flex items-center gap-2 px-4 transition-all duration-200 hover:bg-slate-800 hover:text-white py-3 rounded-md bg-gray-100 ">
              <FaClock className="text-xl text-gray-500" />
              <span className="text-[18px] font-bold ">2 PM</span>
            </button>
          </div>
        </div>

        {/* appointment fees */}
        <div className="mt-5 ">
          <p className="text-[18px] font-[500] ">Appointment Fees($)</p>
          <input
            type="text"
            defaultValue="$250"
            className=" mt-2 px-4 py-3 focus:outline-none border-gray-200 rounded-md border w-full"
          />
        </div>

        {/* save and cancel btn */}
        <div className=" flex items-center gap-5 justify-end ">
          <button
            onClick={() => document.getElementById("my_modal_3").close()}
            className="mt-4 px-4 py-2 transition-all duration-200 active:scale-95 active:bg-gray-200 hover:bg-gray-300 bg-gray-100 text-black rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-4 px-4 py-2 transition-all duration-200 active:bg-opacity-70 active:scale-95 hover:bg-opacity-80 bg-blue-500 text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* add slots modal */}
      <div>
        <dialog id="my_modal_3" className="modal overflow-y-hidden h-auto ">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Add New Slot</h3>

            {/* divider */}
            <div className=" mt-5 mb-5 border-t "></div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" w-full h-full flex flex-col gap-5  "
            >
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-[500] text-gray-600">
                    Start Time
                  </span>
                  <Controller
                    control={control}
                    name="startTime"
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="px-4 w-full py-3 focus:outline-none rounded-md border border-gray-200"
                        placeholderText="Select your start time"
                      />
                    )}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-[500] text-gray-600">
                    End Time
                  </span>
                  <Controller
                    control={control}
                    name="endTime"
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="px-4 w-full py-3 focus:outline-none rounded-md border border-gray-200"
                        placeholderText="Select your end time"
                      />
                    )}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-[500] text-gray-600">
                    Appointment Intervals
                  </span>
                  <Controller
                    control={control}
                    name="timeIntervals"
                    render={({ field }) => (
                      <div className="dropdown relative">
                        <input
                          tabIndex={0}
                          role="button"
                          onClick={() => setIsInterValsClick(!isInterValsClick)}
                          value={field.value}
                          onChange={field.onChange}
                          className={`${
                            isInterValsClick
                              ? "rounded-md rounded-b-none"
                              : "rounded-md"
                          } px-4 w-full py-3 focus:outline-none border border-gray-200`}
                          readOnly
                        />
                        <span className="absolute right-3 top-3">
                          {isInterValsClick ? (
                            <MdOutlineKeyboardArrowUp className="text-2xl" />
                          ) : (
                            <MdOutlineKeyboardArrowDown className="text-2xl" />
                          )}
                        </span>
                        <ul
                          tabIndex={0}
                          className={`${
                            !isInterValsClick && "hidden"
                          } dropdown-content rounded-t-none border-t-0 menu bg-base-100 rounded-box z-[1] w-full p-2 shadow`}
                        >
                          <li onClick={() => field.onChange("10 Minutes")}>
                            <a>10 Minutes</a>
                          </li>
                          <li onClick={() => field.onChange("20 Minutes")}>
                            <a>20 Minutes</a>
                          </li>
                          <li onClick={() => field.onChange("30 Minutes")}>
                            <a>30 Minutes</a>
                          </li>
                          <li onClick={() => field.onChange("40 Minutes")}>
                            <a>40 Minutes</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[16px] font-[500] text-gray-600">
                    Appointment Durations
                  </span>
                  <Controller
                    control={control}
                    name="duration"
                    render={({ field }) => (
                      <div className="dropdown relative">
                        <input
                          tabIndex={0}
                          role="button"
                          onClick={() => setIsDurationClick(!isDurationClick)}
                          value={field.value}
                          onChange={field.onChange}
                          className={`${
                            isDurationClick
                              ? "rounded-md rounded-b-none"
                              : "rounded-md"
                          } px-4 w-full py-3 focus:outline-none border border-gray-200`}
                          readOnly
                        />
                        <span className="absolute right-3 top-3">
                          {isDurationClick ? (
                            <MdOutlineKeyboardArrowUp className="text-2xl" />
                          ) : (
                            <MdOutlineKeyboardArrowDown className="text-2xl" />
                          )}
                        </span>
                        <ul
                          tabIndex={0}
                          className={`${
                            !isDurationClick && "hidden"
                          } dropdown-content rounded-t-none border-t-0 menu bg-base-100 rounded-box z-[1] w-full p-2 shadow`}
                        >
                          <li onClick={() => field.onChange("30 Minutes")}>
                            <a>30 Minutes</a>
                          </li>
                          <li onClick={() => field.onChange("1 Hour")}>
                            <a>1 Hour</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  />
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[16px] font-[500] text-gray-600">
                  Assign Appointment Spaces
                </span>
                <Controller
                  control={control}
                  name="appointmentSpace"
                  defaultValue="space 1"
                  render={({ field }) => (
                    <div className=" grid grid-cols-2 sm:flex sm:items-center gap-5">
                      <label className="flex items-center gap-2">
                        <input
                          {...field}
                          type="radio"
                          className="mt-[3px]"
                          value="space 1"
                          defaultChecked={field.value === "space 1"}
                        />
                        <span className="text-[16px] font-[500] text-gray-600">
                          Space 1
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          {...field}
                          type="radio"
                          className="mt-[3px]"
                          value="space 2"
                        />
                        <span className="text-[16px] font-[500] text-gray-600">
                          Space 2
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          {...field}
                          type="radio"
                          className="mt-[3px]"
                          value="space 3"
                        />
                        <span className="text-[16px] font-[500] text-gray-600">
                          Space 3
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          {...field}
                          type="radio"
                          className="mt-[3px]"
                          value="space 4"
                        />
                        <span className="text-[16px] font-[500] text-gray-600">
                          Space 4
                        </span>
                      </label>
                    </div>
                  )}
                />
              </div>

              <div className="border-t "></div>

              <div className="flex items-center justify-between">
                <div className=" flex-1 "></div>
                <div className=" w-full sm:w-[45%] -mr-2 flex items-center gap-5 ">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                    className="mt-4 px-4 py-2 transition-all duration-200 active:scale-95 active:bg-gray-200 hover:bg-gray-300 bg-gray-100 text-black rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 transition-all duration-200 active:bg-opacity-70 active:scale-95 hover:bg-opacity-80 bg-blue-500 text-white rounded-md"
                  >
                    Add Slot
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
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
