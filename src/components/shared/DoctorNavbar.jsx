"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { usePathname, useRouter } from "next/navigation";
import img from "../../../public/assets/medical.jpg";
import img1 from "../../../public/assets/doctor.jpg";
import Image from "next/image";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaCalendarAlt,
  FaCalendarDay,
  FaKey,
  FaRegCalendarCheck,
  FaUserEdit,
} from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import Link from "next/link";
import PatientSideBar from "./PatientSideBar";
import { useEffect, useState } from "react";

export default function DoctorNavbar() {
  const { user, userLoggedOut } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const [isPathChange, setIsPathChange] = useState(null);

  // handle onclick
  const handleOnClick = (name) => {
    if (name === "Logout") {
      userLoggedOut();
    }
  };

  useEffect(() => {
    setIsPathChange(path);
    const modal = document.getElementById("my_modal_1");
    modal.close();
  }, [path]);

  return (
    <div className=" w-full h-full ">
      <PatientSideBar navLinks={navbarLinks} />

      {/* for large device */}
      <div className=" hidden lg:block w-full shadow-md rounded-b-md h-full   ">
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

            <div className=" absolute top-[150px] left-[140px] w-32 h-32 rounded-full border border-white ">
              {user?.photo ? (
                <></>
              ) : (
                <>
                  <Image
                    src={img1}
                    alt="profile"
                    className=" w-full h-full rounded-full object-cover "
                  />
                </>
              )}
            </div>
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
            <Link
              onClick={() => {
                if (isPathChange !== item.path) {
                  document.getElementById("my_modal_1").showModal();

                  handleOnClick(item.title);
                }
              }}
              key={index}
              href={item.path}
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
            onClick={() => {
              router.push("/login");
              userLoggedOut();
            }}
            className={` p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 text-[16px] font-[500] `}
          >
            <RiLogoutBoxFill className="text-xl" />
            LogOut
          </button>
        </div>
      </div>

      {/* modal */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className=" p-5 rounded-md bg-accent text-white flex flex-col items-center justify-center gap-3">
            <p className=" w-full text-center ">
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
}

// navbar links for doctor
const navbarLinks = [
  {
    title: "Dashboard",
    path: "/Dashboard/doctor-dashboard",
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
    title: "Profile Settings",
    path: "/profile-edit/doctor",
    icon: <FaUserEdit className="text-xl" />,
  },
  {
    title: "Change Password",
    path: "/changed-password/doctor",
    icon: <FaKey />,
  },
];
