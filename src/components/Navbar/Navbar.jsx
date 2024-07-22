"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import Loader from "./Loader/Loader";

export default function Navbar() {
  const { userLoggedOut } = useAuth();
  const path = usePathname();
  const { user, loading } = useAuth();
  const router = useRouter();

  // console.log(path);
  const navLinks = navbarLinksHandle(user);

  // user logging out handle
  const loggedOut = () => {
    userLoggedOut();
  };

  if (loading) return <Loader></Loader>;

  return (
    <div className=" flex text-gray-400  items-center justify-between  h-20 w-full  ">
      {/* navbar logo section */}
      <div>
        <div className="drawer z-20 lg:hidden ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          {/* logo section */}
          <div className="drawer-content p-2 ml-4 hover:border rounded-xl transition-all duration-300 ease-in-out hover:border-white ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="  cursor-pointer ">
              <IoMdMenu className="text-4xl text-white" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-sky-300 relative z-30 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {navLinks?.map((item, index) => (
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

        <a
          href="/"
          className="sm:hidden lg:block text-3xl font-sans font-bold text-blue-600 p-4 "
        >
          CareLife
        </a>
      </div>

      {/* navbar titles sections */}
      <div className=" hidden h-full px-4 items-center rounded-full lg:bg-opacity-80 lg:flex gap-4">
        {navLinks?.map((item, index) => (
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
      </div>

      {/* name */}
      <div className=" sm:hidden ">
        <a
          href="/"
          className="sm:hidden lg:block text-3xl font-sans font-bold text-blue-600 p-4 "
        >
          CareLife
        </a>
      </div>

      {/* dashboard section */}
      <div className="mr-5">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-16 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.image} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/dashboard" className="justify-between">
                  Profile
                </a>
              </li>

              <li onClick={loggedOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 bg-sky-600 text-white rounded-full font-sans font-bold bg-opacity-80 hover:bg-sky-500 transition-all duration-300 "
            >
              LogIn
            </button>
          </>
        )}
      </div>
    </div>
  );

  // if (profession === "patients")
  //   return (
  //     <div className=" flex text-gray-400  items-center justify-between  h-20 w-full  ">
  //       {/* navbar logo section */}
  //       <div>
  //         <div className="drawer lg:hidden ">
  //           <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  //           {/* logo section */}
  //           <div className="drawer-content p-2 ml-4 hover:border rounded-xl transition-all duration-300 ease-in-out hover:border-white ">
  //             {/* Page content here */}
  //             <label htmlFor="my-drawer" className="  cursor-pointer ">
  //               <IoMdMenu className="text-4xl text-white" />
  //             </label>
  //           </div>
  //           <div className="drawer-side">
  //             <label
  //               htmlFor="my-drawer"
  //               aria-label="close sidebar"
  //               className="drawer-overlay"
  //             ></label>
  //             <ul className="menu bg-sky-300 text-base-content min-h-full w-80 p-4">
  //               {/* Sidebar content here */}
  //               {patientUserNavLinks?.map((item, index) => (
  //                 <Link
  //                   className={
  //                     path === item.path
  //                       ? " border px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-white "
  //                       : "text-xl font-sans font-normal text-white px-3 py-1 "
  //                   }
  //                   href={item.path}
  //                   key={index}
  //                 >
  //                   {item.title}
  //                 </Link>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //         <a
  //           href="/"
  //           className="sm:hidden lg:block text-3xl font-sans font-bold text-blue-600 p-4 "
  //         >
  //           CareLife
  //         </a>
  //       </div>

  //       {/* navbar titles sections */}
  //       <div className=" hidden h-full px-4 items-center rounded-full lg:bg-opacity-80 lg:flex gap-4">
  //         {patientUserNavLinks?.map((item, index) => (
  //           <Link
  //             className={
  //               path === item.path
  //                 ? " border border-gray-200 px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-blue-600 "
  //                 : "text-xl font-sans hover:border-gray-200 hover:text-blue-400 duration-300 hover:border transition-all  rounded-3xl font-normal text-gray-500 px-3 py-1 "
  //             }
  //             href={item.path}
  //             key={index}
  //           >
  //             {item.title}
  //           </Link>
  //         ))}
  //       </div>

  //       {/* name */}
  //       <div className=" sm:hidden ">
  //         <a
  //           href="/"
  //           className="sm:hidden lg:block text-3xl font-sans font-bold text-blue-600 p-4 "
  //         >
  //           CareLife
  //         </a>
  //       </div>

  //       {/* dashboard section */}
  //       <div className="mr-5">
  //         {user ? (
  //           <div className="dropdown dropdown-end">
  //             <div
  //               tabIndex={0}
  //               role="button"
  //               className="btn btn-ghost btn-circle avatar"
  //             >
  //               <div className="w-16 rounded-full">
  //                 <img alt="Tailwind CSS Navbar component" src={user?.image} />
  //               </div>
  //             </div>
  //             <ul
  //               tabIndex={0}
  //               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
  //             >
  //               <li>
  //                 <a href="/dashboard" className="justify-between">
  //                   Profile
  //                 </a>
  //               </li>

  //               <li onClick={loggedOut}>
  //                 <a>Logout</a>
  //               </li>
  //             </ul>
  //           </div>
  //         ) : (
  //           <>
  //             <button
  //               onClick={() => router.push("/login")}
  //               className="px-4 py-2 bg-sky-600 text-white rounded-full font-sans font-bold bg-opacity-80 hover:bg-sky-500 transition-all duration-300 "
  //             >
  //               LogIn
  //             </button>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   );
  // else
  //   return (
  //     <div className=" flex text-gray-400  items-center justify-between  h-20 w-full  ">
  //       {/* navbar logo section */}
  //       <div>
  //         <div className="drawer lg:hidden ">
  //           <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  //           {/* logo section */}
  //           <div className="drawer-content p-2 ml-4 hover:border rounded-xl transition-all duration-300 ease-in-out hover:border-white ">
  //             {/* Page content here */}
  //             <label htmlFor="my-drawer" className="  cursor-pointer ">
  //               <IoMdMenu className="text-4xl text-white" />
  //             </label>
  //           </div>
  //           <div className="drawer-side">
  //             <label
  //               htmlFor="my-drawer"
  //               aria-label="close sidebar"
  //               className="drawer-overlay"
  //             ></label>
  //             <ul className="menu bg-sky-300 text-base-content min-h-full w-80 p-4">
  //               {/* Sidebar content here */}
  //               {visitorUsersNavLinks?.map((item, index) => (
  //                 <Link
  //                   className={
  //                     path === item.path
  //                       ? " border px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-white "
  //                       : "text-xl font-sans font-normal text-white px-3 py-1 "
  //                   }
  //                   href={item.path}
  //                   key={index}
  //                 >
  //                   {item.title}
  //                 </Link>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //         <a
  //           href="/"
  //           className="sm:hidden lg:block text-3xl font-sans font-bold text-blue-600 p-4 "
  //         >
  //           CareLife
  //         </a>
  //       </div>

  //       {/* navbar titles sections */}
  //       <div className=" hidden h-full px-4 items-center rounded-full lg:bg-opacity-80 lg:flex gap-4">
  //         {visitorUsersNavLinks?.map((item, index) => (
  //           <Link
  //             className={
  //               path === item.path
  //                 ? " border border-gray-200 px-4 py-1 rounded-3xl text-xl font-sans font-semibold text-blue-600 "
  //                 : "text-xl font-sans hover:border-gray-200 hover:text-blue-400 duration-300 hover:border transition-all  rounded-3xl font-normal text-gray-500 px-3 py-1 "
  //             }
  //             href={item.path}
  //             key={index}
  //           >
  //             {item.title}
  //           </Link>
  //         ))}
  //       </div>

  //       {/* name */}
  //       <div className=" sm:hidden ">
  //         <a
  //           href="/"
  //           className="sm:hidden lg:block text-3xl font-sans font-bold text-blue-600 p-4 "
  //         >
  //           CareLife
  //         </a>
  //       </div>

  //       {/* dashboard section */}
  //       <div className="mr-5">
  //         {user ? (
  //           <div className="dropdown dropdown-end">
  //             <div
  //               tabIndex={0}
  //               role="button"
  //               className="btn btn-ghost btn-circle avatar"
  //             >
  //               <div className="w-16 rounded-full">
  //                 <img alt="Tailwind CSS Navbar component" src={user?.image} />
  //               </div>
  //             </div>
  //             <ul
  //               tabIndex={0}
  //               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
  //             >
  //               <li>
  //                 <a href="/dashboard" className="justify-between">
  //                   Profile
  //                 </a>
  //               </li>

  //               <li onClick={loggedOut}>
  //                 <a>Logout</a>
  //               </li>
  //             </ul>
  //           </div>
  //         ) : (
  //           <>
  //             <button
  //               onClick={() => router.push("/login")}
  //               className="px-4 py-2 bg-sky-600 text-white rounded-full font-sans font-bold bg-opacity-80 hover:bg-sky-500 transition-all duration-300 "
  //             >
  //               LogIn
  //             </button>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   );
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
    title: "News",
    path: "/News",
  },
];

// patients users navLinks
const patientUserNavLinks = [
  {
    title: "Appointments",
    path: "/appointment",
  },
  {
    title: "Medical Records",
    path: "/medical records",
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

// nvabar links handle
function navbarLinksHandle(user) {
  if (user?.profession === "Doctors") return doctorNavLinks;
  if (user?.profession === "Patient") return patientUserNavLinks;
  return visitorUsersNavLinks;
}
