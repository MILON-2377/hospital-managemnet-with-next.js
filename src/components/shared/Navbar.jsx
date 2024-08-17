"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { usePathname, useRouter } from "next/navigation";
import img from "../../../public/assets/medical.jpg";
import Image from "next/image";
import {
  MdOutlineDashboardCustomize,
  MdRequestPage,
  MdSwitchAccount,
} from "react-icons/md";
import {
  FaCalendarAlt,
  FaCalendarDay,
  FaKey,
  FaRegCalendarCheck,
  FaRegClock,
  FaStar,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function Navbar() {
  const { user, userLoggedOut } = useAuth();
  const router = useRouter();
  const path = usePathname();

  // handle onclick
  const handleOnClick = (name) => {
    if (name === "Logout") {
      userLoggedOut();
    }
  };
  return (
    <div className=" w-[400px] shadow-lg  ">
      {/* profile section */}
      <div>
        <div className="relative  ">
          <div className=" w-full h-[200px]  bg-blue-200 ">
            <Image
              src={img}
              className="w-full  h-full object-cover "
              alt="dashboard image"
            />
          </div>
          {/* profile image */}

          <div className=" absolute top-[150px] left-[140px] w-32 h-32 rounded-full bg-green-200 border border-white "></div>
        </div>
        <div className="p-5 bg-white mt-16 gap-3 flex items-center justify-center flex-col ">
          <p className="text-2xl font-bold text-center ">{user?.userName}</p>
          <p className="text-[16px] text-gray-800 text-center ">
            BDS, MDS - Oral & Maxillofacial Surgery
          </p>
          <div className="p-2 border flex items-center gap-1 rounded-md bg-gray-50 w-24 text-center mx-auto  ">
            <p className=" w-2 h-2 rounded-full bg-green-400 "></p>
            dentist
          </div>
        </div>
      </div>

      {/* available section */}
      <div className="w-full gray-50 bg-slate-50 flex flex-col gap-2 p-5 ">
        <p className="text-xl text-gray-600  ">
          <span className=" font-semibold ">Availability</span>
          <span className=" ml-1 text-red-500">*</span>
        </p>

        <details className="dropdown w-full ">
          <summary className=" p-4 border text-center hover:cursor-pointer border-gray-200 rounded-md ">
            I am available now
          </summary>
          <ul className="menu  bg-base-100 border border-t-0  z-[1] w-full p-2">
            <li>
              <a>I am available now</a>
            </li>
            <li>
              <a>Not available</a>
            </li>
          </ul>
        </details>
      </div>

      {/* navbar links section */}
      <div className=" w-full p-10 bg-white  mb-5 flex flex-col gap-2 ">
        {[...navbarLinks].map((item, index) => (
          <a
            onClick={() => handleOnClick(item.title)}
            key={index}
            href={item?.path}
            className={
              path === item?.path
                ? "p-3 rounded-md flex items-center gap-2 bg-blue-500 text-white text-[16px] font-[500] "
                : ` p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 text-[16px] font-[500] `
            }
          >
            <>
              <span>{item?.icon}</span>
              <span className=" "> {item.title}</span>
            </>
            {item.title === "Requests" && (
              <>
                <p className="text-[16px] w-5 ml-40 h-5 flex items-center justify-center rounded-full  bg-yellow-400 text-white ">
                  3
                </p>
              </>
            )}
            {item.title === "Message" && (
              <>
                <p className="text-[16px] w-5 ml-40 h-5 flex items-center justify-center rounded-full  bg-yellow-400 text-white ">
                  9
                </p>
              </>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

// navbar links dat
const navbarLinks = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <MdOutlineDashboardCustomize className="text-xl font-bold " />,
  },
  {
    title: "Requests",
    path: "/request",
    icon: <FaRegCalendarCheck />,
  },
  {
    title: "Appointments",
    path: "/appointments/doctor",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Available Timings",
    path: "/Available-timings",
    icon: <FaCalendarDay />,
  },
  {
    title: "My Patients",
    path: "/my-patients",
    icon: <FaUser />,
  },
  {
    title: "Specialties & Services",
    path: "/specialties-services",
    icon: <FaRegClock />,
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <FaStar />,
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: <MdSwitchAccount className="text-xl" />,
  },
  {
    title: "Invoices",
    path: "/invoices",
    icon: <IoDocumentTextOutline className="text-xl" />,
  },

  {
    title: "Message",
    path: "/messages",
    icon: <FaMessage />,
  },
  {
    title: "Profile Settings",
    path: "/profile-settings",
    icon: <FaUserEdit className="text-xl" />,
  },
  {
    title: "Change Password",
    path: "/change-password",
    icon: <FaKey />,
  },
  {
    title: "Logout",
    icon: <RiLogoutBoxFill className="text-xl" />,
  },
];
