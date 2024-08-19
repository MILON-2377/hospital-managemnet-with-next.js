"use client";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { usePathname, useRouter } from "next/navigation";
import img from "../../../public/assets/medical.jpg";
import Image from "next/image";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaCalendarAlt,
  FaKey,
  FaRegCalendarCheck,
  FaUserEdit,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import Link from "next/link";

export default function PatientNavbar() {
  const { user } = useAuth();
  const path = usePathname();
  return (
    <div className=" w-full shadow-md rounded-b-md h-full  ">
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
          <div className=" absolute top-[150px] left-[140px] w-32 h-32 rounded-full bg-green-200 border-[3px] border-white "></div>
        </div>
        <div className="p-5 bg-white mt-20 gap-3 flex items-center justify-center flex-col ">
          <p className="text-2xl font-bold text-center ">{user?.userName}</p>
          <p className="text-[16px] text-gray-800 text-center ">
            <span>Id :</span>
            <span>patient Id</span>
          </p>
          <div className=" flex items-center gap-2 ">
            <p className=" w-2 h-2 rounded-full bg-green-400 "></p>
            <p>gender</p>
            <p>age</p>
          </div>
        </div>
      </div>

      <div className=" mt-5 mb-5 border-t "></div>

      {/* navbar links section */}
      <div className=" w-full p-10 bg-white  mb-5 flex flex-col gap-2 ">
        {[...patientNavbarLinks].map((item, index) => (
          <Link
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
          </Link>
        ))}

        <button
          className={` p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 text-[16px] font-[500] `}
        >
          <RiLogoutBoxFill className="text-xl font-bold" />
          <span>LogOut</span>
        </button>
      </div>
    </div>
  );
}

// navbar links for patient
const patientNavbarLinks = [
  {
    title: "Dashboard",
    path: "/Dashboard/patient-dashboard",
    icon: <MdOutlineDashboardCustomize className="text-xl font-bold" />,
  },
  {
    title: "My Appointments",
    path: "/appointments/patient",
    icon: <FaCalendarAlt className="text-xl font-bold" />,
  },
  {
    title: "Book Appointment",
    path: "/book-appointments",
    icon: <FaRegCalendarCheck className="text-xl font-bold" />,
  },

  {
    title: "Invoices",
    path: "/invoice",
    icon: <IoDocumentTextOutline className="text-xl font-bold" />,
  },

  {
    title: "Profile Settings",
    path: "/profile-edit/patient",
    icon: <FaUserEdit className="text-xl font-bold" />,
  },
  {
    title: "Change Password",
    path: "/change-password",
    icon: <FaKey className="text-xl font-bold" />,
  },
];
