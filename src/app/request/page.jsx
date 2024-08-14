"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useEffect, useState } from "react";
import {
  FaBeer,
  FaCalendarAlt,
  FaCheckCircle,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useAppointmentsDataLoading from "@/DataFetch/useAppointmentsDataLoading";
import axiosSecure from "@/Hooks/userAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdCancel } from "react-icons/md";

export default function Requests() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [approvedAppointments, setApprovedAppointments] = useState(0);
  const [cancelAppointments, setCancelAppointments] = useState(0);
  const [id, setId] = useState("");
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

  // handle pagination
  useEffect(() => {
    refetch();
  }, [currentPage]);

  // handle appointment schedule
  const { register, control, handleSubmit, reset } = useForm();
  const [selectDate, setSelectDate] = useState(null);
  const onSubmit = async(data) => {
    const appointment_date = selectDate.toLocaleDateString();
    try {
        const res = await axiosSecure.put(`/appointment/${id}`, {appointment_date, ...data, approved:true});
        if(res.data){
            refetch();
            document.getElementById('my_modal_3').close()
        }
    } catch (error) {
        console.log(error.message);
    }
  };

  //   handle appointment reject procceessing
  const [rejectedId, setRejectedId] = useState("");
  const [rejectReson, setRejectReason] = useState("");
  const rejectHandle = async(e) => {
    e.preventDefault();
    if (rejectReson.length === 0) return;

    try {
        const res = await axiosSecure.put(`/appointment/${rejectedId}`, {rejectReson, rejected:true});
        if(res.data){
            e.target.reset();
            refetch();
            document.getElementById('my_modal_1').close();
        }
    } catch (error) {
        console.log(error.message);
    }
  };

  return (
    <div className="w-full flex flex-col relative ">
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
              <p className="mt-5 ">Total number of requests appointments</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-5">
                <span>
                  <FaBeer className="text-gray-300 text-4xl " />
                </span>
                <h2 className="text-amber-500 text-4xl font-bold ">
                  5
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
        <div className="overflow-x-auto mt-20">
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
                      <div className="rounded-full h-12 w-12">
                        <img
                          className="w-full h-full object-cover rounded-full "
                          src={item.doctor.image}
                          alt={item.doctor.name}
                        />
                      </div>
                      <div>
                        <div className="font-bold">{item?.doctor?.name}</div>
                      </div>
                    </div>
                  </th>
                  <th className=" flex items-center gap-2 ">
                    <button
                      onClick={() => {
                        setId(item._id);
                        document.getElementById("my_modal_3").showModal();
                      }}
                      className=" duration-200 transition-all   flex items-center gap-2 p-3 rounded-md hover:bg-gray-100 text-[18px] text-green-500 "
                    >
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Accept</span>
                    </button>
                    <span>||</span>
                    <button
                      onClick={() => {
                        setRejectedId(item._id);
                        document.getElementById("my_modal_1").showModal();
                      }}
                      className=" duration-200 transition-all  p-3 rounded-md hover:bg-gray-100 flex items-center gap-2 text-[18px]  text-red-500 "
                    >
                      <span>
                        <MdCancel />
                      </span>
                      <span>Reject</span>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination section */}
      <div className=" w-[1114px] fixed bottom-0 right-0 px-16 py-5 flex items-center justify-between bg-gray-50  ">
        <button
          onClick={previousPage}
          className=" px-4 py-3 transition-all duration-200 hover:bg-green-100 active:bg-green-200 active:scale-95 rounded-md bg-gray-100 "
        >
          <FaLongArrowAltLeft className="text-3xl text-green-500 " />
        </button>
        <button
          onClick={handleNextPage}
          className=" px-4 py-3 felx transition-all duration-200 hover:bg-green-100 active:bg-green-200 active:scale-95 rounded-md bg-gray-100 "
        >
          <FaLongArrowAltRight className="text-3xl text-green-500 " />
        </button>
      </div>

      {/* accept appointment modal */}
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn text-xl text-red-500 btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl">Schedule Appointment</h3>
            <p className="py-2 text-xl">
              Please fill in the following details to schedule
            </p>

            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 mt-10"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xl text-gray-500 ">
                    Appointment Date
                  </span>
                  <label className="px-4 py-3 flex gap-3 items-center w-full rounded-md border">
                    <span>
                      <FaRegCalendarAlt className="text-xl" />
                    </span>
                    <DatePicker
                      toggleCalendarOnIconClick
                      selected={selectDate}
                      onChange={(date) => setSelectDate(date)}
                      className=" w-full rounded-md border-none focus:border-none focus:outline-none  "
                      placeholderText="Select the expected date"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xl text-gray-500 ">Comments/Note</span>
                  <textarea
                    className="textarea border border-gray-200 focus:outline-none placeholder:text-xl text-xl "
                    placeholder="ex: comments"
                    {...register("doctorComments", { required: true })}
                  ></textarea>
                </label>

                <button className="btn btn-accent text-xl w-full mt-5 text-white ">
                  Approved
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* appointment reject */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn text-xl text-red-500 btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex flex-col gap-1 items-center justify-center ">
              <p className=" text-[50px] text-yellow-400 ">
                <IoIosWarning />
              </p>
              <p className=" text-xl ">Are you sure</p>
              <p className="text-xl">Do you want to rejcet appointment</p>
            </div>
            <form onSubmit={rejectHandle} className=" mt-5 ">
              <label>
                <p>
                  <span className=" text-[18px] text-gray-600 ">
                    Reject reason
                  </span>
                  <span className=" text-red-500 -mt-1 ml-1 ">*</span>
                </p>
              </label>
              <textarea
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Reject reason"
                className={` ${rejectReson.length === 0 ? "border-gray-200" : "focus:border-cyan-500"} mt-2 border px-4 py-3 focus:outline-none  w-full rounded-md h-[100px] `}
              />
              <button className=" active:bg-opacity-80 transition-all duration-200 scale-95 texl-[18px] px-4 py-3 rounded-md bg-accent text-white -ml-1 mt-5  ">
                Reject procceessing
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
