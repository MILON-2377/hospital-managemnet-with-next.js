"use client";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardNavbar() {
  const path = usePathname();
  const { user } = useAuth();

  const navbarTitles = handleNavbars(user);
  return (
    <div className=" h-screen flex flex-col gap-4 bg-yellow-400 bg-opacity-5 p-5 w-full ">
      <div className=" mt-5 w-16 h-16 rounded-full ">
        <img
          className="w-full rounded-full h-full object-cover "
          src={user?.image}
          alt=""
        />
      </div>

      <div>
        <h1 className="text-xl font-sans font-bold ">Name:</h1>
      </div>

      <div className="divider">or</div>

      <div className=" flex flex-col gap-3 ">
        {navbarTitles?.map((item, index) => (
          <Link
            className={
              path === item.path
                ? " border border-gray-200 px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-blue-600 "
                : "text-xl font-sans hover:border-gray-200 hover:text-blue-400 duration-300 hover:border transition-all  rounded-3xl font-normal text-gray-500 px-3 py-1 "
            }
            href={item.path}
            key={index}
          >
            {item.title}
          </Link>
        ))}

        <div>
          <button className=" px-3 py-2 text-blue-500 font-sans font-semibold transition-all duration-300 rounded-full bg-gray-200 hover:bg-base-200 w-full">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

// patients titles section
const doctorNavTitles = [
  {
    title: "Personal information",
    path: `/dashboard/personalinfo`,
  },
  {
    title: "Patients list",
    path: `/dashboard/patientlist`,
  },
  {
    title: "Consultations",
    path: `/dashboard/consultations`,
  },

  {
    title: "Reports",
    path: `/dashboard/reports`,
  },
  {
    title: "Appointments list",
    path: `/dashboard/appointmentinfo`,
  },
];

// doctors titles
const navTitles = [
  {
    title:"Home",
    path:"/"
  },
  {
    title: "Personal Information",
    path: "/dashboard/personalinfo",
  },

  {
    title: "Appointment Information",
    path: "/dashboard/appointmentinfo",
  },
  {
    title: "Prescriptions",
    path: "/dashboard/prescriptions",
  },
  {
    title: "Medical Records",
    path: "/dashboard/medicalrecords",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
  },
];

// admin navbar list
const adminNavTitles = [
  {
    title: "User Management",
    path: "/dashboard/usermanagement",
  },
  {
    title: "System Settings",
    path: "/dashboard/systemsettings",
  },
  {
    title: "Reports",
    path: "/dashboard/reports",
  },
  {
    title: "Notifications",
    path: "/dashboard/notifications",
  },
  {
    title: "Audit Logs",
    path: "/dashboard/auditlogs",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
  },
];

// navbar handle
const handleNavbars = (user) => {
  if (user?.isAdmin) {
    return adminNavTitles;
  }

  if (user?.profession === "Patient") return navTitles;

  if (user?.profession === "Doctor") return doctorNavTitles;
};
