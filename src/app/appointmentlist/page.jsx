"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Swal from "sweetalert2";

export default function AppointmentList() {
  const [search, setSearch] = useState("");
  const [selectSearch, setSelectSearch] = useState("");
  const [appointEmail, setAppoitmentEmail] = useState();

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

    // console.log(selectSearch);
  };

  // action handle
  const handleActionButton = (e, id) => {
    // console.log(e.target.value);
    const actionValue = e.target.value;
    setAppoitmentEmail(id);
    if (actionValue === "Accept") {
      document.getElementById("my_modal_1").showModal();
    }

    if(actionValue === "Reject"){
      handleRejectAppointment(id);
    }
  };

  // modal approved handle
  const approvedHandle = async (e) => {
    e.preventDefault();
    const newDate = e.target.appointdate.value;

    try {
      const res = await axios.put("/api/patients", {
        appointmentDate: newDate,
        id: appointEmail,
      });
      if (res) {
        document.getElementById("my_modal_1").close();
        refetch();
        Swal.fire({
          title: "Appointment Approved!",
          text: `You approved the appointment on ${newDate} .`,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(appointDate);
  };
 

  // handle reject appointment
  const handleRejectAppointment = async(id) => {
    // console.log(id);

    try {
      const res = await axios.delete(`/api/patients?id=${id}`);
      if(res){
        refetch();
        Swal.fire({
          title: "Appointment Rejected!",
          text: `Appointment rejected successfully.`,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="">
      {/* patient information section */}
      <div className=" fixed z-50 border-b border-t  border-gray-200  w-full flex items-center justify-between bg-gray-50  p-5  ">
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

        {/* pagination section */}
        <div className="h-full flex items-center gap-5 ">
          <button className="btn">Previous</button>

          <div></div>

          <button className="btn">Next</button>
        </div>
      </div>

      {/* table  */}
      <div className="overflow-x-auto relative top-24 p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Email</th>
              <th>Reason</th>
              <th>Review</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patientsD?.map((item, index) => (
              <tr key={index}>
                
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
                <td>{item.reason}</td>
                <td>View</td>
                <td>{item.approved ? "Prescribed" : "Not prescribe"}</td>
                <th>
                  {item.approved ? (
                    "Approved"
                  ) : (
                    <select
                      defaultValue=""
                      onChange={(e) => handleActionButton(e, item._id)}
                      className="focus:outline-none focus:border-none "
                    >
                      <option value="" disabled className="">
                        Choose the action
                      </option>
                      <option className="">Accept</option>
                      <option>Reject</option>
                    </select>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal section */}
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button> */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={approvedHandle}>
              <label className="flex flex-col gap-1">
                <span className="font-sans font-semibold ">
                  Appointment Date
                </span>
                <input
                  className="px-4 py-2 border border-gray-200 rounded-md "
                  type="date"
                  name="appointdate"
                />
              </label>
              <button className="px-4 py-2 rounded-md w-full bg-gray-200 font-bold hover:text-white transition-all duration-300 hover:bg-slate-800   mt-5">
                Submit
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
