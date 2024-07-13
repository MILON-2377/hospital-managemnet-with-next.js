"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const { userLoggedOut } = useAuth();
  const path = usePathname();

  // user logging out handle
  const loggedOut = () => {
    userLoggedOut();
  };

  return (
    <div className=" flex items-center justify-between h-24 w-full bg-slate-950 bg-opacity-90 ">
      {/* navbar logo section */}
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          {/* logo section */}
          <div className="drawer-content p-2 ml-4 hover:border rounded-xl transition-all duration-300 ease-in-out hover:border-white ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="  cursor-pointer "
            >
              
                <IoMdMenu className="text-4xl text-white" />
              
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-sky-300 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {visitorUsersNavLinks?.map((item, index) => (
                <Link
                  className={
                    path === item.path
                      ? " border px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-white "
                      : "text-xl font-sans font-normal text-white px-3 py-1 "
                  }
                  href={item.path}
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* navbar titles sections */}
      <div className=" hidden lg:flex gap-4">
        {visitorUsersNavLinks?.map((item, index) => (
          <Link
            className={
              path === item.path
                ? " border px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-white "
                : "text-xl font-sans font-normal text-white px-3 py-1 "
            }
            href={item.path}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* name */}
      <div className=" lg:hidden ">
        <h1 className="text-white text-3xl font-bold ">CareLife</h1>
      </div>

      {/* dashboard section */}
      <div className="mr-5">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-16 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// doctor navlinks list
const doctorNavLinks = [
  {
    title: "Patients",
    path: "/patients",
  },
  {
    title: "Medical Records",
    path: "/medical Records",
  },
  {
    title: "Prescriptions",
    path: "/prescriptions",
  },
  {
    title: "Laboratory",
    path: "/laboratory",
  },
  {
    title: "Reports",
    path: "/Reports",
  },

  {
    title: "Messages",
    path: "/messages",
  },
];

// visitor users navlinks
const visitorUsersNavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Doctors",
    path: "/doctors",
  },
  {
    title: "Appointments",
    path: "/appointments",
  },
  {
    title: "News",
    path: "/News",
  },
];

// patients users navLinks
const patientUserNavLinks = [
  {
    title: "Appointments",
    path: "/appointments",
  },
  {
    title: "Medical Records",
    path: "/medical Records",
  },
  {
    title: "Prescriptions",
    path: "/prescriptions",
  },
  {
    title: "Lab tests",
    path: "/bab tests",
  },
  {
    title: "Doctors",
    path: "/doctors",
  },
  {
    title: "Support",
    path: "/support",
  },
];
