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
import { useEffect, useState } from "react";

export default function PatientNavbar() {
  const { user, userLoggedOut } = useAuth();
  const [isPathChange, setIsPathChange] = useState(null);
  const path = usePathname();
  const { push } = useRouter();

  // handle path change loading
  useEffect(() => {
    setIsPathChange(path);
    document.getElementById("my_modal_1").close();
  }, [path]);

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
            <div className=" overflow-hidden absolute top-[150px] left-[34%] w-32 h-32 rounded-full border-[3px] border-white ">
              <Image
                src={
                  user?.photo
                    ? user.photo
                    : "https://img.freepik.com/free-photo/front-view-handsome-corporate-man_23-2148336855.jpg?t=st=1725311972~exp=1725315572~hmac=b33a7f72c5b97d9c1cb5a2adae49b903b302b9c652236909c4db35c35bd8da94&w=900"
                }
                alt={user?.name}
                fill={true}
                style={{ objectFit: "cover" }}
                className="rounded-full "
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
              onClick={() => {
                if (isPathChange !== item.path) {
                  document.getElementById("my_modal_1").showModal();
                }
              }}
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
            onClick={() => {
              push("/login");
              userLoggedOut();
            }}
            href="/login"
            className={` p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 text-[16px] font-[500] `}
          >
            <RiLogoutBoxFill className="text-xl font-bold" />
            <span>LogOut</span>
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
