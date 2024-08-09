"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useEffect, useState } from "react";
import { FaBeer, FaCalendarAlt } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useAppointmentsDataLoading from "@/DataFetch/useAppointmentsDataLoading";

export default function AdminPanel() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [approvedAppointments, setApprovedAppointments] = useState(0);
  const [cancelAppointments, setCancelAppointments] = useState(0);
  const router = useRouter();

  // data loading handle
  const { data = [], refetch } = useAppointmentsDataLoading(currentPage);

  useEffect(() => {
    setAppointments(data?.appointments);
    const page = data.total ? Math.ceil(data.total / 10) : 1;
    setTotalPage(page);
    setPendingAppointments(data?.approvedAppointment);
    setApprovedAppointments(data?.totalPendingAppointments);
  }, [data]);

  // pagination current page handle
  const handleNextPage = () => {
    if (currentPage === totalPage) return;

    const newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  // handle Previous page
  const previousPage = () => {
    if (currentPage === 1) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    refetch();
  }, [currentPage]);

  return (
    <div className="w-full">
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
                <h2 className="text-green-500 text-4xl font-bold ">
                  {approvedAppointments}
                </h2>
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
                <h2 className="text-amber-500 text-4xl font-bold ">
                  {pendingAppointments}
                </h2>
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
                <h2 className="text-red-500 text-4xl font-bold ">
                  {cancelAppointments}
                </h2>
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
                <th className="text-xl font-semibold text-blue-500">Patient</th>
                <th className="text-xl font-semibold text-blue-500">Date</th>
                <th className="text-xl font-semibold text-blue-500">Status</th>
                <th className="text-xl font-semibold text-blue-500">Doctor</th>
                <th className="text-xl font-semibold text-blue-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((item) => (
                <tr key={item._id}>
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
                        <div className="font-bold">{item?.patientId}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.expected_date}</td>
                  <td>{item.approved ? "Approved" : "Pending"}</td>
                  <th>
                    <div className="flex items-center gap-3">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.doctor.image} alt={item.doctor.name} />
                      </div>
                      <div>
                        <div className="font-bold">{item?.doctor?.name}</div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs text-green-500 ">
                      Schedule
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs text-red-500 ">
                      Cancel
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination section */}
      <div className=" px-16 py-5 flex items-center justify-between bg-gray-50 w-full ">
        <button
          onClick={previousPage}
          className=" px-4 py-3 transition-all duration-200 hover:bg-green-100 active:bg-green-200 active:scale-95 rounded-md bg-gray-100 "
        >
          <FaLongArrowAltLeft className="text-3xl text-green-500 " />
        </button>
        <button
          onClick={handleNextPage}
          className=" px-4 py-3 transition-all duration-200 hover:bg-green-100 active:bg-green-200 active:scale-95 rounded-md bg-gray-100 "
        >
          <FaLongArrowAltRight className="text-3xl text-green-500 " />
        </button>
      </div>
    </div>
  );
}
