"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { usePathname, useRouter } from "next/navigation";
import img from "../../../public/assets/dashboard.jpg";
import Image from "next/image";
import { a } from "@react-spring/web";
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
  return (
    <div className=" w-[400px] bg-gray-50 shadow-lg  ">
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

          <div className=" absolute top-32 left-36 w-28 h-28 rounded-full bg-green-200 border border-white "></div>
        </div>
        <div className="p-5 bg-white mt-10 ">
          <p className="text-2xl font-bold text-center ">name</p>
          <p className="text-xl text-gray-800 text-center ">speciality</p>
          <p className="p-2 rounded-md bg-gray-50 w-24 text-center mx-auto  ">
            dentist
          </p>
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
          <ul className="menu  bg-base-100 border border-t-0  z-[1] w-full p-2 shadow">
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
            key={index}
            href={item.path}
            className={
              path === item.path
                ? "p-3 rounded-md flex items-center gap-2 bg-blue-500 text-white text-[18px] font-semibold "
                : ` p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 text-[18px] font-semibold `
            }
          >
            <span>{item?.icon}</span>
            <span className=" "> {item.title}</span>
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
    path: "/dashboard",
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
    path: "/available-timings",
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
    path: "/logout",
    icon: <RiLogoutBoxFill className="text-xl" />,
  },
];
