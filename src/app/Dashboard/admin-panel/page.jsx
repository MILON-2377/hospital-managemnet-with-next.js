"use client";

import { FaBeer, FaCalendarAlt, FaCalendarDay } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

export default function AdminPanel() {
  return (
    <div className="p-10 w-full">
      {/* admin panel header */}
      <div>
        <h1 className="text-gray-600i text-3xl font-bold">
          Welcome,
          <span className="ml-2">Admin name</span>
        </h1>
        <p className="text-xl mt-3 text-gray-500">
          Start day with managing new appointments
        </p>
      </div>

      {/* details titles section */}
      <div className=" mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 ">
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-5">
              <span>
                <FaCalendarAlt className="text-gray-300 text-4xl " />
              </span>
              <h2 className="text-gray-600 text-4xl font-bold ">Card title!</h2>
            </div>
            <p className="mt-5 ">Total number of scheduled appointments</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-5">
              <span>
                <FaBeer className="text-gray-300 text-4xl " />
              </span>
              <h2 className="text-gray-600 text-4xl font-bold ">Card title!</h2>
            </div>
            <p className="mt-5 ">Total number of pending appointments</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-5">
              <span>
                <IoIosWarning className="text-yellow-500 text-4xl " />
              </span>
              <h2 className="text-gray-600 text-4xl font-bold ">Card title!</h2>
            </div>
            <p className="mt-5 ">Total number of cancelled appointments</p>
          </div>
        </div>
      </div>

      {/* data displaying section */}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Status</th>
              <th>Doctor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost text-green-500 btn-xs">Schedule</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs text-red-500 ">Cancel</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      {/* pagination section */}
    </div>
  );
}
