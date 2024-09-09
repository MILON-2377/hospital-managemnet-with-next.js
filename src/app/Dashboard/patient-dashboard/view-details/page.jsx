"use client";

import { BiSolidInjection } from "react-icons/bi";
import {
  FaCalendarCheck,
  FaHeart,
  FaLink,
  FaTemperatureHigh,
  FaUserEdit,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineAddCard,
  MdOutlineEditCalendar,
} from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function ViewDetails() {
  const [selectDate, setSelectedDate] = useState(null);

  // handle add medical details
  const handleAddMedicalDetails = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_3").close();
  };
  return (
    <ProtectedRoute>
      (
      <div className=" mt-5 p-4 w-full ">
        <p className=" text-xl lg:text-2xl font-bold ">Medical Details</p>

        <div className=" mt-5 mb-5 border-t "></div>

        <div className=" p-5 rounded-md bg-white shadow border ">
          <div className=" flex sm:flex-row flex-col sm:items-center gap-5 sm:gap-0 justify-between">
            <p className=" text-[16px] font-[600] ">
              Latest updated medical details
            </p>
            <p className=" flex items-center gap-2 ">
              <FaCalendarCheck className=" text-[18px] text-gray-500 " />
              <span className=" text-[16px] text-gray-500 ">
                Last update on :{" "}
              </span>
              <span className=" text-[16px] text-gray-500 ">14 Aug 2024</span>
            </p>
          </div>

          <div className=" mt-5 mb-3 border-t "></div>

          <div className=" flex sm:flex-row flex-col gap-5 sm:gap-0 sm:items-center justify-between ">
            <div>
              <p className=" flex items-center gap-1 ">
                <BiSolidInjection className="text-[14px] text-red-500 " />
                <span className="lg:text-[16px] text-[14px] ">
                  Blood pressure
                </span>
              </p>
              <p className=" text-[18px] lg:text-xl font-bold ">100 mg/dl</p>
            </div>
            <div>
              <p className=" flex items-center gap-1 ">
                <FaHeart className="text-[14px] text-red-500 " />
                <span className="lg:text-[16px] text-[14px] ">Heart rate</span>
              </p>
              <p className=" text-[18px] lg:text-xl font-bold ">140 Mpm</p>
            </div>
            <div>
              <p className=" flex items-center gap-1 ">
                <MdOutlineAddCard className="text-[14px] text-blue-500 " />
                <span className=" lg:text-[16px] text-[14px] ">
                  Glucose Level
                </span>
              </p>
              <p className=" text-[18px] lg:text-xl font-bold ">70 - 90</p>
            </div>
            <div>
              <p className=" flex items-center gap-1 ">
                <FaTemperatureHigh className="text-[14px] text-yellow-500 " />
                <span className="lg:text-[16px] text-[14px] ">
                  Body Temperature
                </span>
              </p>
              <p className=" text-xl font-bold ">37.5 C</p>
            </div>
            <div>
              <p className=" flex items-center gap-1 ">
                <FaUserEdit className="text-[14px] text-pink-500 " />
                <span className="lg:text-[16px] text-[14px] ">BMI</span>
              </p>
              <p className="text-[18px] lg:text-xl font-bold ">21 kg/m2</p>
            </div>
            <div>
              <p className=" flex items-center gap-1 ">
                <MdModeEdit className="text-[14px] text-green-500 " />
                <span className="lg:text-[16px] text-[14px] ">SPo2</span>
              </p>
              <p className=" text-xl font-bold ">96%</p>
            </div>
          </div>
        </div>

        <div className=" flex sm:flex-row flex-col items-center gap-5 sm:gap-0 sm:justify-between mt-5 ">
          <label className=" relative w-full sm:w-auto ">
            <input
              type="text"
              placeholder="Search"
              className=" px-4 py-2 w-full sm:w-auto rounded-md border bg-transparent focus:outline-none "
            />
            <IoSearchOutline className=" text-xl text-gray-500 absolute right-3 top-3 " />
          </label>

          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className=" btn w-full sm:w-auto btn-accent text-white "
          >
            Add Medical Details
          </button>
        </div>

        <div className=" w-full mt-5 border rounded-md  ">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className=" bg-gray-200 p-5 ">
                <tr>
                  <th className=" text-[16px] font-bold ">ID</th>
                  <th className=" text-[16px] font-bold ">Patient Name</th>
                  <th className=" text-[16px] font-bold ">BMI</th>
                  <th className=" text-[16px] font-bold ">Heart Rate</th>
                  <th className=" text-[16px] font-bold ">FBC Status</th>
                  <th className=" text-[16px] font-bold ">Weight</th>
                  <th className=" text-[16px] font-bold ">Added on</th>
                  <th className=" text-[16px] font-bold ">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className=" text-blue-500">#D0214</th>
                  <td className=" flex items-center gap-2 ">
                    <div className="w-10 h-10 rounded-md bg-blue-100"></div>
                    <span className=" text-sm card-title ">Mion Miah</span>
                  </td>
                  <td>23.5</td>
                  <td>89</td>
                  <td>140</td>
                  <td>74kg</td>
                  <td>14 Aug 2024</td>
                  <td className=" flex items-center gap-3 ">
                    <button className=" p-2 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white border bg-gray-50 ">
                      <FaLink className=" text-xl " />
                    </button>
                    <button className=" p-2 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white border bg-gray-50 ">
                      <MdOutlineEditCalendar className=" text-xl " />
                    </button>
                    <button className=" p-2 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white border bg-gray-50 ">
                      <MdDelete className=" text-xl " />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* modal for add medical details */}
        <div>
          <dialog id="my_modal_3" className=" rounded-md ">
            <div className="  bg-white shadow-md p-5 ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-xl">Add Medical Details</h3>
              <div className=" mt-5 mb-5 border-t "></div>

              <form onSubmit={handleAddMedicalDetails} className=" ">
                <div>
                  <div className=" flex sm:flex-row flex-col items-center justify-between w-full gap-5 ">
                    <label className="flex flex-col gap-2">
                      <span className=" text-[16px] font-[500] text-gray-500 ">
                        BMI
                      </span>
                      <input
                        type="text"
                        placeholder="BMI"
                        className=" px-4 py-3 rounded-md placeholder:text-[14px] border focus:outline-none bg-transparent "
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className=" text-[16px] font-[500] text-gray-500 ">
                        Heart Rate
                      </span>
                      <input
                        type="text"
                        placeholder="Heart rate"
                        className=" px-4 py-3 rounded-md placeholder:text-[14px] border focus:outline-none bg-transparent "
                      />
                    </label>
                  </div>
                  <div className=" mt-5 flex sm:flex-row flex-col items-center justify-between w-full gap-5 ">
                    <label className="flex flex-col gap-2">
                      <span className=" text-[16px] font-[500] text-gray-500 ">
                        Weight
                      </span>
                      <input
                        type="text"
                        placeholder="Weight"
                        className=" px-4 py-3 rounded-md placeholder:text-[14px] border focus:outline-none bg-transparent "
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className=" text-[16px] font-[500] text-gray-500 ">
                        FBC
                      </span>
                      <input
                        type="text"
                        placeholder="FBC"
                        className=" px-4 py-3 rounded-md placeholder:text-[14px] border focus:outline-none bg-transparent "
                      />
                    </label>
                  </div>

                  <label className=" mt-5 flex flex-col gap-2">
                    <span className=" text-[16px] font-[500] text-gray-500 ">
                      End Date
                    </span>
                    <DatePicker
                      value={selectDate}
                      onChange={(newDate) => {
                        setSelectedDate(newDate.toLocaleString());
                      }}
                      placeholderText="Select expectd schedule date"
                      className="focus:outline-none text-[16px] border rounded-md px-4 py-3 w-full "
                    />
                  </label>
                </div>

                <div className=" mt-8 mb-3 border-t "></div>

                <div className=" mt-8 flex items-center justify-end gap-5 ">
                  <button className="btn">Cancel</button>
                  <button className=" btn btn-accent text-white ">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      )
    </ProtectedRoute>
  );
}
