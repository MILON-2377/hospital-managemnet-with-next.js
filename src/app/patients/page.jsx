"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Patients() {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectSearch, setSelectSearch] = useState("");

  const fetchPatientData = async () => {
    const res = await axios.get(
      `/api/patients?search=${search}&searchBy=${selectSearch}`
    );
    
    return res.data.patientsData;
  };

  const { data: patientsD = [], refetch } = useQuery({
    queryKey: ["patientsD"],
    queryFn: () => fetchPatientData(),
  });


  const onSubmit = (e) => {
    e.preventDefault();
    refetch();
    
    console.log(selectSearch);
  };


  return (
    <div>
      <div
        className="divider -mt-1
      "
      ></div>
      {/* patient information section */}
      <div className=" -mt-6 w-full flex items-center justify-center bg-gray-50  p-5  ">
        <form onSubmit={onSubmit} className="flex items-start gap-4">
          <label className="">
            <select
              defaultValue=""
              onChange={(e) => setSelectSearch(e.target.value)}
              className=" px-4 py-3 rounded-md border focus:outline-none border-gray-200 w-full max-w-xs"
            >
              <option disabled value="">
                Search by patients
              </option>
              <option>Prescribed</option>
              <option>Not prescribed</option>
            </select>
          </label>
          <label className="relative">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 bg-base-100 border  border-gray-200 focus:outline-none rounded-full "
              type="search"
            />
            <span
              className={
                search.length > 0 ? "hidden" : "absolute right-4 top-4 "
              }
            >
              <IoSearch className="text-2xl text-gray-400 " />
            </span>
          </label>
          <button className="btn">Search</button>
        </form>
      </div>

      <div className="overflow-x-auto mt-5 p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patientsD?.map((item, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.fullName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.email}
                  <br />
                </td>
                <td>{item.approved ? "Prescribed" : "Not prescribe"}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {item.approved ? "PDF" : "Cancle"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
