"use client";

import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import img from "../../../public/bearded-doctor-listening-patient.jpg";
import Image from "next/image";
import { useState } from "react";

export default function LogIn() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className=" flex justify-between gap-6 ">
      <div className="p-10 w-full lg:w-[40%] sm:w-[70%] mx-auto ">
        {/* header title */}
        <div>
          <h1 className="text-4xl font-bold text-cyan-500"> CareLife</h1>
        </div>

        <div className=" mt-32 ">
          <h1 className="text-2xl font-bold text-slate-700">
            LogIn with email and password
          </h1>
        </div>
        <form className=" w-full ">
          <div className="mt-6 w-full flex flex-col ">
            <span className="text-xl text-gray-600">Email</span>
            <label className="flex w-full items-center mt-2 ">
              <p className=" border-r-0 rounded-md rounded-r-none border border-gray-200 px-3 py-3">
                <FaUser className="text-2xl text-gray-400" />
              </p>
              <input
                className=" w-full py-3 px-2 focus:outline-none border-l-0 rounded-l-none border border-gray-200 rounded-md"
                type="email"
                placeholder="ex: milon.miah@qq.com"
              />
            </label>
          </div>
          <div className="mt-6 w-full flex flex-col">
            <span className="text-xl text-gray-600">Password</span>
            <label className="flex items-center mt-2 relative ">
              <p className="border-r-0 rounded-md rounded-r-none border border-gray-200 px-3 py-3">
                <MdOutlineWifiPassword className="text-2xl text-gray-400" />
              </p>
              <input
                className=" w-full py-3 px-2 focus:outline-none border-l-0 rounded-l-none border border-gray-200 rounded-md"
                type= {showPass ? "text" : "password"}
                placeholder="password: xxxxxx"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 hover:cursor-pointer "
              >
                {showPass ? (
                  <>
                    <FaEye className={"text-xl"} />
                  </>
                ) : (
                  <>
                    <FaEyeSlash className={"text-xl"} />
                  </>
                )}
              </span>
            </label>
          </div>

          <button className="btn btn-accent text-white w-full mt-10">
            Sign In
          </button>
        </form>
        <div className="flex items-center mt-7 gap-5">
          <label>
            <p className="hover:underline text-blue-500 transition-all duration-200 active:text-blue-600 hover:cursor-pointer ">
              Forgot password
            </p>
          </label>
          <span>||</span>
          <label className="flex items-center gap-2">
            <p className="">Do not have an account?</p>
            <a className="text-blue-500 hover:underline" href="/signup">
              SignUp
            </a>
          </label>
        </div>
      </div>

      <div className=" flex-1 h-screen ">
        <Image src={img} className="w-full h-full object-cover" alt="login" />
      </div>
    </div>
  );
}
