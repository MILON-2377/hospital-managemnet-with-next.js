"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import logo from "../../../public/logo1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, userLoggedOut } = useAuth();
  const router = useRouter();
  return (
    <div className="navbar bg-white border-b border-b-gray-200 ">
      <div className="navbar-start">
        
        <a className=" lg:ml-8 font-bold text-cyan-500 text-3xl">CareLife</a>
      </div>

      <div>
        <a href="/appointment-form-page">appointment</a>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
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
                <li
                onClick={userLoggedOut}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button
            onClick={() => router.push("/login") }
            className="btn btn-accent">LogIn</button>
          </>
        )}
      </div>
    </div>
  );
}
