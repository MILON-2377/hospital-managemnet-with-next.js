"use client";

import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import {
  FaFilter,
  FaListUl,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { FaEye } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import useAppointmentsData from "@/DataFetch/useAppointsData";
import { IoVideocam } from "react-icons/io5";
import useApprovedAppointments from "@/DataFetch/useApprovedAppointments";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Link from "next/link";
import { useDispatch } from "react-redux";
import img1 from "../../../../public/assets/doctor.jpg";
import { addDoctor } from "@/redux/reducers/AddDoctorSlice/addDoctorSlice";
import Image from "next/image";

export default function DoctorAppointments() {
  const [filterDate, setFilterDate] = useState(new Date().toLocaleDateString());
  const [appointFilter, setAppointmentFilter] = useState(false);
  const [visitType, setVisitType] = useState(false);
  const [viewBy, setViewBy] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [appointments, setAppointmnets] = useState([]);
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [pages, setPages] = useState([]);

  // handle data loading
  const {
    data = [],
    refetch,
    isLoading,
  } = useApprovedAppointments(currentPage, user?.email, search);

  useEffect(() => {
    const page = data?.total ? Math.ceil(data.total / 10) : 1;
    if (page !== totalPage) {
      setTotalPage(page);
    }
    const pagesArray = Array.from({ length: page }, (_, idx) => idx + 1);

    if (JSON.stringify(pagesArray) !== JSON.stringify(pages)) {
      setPages(pagesArray);
    }
    setAppointmnets(data?.appointments);
  }, [data, totalPage, pages]);

  // pagination handle
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
  }, [currentPage, refetch]);

  // search handle
  const onSearchClick = (e) => {
    e.preventDefault();
    refetch();
    e.target.reset();
  };

  return (
    <div className="w-[95%] mx-auto">
      {/* appointments header */}
      <div className="flex justify-between mt-10 items-center ">
        <p className="text-3xl font-bold">Appointments</p>

        {/* search */}
        <form onSubmit={onSearchClick} className="flex items-center gap-5">
          <label className=" border border-gray-200 rounded-md flex items-center justify-between ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className=" px-4 focus:outline-none focus:border-none "
              type="text"
              placeholder="Search"
            />
            <p className=" p-[15px] transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 ">
              <IoSearch className="text-xl text-gray-400 " />
            </p>
          </label>

          <div className="flex items-center gap-3 ">
            <p
              onClick={() => setViewBy(1)}
              className={` flex ${
                viewBy === 1 ? " bg-blue-500 text-white " : "hover:bg-gray-100"
              } items-center justify-center p-3 hover:cursor-pointer  border rounded-md text-center] border-gray-200 `}
            >
              <FaListUl
                className={`text-2xl ${
                  viewBy === 1 ? "text-white" : "text-gray-600"
                } `}
              />
            </p>
            <p
              onClick={() => setViewBy(2)}
              className={` flex ${
                viewBy === 2 ? " bg-blue-500 text-white " : "hover:bg-gray-100"
              } items-center justify-center p-3 hover:cursor-pointer  border rounded-md text-center] border-gray-200 `}
            >
              <CgMenuGridR
                className={`text-2xl ${
                  viewBy === 2 ? "text-white" : "text-gray-600"
                } `}
              />
            </p>
          </div>
        </form>
      </div>

      {/* divider */}
      <div className=" border border-t-0 mt-10 px-5"></div>

      {/* total details and filter section */}
      <div className=" flex items-center justify-between ">
        <div className="flex items-center mt-5 gap-5">
          <div className=" px-4 py-2 bg-gray-100 text-[18px] font-semibold hover:text-white rounded-md hover:bg-blue-500  flex items-center gap-2 text-gray-600 ">
            Upcoming{" "}
            <p className=" w-12 text-center h-7  rounded-3xl bg-white text-black">
              12
            </p>
          </div>
          <div className=" px-4 py-2 bg-gray-100 text-[18px] font-semibold hover:text-white rounded-md hover:bg-blue-500  flex items-center gap-2 text-gray-600 ">
            Cancelled{" "}
            <p className=" w-12 text-center h-7  rounded-3xl bg-white text-black">
              12
            </p>
          </div>
          <div className=" px-4 py-2 bg-gray-100 text-[18px] font-semibold hover:text-white rounded-md hover:bg-blue-500  flex items-center gap-2 text-gray-600 ">
            Completed{" "}
            <p className=" w-12 text-center h-7  rounded-3xl bg-white text-black">
              12
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-5 ">
          <div className=" border border-gray-200 p-2 rounded-md flex items-center gap-2 ">
            <span>
              <FaCalendarDays className="text-xl text-gray-500" />
            </span>

            <DatePicker
              value={filterDate}
              onChange={(date) =>
                setFilterDate(new Date(date).toLocaleDateString())
              }
              className=" focus:outline-none focus:border-none "
            />
          </div>

          {/* filter section */}
          <div className="dropdown relative ">
            <div
              tabIndex={0}
              role="button"
              className=" flex items-center gap-2 rounded-md p-2 border "
            >
              <span>
                <FaFilter className="text-xl text-gray-500 " />
              </span>
              <span className=" text-[18px] font-semibold ">Filter by</span>
              <span>
                <IoMdArrowDropdown className="text-2xl  " />
              </span>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content menu absolute right-0 bg-base-100  z-[1] w-[420px] p-5 shadow"
            >
              <div>
                <div>
                  <div
                    onClick={() => setAppointmentFilter(!appointFilter)}
                    className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                  >
                    <span className="text-[18px] font-semibold">
                      Appointment type
                    </span>
                    <motion.span
                      animate={appointFilter ? { rotate: -90 } : { rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoIosArrowForward className="text-2xl" />
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {appointFilter && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2 py-5 overflow-hidden"
                      >
                        {appointmentType.map((item, index) => (
                          <div key={index} className="form-control">
                            <label className="cursor-pointer flex items-center gap-2">
                              <input
                                type="checkbox"
                                defaultChecked={item.type === "All"}
                                className="checkbox checkbox-accent"
                              />
                              <span className="label-text">{item.type}</span>
                            </label>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* divider */}
                <div className="border border-t-0 mt-5 "></div>

                {/* visit type data */}
                <div className=" mt-5 ">
                  <div
                    onClick={() => setVisitType(!visitType)}
                    className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                  >
                    <span className="text-[18px] font-semibold">
                      Visit type
                    </span>
                    <motion.span
                      animate={visitType ? { rotate: -90 } : { rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoIosArrowForward className="text-2xl" />
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {visitType && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.1 }}
                        className="flex flex-col gap-2 py-5 overflow-hidden"
                      >
                        {visitTypeData.map((item, index) => (
                          <div key={index} className="form-control">
                            <label className="cursor-pointer flex items-center gap-2">
                              <input
                                type="checkbox"
                                defaultChecked={item === "All Visit"}
                                className="checkbox checkbox-accent"
                              />
                              <span className="label-text">{item}</span>
                            </label>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* btn section */}
                <div className=" mt-5 flex items-center justify-between gap-6 ">
                  <button className=" w-full px-4 py-3 rounded-md border border-gray-200 text-slate-700 transition-all duration-200 active:scale-95 hover:bg-opacity-80 font-semibold ">
                    Reset
                  </button>
                  <button className=" w-full px-4 py-3 rounded-md bg-accent text-slate-50 transition-all duration-200 active:scale-95 hover:bg-opacity-80 font-semibold ">
                    Filter Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* appointments data displaying */}
      <div className="mt-10">
        <div className={viewBy === 1 ? ` flex flex-col gap-4` : "hidden"}>
          {appointments?.map((item, idx) => (
            <div
              key={item._id}
              className={
                " flex items-center justify-between  p-5 rounded-md bg-white shadow-md "
              }
            >
              {/* name and image */}
              <div className="flex items-center gap-2 ">
                <div className=" w-14 h-14 rounded-xl">
                  <img
                    src={item.patient.img}
                    alt={item.patient.name}
                    className=" w-full h-full object-cover rounded-xl "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text[18px] text-sky-500 font-[550] ">
                    #d00{idx + 1}
                  </p>
                  <p className="card-title">{item.patient.name}</p>
                </div>
              </div>

              {/* date and time and visit type */}
              <div className=" flex flex-col gap-1">
                <p className="text[18px] font-normal ">
                  {new Date(item.appointment_date).toLocaleString()}
                </p>
                <p className=" flex items-center gap-1 ">
                  <span className="text[18px] font-normal ">General visit</span>
                  <span className="text[18px] font-normal ">|</span>
                  <span className="text[18px] font-normal ">Video Call</span>
                </p>
              </div>

              {/* email and phone number */}
              <div className=" flex flex-col gap-1">
                <p className=" text-[18px] font-normal text-slate-800  ">
                  {item.patientId}
                </p>
                <p className=" text-[18px] font-normal text-slate-800 ">
                  {item.phoneNumber ? item.phoneNumber : "+86 132458-4524"}
                </p>
              </div>

              {/* action btns section */}
              <div className=" flex items-center gap-2 ">
                <Link
                  onClick={() => dispatch(addDoctor(item))}
                  href="/appointments/doctor/view-appointment"
                  className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white "
                >
                  <FaEye className="text-xl" />
                </Link>
                <p className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white ">
                  <FaMessage className="text-xl" />
                </p>
                <p className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white ">
                  <MdDelete className="text-xl" />
                </p>
              </div>

              {/* start now btn */}
              <p className="text[18px] underline hover:cursor-pointer font-semibold ">
                Start Now
              </p>
            </div>
          ))}
        </div>

        {/* card viewing data */}
        <div
          className={viewBy === 2 ? " grid lg:grid-cols-3 gap-5 " : "hidden"}
        >
          {appointments?.map((item, idx) => (
            <div
              key={item._id}
              className=" w-full rounded-md bg-white shadow-lg p-5 flex flex-col gap-5 "
            >
              <div className="flex items-center gap-2 ">
                <div className=" w-14 h-14 rounded-xl bg-blue-200 "></div>
                <div className="flex flex-col gap-1">
                  <div className=" flex gap-10 justify-between">
                    <div className=" flex flex-col">
                      <p className="text[18px] font-[550] text-cyan-500 ">
                        #d00{idx + 1}
                      </p>
                      <div className=" flex items-center justify-between gap-1 ">
                        <p className="card-title">{item.doctor.name}</p>
                        <p className=" w-14 h-7 flex items-center justify-center rounded-xl bg-green-400 text-white ">
                          New
                        </p>
                      </div>
                    </div>
                    <p className=" w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ">
                      <IoVideocam className="text-xl text-blue-500" />
                    </p>
                  </div>
                </div>
              </div>

              {/* date and time */}
              <div className="p-4 rounded-md bg-gray-100">
                <p className="text-[18px] font-[550] ">
                  {item.appointment_date}
                </p>
                <p className="text-[18px] font-[550] ">General Visit</p>
              </div>

              {/* action btns */}
              <div className=" flex items-center justify-between gap-1 ">
                <div className=" flex items-center gap-2 ">
                  <a
                    href="/appointment/doctor/view-appointment"
                    className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white "
                  >
                    <FaEye className="text-xl" />
                  </a>
                  <p className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white ">
                    <FaMessage className="text-xl" />
                  </p>
                  <p className=" flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white ">
                    <MdDelete className="text-xl" />
                  </p>
                </div>
                <p className=" text-[18px] font-semibold underline ">
                  Start Now
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination section */}
      <div className=" w-full mt-10 mb-10 flex items-center justify-center gap-5  ">
        <button onClick={previousPage} className="btn btn-accent text-white">
          Previous
        </button>
        <div className=" flex items-center gap-2 ">
          {pages?.map((item, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(item)}
              className={` ${
                item === currentPage && "bg-pink-500 text-white"
              } px-4 py-3 transition-all duration-200 hover:bg-gray-200 rounded-md bg-gray-100 text-black font-[500] `}
            >
              {item}
            </button>
          ))}
        </div>
        <button onClick={handleNextPage} className="btn btn-accent text-white">
          Next{" "}
        </button>
      </div>
    </div>
  );
}

// appointmnet type data
const appointmentType = [
  {
    type: "All",
    details: "Available upon request",
  },
  {
    type: "Video Call",
    details: "Available upon request",
  },
  {
    type: "Audio Call",
    details: "Available upon request",
  },
  {
    type: "Chat",
    details: "Available through messaging platforms",
  },
  {
    type: "Direct Visit",
    details: "Available by appointment",
  },
];

// visit type data
const visitTypeData = [
  "All Visit",
  "General",
  "Consultation",
  "Follow-up",
  "Direct Visit",
];
