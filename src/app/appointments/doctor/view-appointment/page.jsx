"use client";
import { MdEmail } from "react-icons/md";
import { SiAnytype } from "react-icons/si";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import img from "../../../../../public/assets/doctor.jpg";
import Image from "next/image";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function ViewAppointment() {
  const patient = useSelector((state) => state.doctorReducer.doctor) || {};

  return (
    <ProtectedRoute>
      <div className="w-full p-5">
        {/* header title */}
        <p className="text-xl font-bold">Appointment Details</p>
        <div className="border border-t-0 mt-5"></div>

        {/* appointment details displaying */}
        <div className="p-5 border border-gray-200 rounded-md mt-5">
          <div className="flex sm:flex-row flex-col gap-5 sm:gap-0 justify-between items-center">
            {/* image name */}
            <div className="flex items-center gap-3">
              <div className=" relative overflow-hidden w-28 h-28 rounded-md">
                <Image
                  src={patient?.patient?.img || img}
                  alt={patient?.patient?.name || "unknown"}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col -mt-3">
                <p className="text-[16px] font-[550] text-cyan-500">#d001</p>
                <p className="text-[16px] font-[550] card-title">
                  {patient?.patient?.name || "Unknown"}
                </p>
                <p className="text-[16px] font-[550] flex items-center gap-1">
                  <span>
                    <MdEmail className="text-xl text-gray-500" />
                  </span>
                  <span>{patient?.patient?.id || "N/A"}</span>
                </p>
                <p className="text-[16px] font-[550]">phone number</p>
              </div>
            </div>

            {/* type of appointment */}
            <div className=" w-full sm:ml-5 sm:w-auto ">
              <p className="text-[18px] font-semibold">Type of Appointment</p>
              <p className="flex items-center mt-3 gap-2">
                <span>
                  <SiAnytype className="text-3xl text-cyan-500" />
                </span>
                <span className="text-[16px] font-[550]">Direct visit</span>
              </p>
            </div>

            {/* new patient or upcoming */}
            <div className=" sm:w-auto w-full flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <p className=" sm:text-[16px] text-sm lg:text-[18] px-2 py-1 lg:py-2 sm:px-2 lg:px-3 rounded-3xl bg-gray-500 text-white">
                  New Patient
                </p>
                <p className="sm:text-[16px] text-sm lg:text-[18] px-2 py-1 lg:py-2 sm:px-2 lg:px-3 rounded-3xl bg-blue-500 text-white">
                  New Patient
                </p>
              </div>
              <p>
                <span className="text-[16px] font-[550]">
                  Consultation Fees:
                </span>
                <span className="text-[16px] font-[550]">$200</span>
              </p>

              <div className="flex justify-end sm:justify-normal items-center gap-4 ml-36">
                <p className="w-10 h-10 hover:cursor-pointer transition-all duration-200 hover:text-white hover:bg-blue-500 rounded-full bg-gray-100 flex items-center justify-center">
                  <BiSolidMessageRounded className="text-xl" />
                </p>
                <p className="w-10 h-10 hover:cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:text-white rounded-full text-xl bg-gray-100 flex items-center justify-center">
                  x
                </p>
              </div>
            </div>
          </div>

          <div className="border border-t-0 mt-5"></div>

          <div className="flex sm:flex-row flex-col gap-3 sm:gap-3 justify-between mt-5">
            <div>
              <p className="text-[16px] font-semibold">
                Appointment Date And Time
              </p>
              <p className="text-gray-500 text-[16px] font-[550]">
                {new Date(patient.appointment_date).toLocaleString() || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-[16px] font-semibold">Clinic Location</p>
              <p className="text-gray-500 text-[16px] font-[550]">location</p>
            </div>

            <div>
              <p className="text-[16px] font-semibold">Location</p>
              <p className="text-gray-500 text-[16px] font-[550]">
                actual location
              </p>
            </div>

            <div>
              <p className="text-[16px] font-semibold">Visit Type</p>
              <p className="text-gray-500 text-[16px] font-[550]">general</p>
            </div>
            <button className="px-4 py-2 rounded-md bg-accent transition-all duration-200 hover:bg-opacity-80 active:scale-95 text-white text-[16px] font-semibold">
              Start Session
            </button>
          </div>
        </div>

        {/* recent appointments section */}
        <div className=" w-full mt-5">
          <p className="text-xl font-bold">Recent Appointments</p>
          <div className=" w-full flex flex-col gap-5">
            {recentAppointment?.map((item, idx) => (
              <div
                key={item.id + idx}
                className="w-full flex sm:flex-row flex-col gap-3 items-center mt-5 justify-between p-5 rounded-md bg-white shadow-md"
              >
                {/* Name and Image */}
                <div className="w-full flex items-center gap-2">
                  <div className=" relative overflow-hidden w-14 h-14 rounded-xl ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      className=" rounded-xl "
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] text-sky-500 font-[550]">
                      #{item.id}
                    </p>
                    <p className="card-title">{item.name}</p>
                  </div>
                </div>

                {/* Date, Time, and Visit Type */}
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[16px] font-normal">
                    {new Date(item.date).toLocaleString()}
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="text-[16px] font-normal">
                      {item.visitType}
                    </span>
                    <span className="text-[16px] font-normal">|</span>
                    <span className="text-[16px] font-normal">
                      {item.callType}
                    </span>
                  </p>
                </div>

                {/* Email and Phone Number */}
                <div className="flex w-full flex-col gap-1">
                  <p className="text-[16px] flex items-center gap-1 font-normal text-slate-800">
                    <MdEmail className="text-xl text-gray-500" />
                    <span className="text-black">{item.email}</span>
                  </p>
                  <p className="text-[16px] font-normal text-slate-800">
                    {item.phone}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className=" w-full sm:w-auto flex items-center gap-2">
                  <p className="flex items-center justify-center hover:cursor-pointer transition-all duration-200 w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white">
                    <FaEye className="text-xl" />
                  </p>
                  <button className="sm:hidden block btn btn-accent text-white">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

// recently items
const recentAppointment = [
  {
    id: "d001",
    name: "Milon Miah",
    image:
      "https://img.freepik.com/free-photo/closeup-portrait-young-girl-posing-looking-camera-isolated-grey-background-concept-beauty_155003-45882.jpg?t=st=1725290816~exp=1725294416~hmac=247c394acf1844ab86e1380a58336084d5dd43ecebaf3f2882322826fe4d1588&w=900",
    visitType: "General visit",
    callType: "Video Call",
    email: "milon.miah@qq.com",
    phone: "+86 132458-4524",
    date: "2024-09-03T10:00:00Z",
  },
  {
    id: "d002",
    name: "John Doe",
    image:
      "https://img.freepik.com/free-photo/fair-haired-young-man-curves-lips-looks-bewilderment-puzzled-faces-expresses-misunderstandment-receives-bad-news-shocked-male-has-troubles-home-university-people-reaction-concept_176420-13682.jpg?t=st=1725301170~exp=1725304770~hmac=69a3950df0999db60f08f687ab35d41da80e5ccc7817a21b44b3505102797516&w=900",
    visitType: "Follow-up visit",
    callType: "In-person",
    email: "john.doe@example.com",
    phone: "+1 555-1234",
    date: "2024-09-03T11:00:00Z",
  },
];
