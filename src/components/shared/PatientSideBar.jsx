"use client";

import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Link from "next/link";
import { usePathname, useRouter, } from "next/navigation";
import { RiLogoutBoxFill } from "react-icons/ri";
import Cookies from "js-cookie";

export default function PatientSideBar({ navLinks }) {
  const { user, userLoggedOut } = useAuth();
  const path = usePathname();
  const {push} = useRouter();

  return (
    <div className="lg:hidden navbar flex items-center justify-between">
      <div>
        <div className="drawer relative">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="flex items-center ml-2 justify-center transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md border"
            >
              <CiMenuFries className=" text-xl " />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-100 text-base-content min-h-full w-[80%] sm:w-[350px] p-4">
              <li className=" text-2xl font-bold px-3 ">
                {user?.userName}
              </li>

              <div className=" mt-5 mb-5 border-t border-t-gray-200 w-full "></div>

              {[...navLinks].map((item, index) => (
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
            </ul>
          </div>
        </div>
      </div>

      {/* logo and name */}
      <div>
        <p className="text-2xl font-bold">CareLife</p>
      </div>

      <div className="flex-none">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className={`w-10 rounded-full ${user?.photo || "border"} `}>
                <img alt={user?.photo ? "User Avatar" : ""} src={user?.photo} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className=" rounded-md px-4 py-3 border text-accent text-xl hover:bg-accent transition-all duration-200 active:bg-opacity-70 hover:text-white font-[500] active:scale-95 "
            >
              LogIn
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
