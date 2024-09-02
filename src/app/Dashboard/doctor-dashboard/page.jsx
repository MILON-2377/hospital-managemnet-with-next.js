"use client";

import Image from "next/image";
import patientIcon from "../../../../public/assets/patientIcon.jpg";
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

export default function DoctorDashbord() {
  return (
    <div>
      {/* appointment and percentage section */}
      <div className=" w-full flex sm:flex-row flex-col sm:justify-between p-5 gap-5 ">
        <div className=" w-full flex flex-col gap-5 flex-1 mt-5 ">
          <div className="p-5 border flex gap-5 w-full justify-between rounded-md   ">
            <div className="flex flex-col gap-1">
              <p className=" text-[16px] sm:text-xl font-[550] text-gray-600 ">
                Total Patient
              </p>
              <p className="text-2xl sm:text-4xl">926</p>
              <p className="flex items-center gap-1">
                <span>
                  <FaCloudUploadAlt className=" text-[16px] sm:text-xl text-teal-400 " />
                </span>
                <span className="text-teal-400 text-sm">
                  15% from Last Week
                </span>
              </p>
            </div>
            <div className=" px-3 w-[80px] h-[80px] flex items-center justify-center rounded-md border  ">
              <Image
                src={patientIcon}
                className=" w-[40px] h-[40px] object-cover"
                alt="patient icon"
              />
            </div>
          </div>
          <div className="p-5 border flex gap-5 w-full justify-between rounded-md   ">
            <div className="flex flex-col gap-1">
              <p className=" text-[16px] sm:text-xl font-[550] text-gray-600 ">
                Patients Today
              </p>
              <p className="text-2xl sm:text-4xl">80</p>
              <p className="flex items-center gap-1">
                <span>
                  {" "}
                  <FaCloudUploadAlt className=" text-[16px] sm:text-xl text-red-500 " />
                </span>
                <span className="text-red-500 text-sm">15% from Last Week</span>
              </p>
            </div>
            <div className="px-3 w-[80px] h-[80px] flex items-center justify-center rounded-md border  ">
              <FaUserClock className="text-2xl sm:text-4xl text-gray-500" />
            </div>
          </div>
          <div className="p-5 border flex gap-5 w-full justify-between rounded-md   ">
            <div className="flex flex-col gap-1">
              <p className=" text-[16px] sm:text-xl font-[550] text-gray-600 ">
                Appointments Today
              </p>
              <p className="text-2xl sm:text-4xl">50</p>
              <p className="flex items-center gap-1">
                <span>
                  <FaCloudUploadAlt className=" text-[16px] sm:text-xl text-teal-400 " />
                </span>
                <span className="text-teal-400 text-sm">
                  15% from Last Week
                </span>
              </p>
            </div>
            <div className=" px-3 w-[80px] h-[80px] flex items-center justify-center rounded-md border  ">
              <FaCalendarCheck className="text-3xl text-gray-500" />
            </div>
          </div>
        </div>

        {/* appointment */}
        <div className="p-5 mt-5 w-full sm:w-[65%] rounded-md border  ">
          <div className="flex items-center gap-5 sm:gap-0 justify-between">
            <p className=" text-[16px] sm:text-xl font-bold ">Appointment</p>
            <div className="dropdown w-[180px] relative ">
              <div
                tabIndex={0}
                role="button"
                className=" flex items-center justify-between px-4 py-2 border  rounded-md "
              >
                <span className=" text-sm sm:text-[18px] font-[450] ">
                  Last 7 Days
                </span>
                <span>
                  <IoIosArrowForward className=" text-[16px] sm:text-xl " />
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
                  <div className="relative w-16 h-16 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  <div>
                    <p className="text-sm sm:text-[16px] text-cyan-500 ">
                      #00{item.id}
                    </p>
                    <p className="card-title text-sm sm:text-[16px]">
                      {item.name}
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <p className="text-sm sm:text-[16px]  ">{item.date}</p>
                  <p className=" px-1 sm:px-2 sm:py-1 text-sm sm:text-[16px] rounded-lg sm:rounded-full mt-1 w-[60px] sm:w-[80px] text-center bg-blue-500 text-white ">
                    general
                  </p>
                </div>

                <div className="  flex items-center gap-2">
                  <p className=" w-5 sm:w-7 h-5 sm:h-7 rounded-full hover:bg-blue-500 transition-all hover:cursor-pointer duration-200 hover:text-white flex items-center justify-center  border border-green-500 ">
                    <FaCheck className="text-green-500  text-sm sm:text-[16px] sm:text-xl hover:text-white" />
                  </p>
                  <p className=" w-5 sm:w-7 h-5 sm:h-7  text-sm sm:text-[16px] sm:text-xl text-red-500 flex items-center transition-all duration-200 hover:cursor-pointer hover:bg-red-500 hover:text-white justify-center rounded-full border border-red-500 ">
                    x
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex sm:flex-row flex-col-reverse justify-between p-5 gap-5 ">
        <div className="flex-1 ">
          {/* weekly overview */}
          <WeeklyOver />

          {/* notification */}
          <Notification />
        </div>

        <div className=" w-full lg:w-[60%] ">
          {/* upcoming appointment section */}
          <div className=" w-full p-5 rounded-md bg-blue-500 ">
            <p className=" text-sm sm:text-xl font-bold text-white">
              Upcomint Appointment
            </p>
            <div className=" mt-10 flex lg:items-center gap-5 lg:gap-24 ">
              <div className="flex items-center gap-2">
                <div className=" w-16 h-16 rounded-md relative overflow-hidden">
            	      <Image 
                    src='https://img.freepik.com/free-photo/beautiful-young-female-posing_23-2148880228.jpg?t=st=1725289475~exp=1725293075~hmac=5a4a755be29dd8c720daf8d3b9554cdf669ae0d94e0c07fa129317ef82531406&w=360'
                    alt="upcoming appointment"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    />
                </div>
                <div>
                  <p className="text-sm sm:text-[18px] text-white ">#D01245</p>
                  <p className="text-sm sm:text-[18px] card-title text-white ">Milon Miah</p>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-[18px] text-white ">Genral visit</p>
                <p className="text-sm sm:text-[18px] text-white ">Today, 10:45 AM</p>
              </div>
            </div>

            <div className=" w-full border-b mt-5 "></div>

            <div className="flex lg:flex-row flex-col lg:items-center mt-5 gap-5 justify-between">
              <div className="flex items-center gap-1">
                <span>
                  <IoMdVideocam className=" text-xl sm:text-3xl text-white " />
                </span>
                <p className=" text-sm sm:text-xl font-bold text-white">
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
      "https://img.freepik.com/free-photo/close-up-portrait-korean-young-asian-woman-professional-looking-confident-assertive-camera-white-background-business-people-concept_1258-97331.jpg?t=st=1725288738~exp=1725292338~hmac=be207da2e9bd2d1041fab432680bb7d9de368480d0529e970615e2b90a32e139&w=1380",
    date: "14 Aug, 2024 10:45 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://img.freepik.com/free-photo/portrait-skeptical-asian-woman-looks-unamused-serious-camera-stands-isolated-white-back_1258-167884.jpg?t=st=1725289387~exp=1725292987~hmac=21d95d9476ca595134eccc3af9a4c11119fe48cb421c9d1fe2b2750e5b6dd752&w=1060",
    date: "15 Aug, 2024 11:45 AM",
  },
  {
    id: 3,
    name: "Michael Brown",
    image:
      "https://img.freepik.com/free-photo/front-view-handsome-corporate-man_23-2148336855.jpg?t=st=1725289432~exp=1725293032~hmac=b56cdff96e117e6274f95060b87cdf03564439e7307ce6fa40ab2bad6b983a6b&w=996",
    date: "16 Aug, 2024 11 AM",
  },
  {
    id: 4,
    name: "Emily Johnson",
    image:
      "https://img.freepik.com/free-photo/professional-beautiful-cosmetologist-with-cute-smile_144627-12796.jpg?t=st=1725289455~exp=1725293055~hmac=b616c5bc5a05bcedb45ee2d6173d2db41f2a01931700ddd97a7c92add8d80d94&w=360",
    date: "17 Aug, 2024 2 PM",
  },
  {
    id: 5,
    name: "William Davis",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-posing_23-2148880228.jpg?t=st=1725289475~exp=1725293075~hmac=5a4a755be29dd8c720daf8d3b9554cdf669ae0d94e0c07fa129317ef82531406&w=360",
    date: "14 Sep, 2024 5:02 AM",
  },
];
