"use client";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { usePathname, useRouter } from "next/navigation";
import img from "../../../public/assets/patientBackgroun.jpg";
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
import PatientSideBar from "./PatientSideBar";

export default function PatientNavbar() {
  const { user, userLoggedOut } = useAuth();
  const path = usePathname();
  const router = useRouter();
  return (
    <div className=" w-full h-full ">
      {/* for small devices */}
      <PatientSideBar navLinks={patientNavbarLinks} />

      {/* for large device */}
      <div className=" hidden lg:block w-full shadow-md rounded-b-md h-full  ">
        {/* profile section */}
        <div>
          <div className="relative  ">
            <div className=" w-full h-[200px] ">
              <Image
                src={img}
                className="w-full  h-full object-cover "
                alt="dashboard image"
              />
            </div>

            {/* profile image */}
            <div className=" absolute top-[150px] left-[34%] w-32 h-32 rounded-full border-[3px] border-white ">
              <img
                src={
                  user?.photo
                    ? user.photo
                    : "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                }
                alt={user?.name}
                className=" w-full h-full object-cover rounded-full "
              />
            </div>
          </div>
          <div className="p-5 bg-white mt-20 gap-3 flex items-center justify-center flex-col ">
            <p className="text-2xl font-bold text-center ">{user?.userName}</p>
            <p className="text-[16px] text-center ">
              <span className=" text-[16px] font-[500] text-sky-500 ">
                Patient ID :
              </span>
              <span className=" ml-1 ">#d00245</span>
            </p>
            <div className=" flex items-center gap-2 w-full justify-center ">
              <p className=" w-2 h-2 rounded-full bg-green-400 "></p>
              <p className=" text-[16px] font-[500] text-blue-500 ">Male</p>
              <p>22 years old 5 months</p>
            </div>
          </div>
        </div>

        <div className=" mt-5 mb-5 border-t "></div>

        {/* navbar links section */}
        <div className=" w-full p-10 bg-white  mb-5 lg:flex flex-col gap-2 ">
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

          <Link
            onClick={() => {
              userLoggedOut();
            }}
            href="/login"
            className={` p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 text-[16px] font-[500] `}
          >
            <RiLogoutBoxFill className="text-xl font-bold" />
            <span>LogOut</span>
          </Link>
        </div>
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
    path: "/changed-password/patient",
    icon: <FaKey className="text-xl font-bold" />,
  },
];
