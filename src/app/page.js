"use client";

import { LuUser } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import doctor from "../../public/doctor2.jpg";
import Image from "next/image";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const { userRegisterHandle } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // form handle
  const onSubmit = (e) => {
    e.preventDefault();

    if (fullName.length === 0) {
      return setErrors({ field: "name", message: "full name is required!" });
    }

    if (email.length === 0)
      return setErrors({ field: "email", message: "email is required!" });

    if (password.length === 0)
      return setErrors({ field: "password", message: "password is required!" });

    userRegisterHandle(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        setErrors({field:"signup", message:error.message});
        console.log(error.message);
      });
  };

  // handle errors
  useEffect(() => {
    const notify = () => toast(errors?.message);
    if (errors) {
      notify();
    }
  }, [errors]);

  useEffect(() => {
    if (fullName.length > 0 || email.length > 0 || password.length > 0)
      setErrors({});
  }, [fullName, email, password]);

  return (
    <div className=" w-full h-screen bg-white flex justify-between ">
      <div className=" lg:w-[40%] sm:w-[70%] mx-auto w-full h-full ">
        {/* form section */}
        <div className=" w-full flex flex-col gap-22 p-10  ">
          <h1 className=" text-2xl text-gray-600 ">Welcom to CareLife</h1>

          {/* social login section */}
          <div className="mt-10">
            <p className=" text-xl font-semibold text-gray-600 mt-2 ">
              Sign Up with social
            </p>
            <button className=" mt-5 flex items-center justify-center hover:text-white hover:bg-cyan-500 hover:border-none transition-all duration-200 active:bg-cyan-400 active:scale-95 gap-5 mt-3 px-4 py-3 font-semibold border border-gray-200 text-gray-200 rounded-md w-full ">
              <FaGoogle className=" text-xl text-green-500 " />
              <span className=" text-xl text-gray-600  ">Google</span>
            </button>
          </div>

          {/* divider */}
          <div className="divider mt-10">or</div>

          <form onSubmit={onSubmit} className=" mt-5 w-full flex flex-col gap-5  ">
            <div className=" flex flex-col gap-1 w-full ">
              <span className="text-gray-600 font-semibold">Full Name</span>
              <label className=" flex items-center ">
                <p
                  className={` ${
                    errors?.field === "name"
                      ? "border-red-500"
                      : ""
                  }   px-3 py-2   border border-gray-200 rounded-md border-r-0 rounded-r-none `}
                >
                  <LuUser className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  className={` ${
                    errors?.field === "name" ? "border-red-500" : ""
                  }  w-full  py-2 text-gray-600  focus:bg-transparent border border-l-0 rounded-l-none  border-gray-200 rounded-md focus:outline-none bg-transparent `}
                  type="text"
                />
              </label>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <span className="text-gray-600 font-semibold">Email address</span>
              <label className=" flex items-center ">
                <p className={` ${
                    errors?.field === "email"
                      ? "border-red-500"
                      : ""
                  } px-3 py-2  border text-gray-600 border-gray-200 rounded-md border-r-0 rounded-r-none `}>
                  <MdOutlineMailOutline className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={` ${
                    errors?.field === "email"
                      ? "border-red-500"
                      : ""
                  } w-full focus:bg-transparent py-2 border border-l-0 rounded-l-none text-gray-600 border-gray-200 rounded-md focus:outline-none bg-transparent `}
                  type="email"
                />
              </label>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <span className="text-gray-600 font-semibold">Password</span>
              <label className=" flex items-center ">
                <p className={` ${
                    errors?.field === "password"
                      ? "border-red-500"
                      : ""
                  } px-3 py-2  border border-gray-200 rounded-md border-r-0 rounded-r-none `}>
                  <MdOutlineWifiPassword className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className={` ${
                    errors?.field === "password"
                      ? "border-red-500"
                      : ""
                  } w-full text-gray-600 focus:bg-transparent py-2 border border-l-0 rounded-l-none border-gray-200 rounded-md focus:outline-none bg-transparent `}
                  type="password"
                />
              </label>
            </div>

            <button className="btn btn-accent text-white ">Sign Up</button>
          </form>

          {/* redirect to login page */}
          <div className="flex items-center gap-2 mt-5">
            <p className="text-gray-600 text-xl ">
              Already you have an account.
            </p>
            <a
              href="/login"
              className="text-green-500 text-xl hover:underlinel"
            >
              LogIn
            </a>
          </div>
        </div>
      </div>

      <div className=" hidden lg:block w-full h-full ">
        <Image
          className=" w-full h-full object-cover "
          src={doctor}
          alt="doctor"
        />
      </div>

      {/* toastify container */}
      <ToastContainer />
    </div>
  );
}
