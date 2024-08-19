"use client";

import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import img from "../../../public/bearded-doctor-listening-patient.jpg";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const { userLogIn } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  // user login handle

  const onSubmit = async (data) => {
    document.getElementById("my_modal_1").showModal();
    const { email, password } = data;
    try {
      const res = await userLogIn(email, password);
      if (res.user) {
        router.push("/Dashboard");
        document.getElementById("my_modal_1").close();
        reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" flex justify-between gap-6 ">
      <div className="p-10 w-full lg:w-[40%] sm:w-[70%] mx-auto ">
        {/* header title */}
        <div>
          <h1 className="text-4xl font-bold "> CareLife</h1>
        </div>

        <div className=" mt-32 ">
          <h1 className="text-2xl font-bold text-slate-700">
            LogIn with email and password
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
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
                {...register("email", { required: true })}
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
                type={showPass ? "text" : "password"}
                placeholder="password: xxxxxx"
                {...register("password", { required: true })}
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

      <div className=" hidden lg:block flex-1 h-screen ">
        <Image src={img} className="w-full h-full object-cover" alt="login" />
      </div>

      {/* logging modal section */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-accent flex flex-col items-center justify-center gap-5  ">
            <h3 className="font-bold text-lg text-white  ">
              Please wait, logging process is in progress...
            </h3>
            <p>
              <span className="loading loading-spinner text-secondary"></span>
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
}
