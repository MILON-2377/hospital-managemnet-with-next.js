"use client";

import { useState } from "react";
import { FaFileArchive } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";

export default function Education() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className=" w-full mt-5 rounded-lg border p-5">
      <p className=" text-xl font-bold">Education</p>

      {/* divider */}
      <div className=" mt-5 mb-5 border-t "></div>

      {/* profile image */}
      <div className=" flex sm:flex-row flex-col sm:items-center gap-5 ">
        <div className=" flex items-center justify-center w-20 h-20 rounded-md border border-dashed ">
          <FaFileArchive className=" text-2xl  " />
        </div>

        <div className=" flex flex-col gap-2 ">
          <p className=" text-[16px] font-[600]  ">Logo</p>
          <p className=" flex items-center gap-5 ">
            <span className=" text-[16px] text-blue-500 font-[500] ">
              Upload new
            </span>
            <span className=" text-[16px] font-[500] text-red-500 ">
              Remove
            </span>
          </p>
          <p className=" text-[15px] text-gray-500  ">
            Your Image should Below 4 MB, Accepted format jpg,png,svg
          </p>
        </div>
      </div>

      {/* info */}
      <div className=" mt-5 ">
        <div className=" flex sm:flex-row flex-col items-center justify-between gap-5 ">
          <label className="flex w-full flex-col gap-2">
            <span className=" text-[16px] font-[500] text-black ">
              Name of the institution
            </span>
            <input
              type="text"
              placeholder="name of institution"
              className=" w-full focus:outline-none border px-4 py-2 rounded-md "
            />
          </label>
          <label className="flex w-full flex-col gap-2">
            <span className=" text-[16px] font-[500] text-black ">Course</span>
            <input
              type="text"
              placeholder="course"
              className=" w-full focus:outline-none border px-4 py-2 rounded-md "
            />
          </label>
        </div>

        <div className=" mt-5 flex sm:flex-row flex-col items-center justify-between gap-5 ">
          <label className="flex w-full flex-col gap-2 mt-5 ">
            <span className=" text-[16px] font-[500] text-black ">
              Start date
            </span>

            <div className=" flex items-center justify-between  border px-4 py-2 rounded-md ">
              <DatePicker
                value={startDate}
                onChange={(date) =>
                  setStartDate(new Date(date).toLocaleDateString())
                }
                placeholderText="choose start date"
                className=" w-full focus:outline-none focus:border-none "
              />
              <FaCalendarDays className="text-xl text-gray-400" />
            </div>
          </label>
          <label className="flex w-full flex-col gap-2 mt-5 ">
            <span className=" text-[16px] font-[500] text-black ">
              Start date
            </span>

            <div className=" flex items-center justify-between  border px-4 py-2 rounded-md ">
              <DatePicker
                value={endDate}
                onChange={(date) =>
                  setEndDate(new Date(date).toLocaleDateString())
                }
                placeholderText="choose end date"
                className=" w-full focus:outline-none focus:border-none"
              />
              <FaCalendarDays className="text-xl text-gray-400" />
            </div>
          </label>

          <label className="flex w-full flex-col gap-2 mt-5">
            <span className=" text-[16px] font-[500] text-black ">
              No of Years
            </span>
            <input
              type="text"
              className=" w-full focus:outline-none border px-4 py-2 rounded-md "
            />
          </label>
        </div>

        <label className="flex w-full flex-col gap-2 mt-5 ">
          <span className=" text-[16px] font-[500] text-black ">
            Job description
          </span>

          <textarea
            className=" w-full focus:outline-none border px-4 py-2 rounded-md "
            placeholder="job description"
          ></textarea>
        </label>

        {/* divider */}
        <div className=" mt-5 mb-5 border-t "></div>

        <div className=" w-full flex items-center justify-end gap-5 mt-8 mb-5 ">
          <button className=" btn ">Cancel</button>
          <button className=" btn btn-accent text-white ">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
