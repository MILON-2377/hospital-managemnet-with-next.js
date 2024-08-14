"use client";
import Image from "next/image";
import patientIcon from "../../../public/assets/patientIcon.jpg";
import {
  FaCalendarCheck,
  FaCheck,
  FaCloudUploadAlt,
  FaUserClock,
} from "react-icons/fa";
import { IoIosArrowForward, IoMdVideocam } from "react-icons/io";
import WeeklyOver from "@/components/DashBoard/WeeklyOver";
import RecentInvoice from "@/components/DashBoard/RecentInvoice";
import Notification from "@/components/DashBoard/Notification";

export default function Dashboard() {
  return (
    <div>
      {/* appointment and percentage section */}
      <div className=" w-full flex justify-between p-5 gap-5 ">
        <div className="flex flex-col gap-5 flex-1 mt-5 ">
          <div className="p-5 border flex gap-5 w-full justify-between rounded-md border-gray-200  ">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-[550] text-gray-600 ">Total Patient</p>
              <p className="text-4xl">926</p>
              <p className="flex items-center gap-1">
                <span>
                  <FaCloudUploadAlt className="text-xl text-teal-400 " />
                </span>
                <span className="text-teal-400 text-sm">
                  15% from Last Week
                </span>
              </p>
            </div>
            <div className=" px-3 w-[80px] h-[80px] flex items-center justify-center rounded-md border border-gray-200 ">
              <Image
                src={patientIcon}
                className=" w-[40px] h-[40px] object-cover"
                alt="patient icon"
              />
            </div>
          </div>
          <div className="p-5 border flex gap-5 w-full justify-between rounded-md border-gray-200  ">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-[550] text-gray-600 ">
                Patients Today
              </p>
              <p className="text-4xl">80</p>
              <p className="flex items-center gap-1">
                <span>
                  {" "}
                  <FaCloudUploadAlt className="text-xl text-red-500 " />
                </span>
                <span className="text-red-500 text-sm">15% from Last Week</span>
              </p>
            </div>
            <div className="px-3 w-[80px] h-[80px] flex items-center justify-center rounded-md border border-gray-200 ">
              <FaUserClock className="text-4xl text-gray-500" />
            </div>
          </div>
          <div className="p-5 border flex gap-5 w-full justify-between rounded-md border-gray-200  ">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-[550] text-gray-600 ">
                Appointments Today
              </p>
              <p className="text-4xl">50</p>
              <p className="flex items-center gap-1">
                <span>
                  <FaCloudUploadAlt className="text-xl text-teal-400 " />
                </span>
                <span className="text-teal-400 text-sm">
                  15% from Last Week
                </span>
              </p>
            </div>
            <div className=" px-3 w-[80px] h-[80px] flex items-center justify-center rounded-md border border-gray-200 ">
              <FaCalendarCheck className="text-3xl text-gray-500" />
            </div>
          </div>
        </div>

        {/* appointment */}
        <div className="p-5 mt-5 w-[65%] rounded-md border border-gray-200 ">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold ">Appointment</p>
            <div className="dropdown w-[180px] relative ">
              <div
                tabIndex={0}
                role="button"
                className=" flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md "
              >
                <span className="text-[18px] font-[450] ">Last 7 Days</span>
                <span>
                  <IoIosArrowForward className="text-xl " />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content absolute right-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Today</a>
                </li>
                <li>
                  <a>This month</a>
                </li>
                <li>
                  <a>Last 7 Days</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-t-0 mt-5"></div>

          {/* appointment data */}
          <div className="flex flex-col gap-5 mt-5">
            {appointmentData?.map((item) => (
              <div key={item.id} className="w-full flex justify-between ">
                <div className="flex w-full items-center gap-2">
                  <div className=" w-12 h-12 rounded-md bg-blue-200 ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md "
                    />
                  </div>
                  <div>
                    <p className="text-[16px] text-cyan-500 ">#00{item.id}</p>
                    <p className="card-title text-[16px]">{item.name}</p>
                  </div>
                </div>

                <div className="w-full">
                  <p className="text-[16px]  ">{item.date}</p>
                  <p className=" px-2 py-1 text-[16px] rounded-full mt-1 w-[80px] text-center bg-blue-500 text-white ">
                    general
                  </p>
                </div>

                <div className="  flex items-center gap-2">
                  <p className=" w-7 h-7 rounded-full hover:bg-blue-500 transition-all hover:cursor-pointer duration-200 hover:text-white flex items-center justify-center  border border-green-500 ">
                    <FaCheck className="text-green-500 text-xl hover:text-white" />
                  </p>
                  <p className=" w-7 h-7 text-xl text-red-500 flex items-center transition-all duration-200 hover:cursor-pointer hover:bg-red-500 hover:text-white justify-center rounded-full border border-red-500 ">
                    x
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex justify-between p-5 gap-5 ">
        <div className="flex-1 ">
          {/* weekly overview */}
          <WeeklyOver />

          {/* notification */}
          <Notification />
        </div>

        <div className=" w-[60%] ">
          {/* upcoming appointment section */}
          <div className=" w-full p-5 rounded-md bg-blue-500 ">
            <p className="text-xl font-bold text-white">Upcomint Appointment</p>
            <div className=" mt-10 flex items-center gap-24 ">
              <div className="flex items-center gap-2">
                <div className=" w-16 h-16 rounded-md bg-yellow-400 "></div>
                <div>
                  <p className="text-[18px] text-white ">id</p>
                  <p className="text-[18px] card-title text-white ">naem</p>
                </div>
              </div>

              <div>
                <p className="text-[18px] text-white ">Genral visit</p>
                <p className="text-[18px] text-white ">Today, 10:45 AM</p>
              </div>
            </div>

            <div className=" w-full border-b mt-5 "></div>

            <div className="flex items-center mt-5 justify-between">
              <div className="flex items-center gap-1">
                <span>
                  <IoMdVideocam className="text-3xl text-white " />
                </span>
                <p className="text-xl font-bold text-white">
                  Video Appointment
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="btn ">Chat Now</button>
                <button className="btn">Start Appointment</button>
              </div>
            </div>
          </div>

          {/* invoice section */}
          <RecentInvoice />
        </div>
      </div>
    </div>
  );
}

// appointment data
const appointmentData = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s",
    date: "14 Aug, 2024 10:45 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU",
    date: "15 Aug, 2024 11:45 AM",
  },
  {
    id: 3,
    name: "Michael Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0yJDHmFwDqOMljDHXB7JN5gMJdR35s8yj12-sVDbTQcXYlIf-NRKDXEcD9c_vGCYNk&usqp=CAU",
    date: "16 Aug, 2024 11 AM",
  },
  {
    id: 4,
    name: "Emily Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&s",
    date: "17 Aug, 2024 2 PM",
  },
  {
    id: 5,
    name: "William Davis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkboRWjcG9fDVJv-Y5tONb9Y_jrvqbH3tTyXmAErQ3gOqYJ1Xaw_rlx4Jse-cs0CFPnU&usqp=CAU",
    date: "14 Sep, 2024 5:02 AM",
  },
];
