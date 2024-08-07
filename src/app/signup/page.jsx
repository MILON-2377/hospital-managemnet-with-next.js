"use client";

import { LuUser } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import doctor from "../../../public/doctor2.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";

export default function SignUp() {

  const {userRegisterHandle} = useAuth();
  const { register, handleSubmit, reset } = useForm();


  // form handle
  const onSubmit = (data) => {
    const {email, password} = data;
    userRegisterHandle(email,password)
    .then(res => {
      console.log(res.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  } 

  return (
    <div className=" w-full h-screen flex justify-between ">
      <div className=" lg:w-[40%] sm:w-[90%] w-full bg-slate-800 h-full ">
        {/* form section */}
        <div className=" w-full flex flex-col gap-22 p-10 mt-20 ">
          <h1 className=" text-2xl text-gray-200 ">Welcom to CareLife</h1>

          {/* social login section */}
          <div className="mt-10">
            <p className=" text-xl font-semibold text-gray-300 mt-2 ">
              Sign Up with social 
            </p>
            <button className=" flex items-center justify-center hover:bg-cyan-500 hover:border-none transition-all duration-200 active:bg-cyan-400 active:scale-95 gap-5 mt-3 px-4 py-3 font-semibold border border-gray-200 text-gray-200 rounded-md w-full ">
              <FaGoogle className=" text-xl " />
              <span className=" text-xl ">Google</span>
            </button>
          </div>

          {/* divider */}
          <div className=" flex items-center gap-2 mt-5 ">
            <div className="w-full h-[1px] bg-gray-200 "></div>
            <span className="text-xl text-gray-200  ">or</span>
            <div className="w-full h-[1px] bg-gray-200 "></div>
          </div>

          <form 
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full flex flex-col gap-5 mt-5  ">
            <div className=" flex flex-col gap-1 w-full ">
              <span className="text-gray-400">Full Name</span>
              <label className=" flex items-center ">
                <p className=" px-3 py-2  border border-gray-200 rounded-md border-r-0 rounded-r-none ">
                  <LuUser className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setInputName(e.target.value)}
                  className=" w-full py-2 focus:bg-transparent border border-l-0 rounded-l-none text-gray-300 border-gray-200 rounded-md focus:outline-none bg-transparent "
                  type="text"
                  {...register("fullName", { required: true })}
                />
              </label>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <span className="text-gray-400">Email address</span>
              <label className=" flex items-center ">
                <p className=" px-3 py-2  border border-gray-200 rounded-md border-r-0 rounded-r-none ">
                  <MdOutlineMailOutline className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setInputName(e.target.value)}
                  className=" w-full focus:bg-transparent py-2 border border-l-0 rounded-l-none text-gray-300 border-gray-200 rounded-md focus:outline-none bg-transparent "
                  type="email"
                  {...register("email", {required:true})}
                />
              </label>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <span className="text-gray-400">Password</span>
              <label className=" flex items-center ">
                <p className=" px-3 py-2  border border-gray-200 rounded-md border-r-0 rounded-r-none ">
                  <MdOutlineWifiPassword className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setInputName(e.target.value)}
                  className=" w-full focus:bg-transparent py-2 border border-l-0 rounded-l-none text-gray-300 border-gray-200 rounded-md focus:outline-none bg-transparent "
                  type="password"
                  {...register("password", {required:true})}
                />
              </label>
            </div>

            <button className="btn btn-accent text-white ">Sign Up</button>
          </form>
        </div>
      </div>

      <div className=" hidden sm:block w-full h-full ">
        <Image
          className=" w-full h-full object-cover "
          src={doctor}
          alt="doctor"
         
        />
      </div>
    </div>
  );
}
