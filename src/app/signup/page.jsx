"use client";

import { LuUser } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import doctor from "../../../public/login.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import axiosPublic from "@/Hooks/useAxiosPublic";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleSignUp from "@/components/signup/GoogleSignUp";

export default function SignUp() {
  const { userRegisterHandle, googleLogIn,} = useAuth();
  const [profession, setProfession] = useState("");
  const [isProffessionChange, setIsProfessionChange] = useState(false);
  const path = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSigning, setIsSigning] = useState(false);
  const router = useRouter();

  // sign up with google
  const [userEmail, setUserEmail] = useState("");
  const googleSignUp = async () => {
    try {
      const res = await googleLogIn();
      if (res.user) {
        document.getElementById("my_modal_5").showModal();
        setUserEmail(res.user.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // user registation handle
  async function UserRegistation(userName, email=userEmail, profession) {
  
    
    document.getElementById("my_modal_5").close();
    document.getElementById("my_modal_4").showModal();

    const res = await axiosPublic.post("/users", {
      userName,
      email,
      profession,
    });

    if (res.data.saveUser) {
  
      const pro = res.data.saveUser.profession;
      if (pro === "Patient") {
        router.push("/patient-form-page");
      } else {
        router.push("/Dashboard/doctor-dashboard");
      }

      setIsSigning(false);
    }
  }

  // form handle
  const onSubmit = async (data) => {
    const { email, password, userName } = data;
    setIsSigning(true);
    document.getElementById("my_modal_4").showModal();

    try {
      const userRegisterRes = await userRegisterHandle(email, password);
      if (userRegisterRes.user.email) {
        UserRegistation(userName, email, profession);
        reset();
      }
    } catch (error) {
      document.getElementById("my_modal_4").close();
      toast(error.code);
    }
  };

  // path change handle loading
  useEffect(() => {
    document.getElementById("my_modal_4").close();
  }, [path]);

  return (
    <div className=" w-full h-screen bg-white flex justify-between ">
      <div className=" lg:w-[50%] sm:w-[90%] w-full h-full p-10 mb-10 ">
        <div>
          <h1 className="text-4xl font-bold "> CareLife</h1>
        </div>

        {/* form section */}
        <div className=" w-full flex flex-col gap-22 mt-5 ">
          {/* social login section */}
          <div>
            <p className=" text-xl font-semibold text-black mt-2 ">
              Sign Up with social
            </p>
            <button
              onClick={googleSignUp}
              className=" flex items-center text-xl text-gray-600 justify-center hover:text-white hover:bg-cyan-500 hover:border-none transition-all duration-200 active:bg-cyan-400 active:scale-95 gap-5 mt-3 px-4 py-[10px] font-semibold border border-gray-200 rounded-md w-full "
            >
              <FaGoogle className=" text-xl " />
              Google
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
            className=" w-full flex flex-col gap-5 mt-5  "
          >
            <div className=" flex flex-col gap-1 w-full ">
              <span className="text-gray-600">Full Name</span>
              <label className=" flex items-center ">
                <p className=" px-3 py-2   border border-gray-200 rounded-md border-r-0 rounded-r-none ">
                  <LuUser className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setInputName(e.target.value)}
                  className=" w-full  py-2 text-gray-600 focus:bg-transparent border border-l-0 rounded-l-none  border-gray-200 rounded-md focus:outline-none bg-transparent "
                  type="text"
                  placeholder="Ex: Milon Miah"
                  {...register("userName", {
                    required: true,
                    message: "user name is required!",
                  })}
                />
              </label>
              {errors.userName && (
                <p className="text-red-500">{errors.userName.message}</p>
              )}
            </div>

            {/* profession */}
            <div className="flex flex-col gap-1 relative w-full ">
              <span className="text-gray-600">Profession</span>

              <span className=" absolute top-10 z-10 px-3  ">
                <FaUserDoctor className="text-gray-300 text-xl" />
              </span>
              <div className=" w-full dropdown">
                <input
                  onClick={() => setIsProfessionChange(false)}
                  tabIndex={0}
                  role="button"
                  value={profession.length > 0 ? `${profession}` : ""}
                  readOnly
                  placeholder="Ex: Doctor"
                  className="  border w-full border-gray-200 px-12 py-2 rounded-md "
                />

                <ul
                  tabIndex={0}
                  className={`${
                    isProffessionChange ? " hidden  " : ""
                  } w-full dropdown-content menu bg-base-100 rounded-md z-[1] shadow p-2 `}
                >
                  <li
                    onClick={() => {
                      setProfession("Patient");
                      setIsProfessionChange(true);
                    }}
                  >
                    <a>Patient</a>
                  </li>
                  <li
                    onClick={() => {
                      setProfession("Doctor");
                      setIsProfessionChange(true);
                    }}
                  >
                    <a>Doctor</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" w-full flex flex-col gap-1">
              <span className="text-gray-600">Email address</span>
              <label className=" flex items-center ">
                <p className=" px-3 py-2  border text-gray-600 border-gray-200 rounded-md border-r-0 rounded-r-none ">
                  <MdOutlineMailOutline className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setInputName(e.target.value)}
                  className=" w-full focus:bg-transparent py-2 border border-l-0 rounded-l-none text-gray-600 border-gray-200 rounded-md focus:outline-none bg-transparent "
                  type="email"
                  placeholder="Ex: milon.miah@qq.com"
                  {...register("email", {
                    required: true,
                    message: "email is required!",
                  })}
                />
              </label>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className=" w-full flex flex-col gap-1">
              <span className="text-gray-600">Password</span>
              <label className=" flex items-center ">
                <p className=" px-3 py-2  border border-gray-200 rounded-md border-r-0 rounded-r-none ">
                  <MdOutlineWifiPassword className="text-gray-300 text-2xl" />
                </p>
                <input
                  onChange={(e) => setInputName(e.target.value)}
                  className=" w-full text-gray-600 focus:bg-transparent py-2 border border-l-0 rounded-l-none border-gray-200 rounded-md focus:outline-none bg-transparent "
                  type="password"
                  placeholder="Ex: xxxx"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      message:
                        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                />
              </label>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <button className="btn btn-accent text-white ">Sign Up</button>
          </form>
        </div>

        {/* redirect section */}
        <div className="flex items-center gap-2 mt-5 ">
          <p>Already have an account.</p>
          <a className="text-blue-500 hover:underline" href="/login">
            LogIn
          </a>
        </div>
      </div>

      <div className=" hidden sm:block w-full h-screen ">
        <Image
          className=" w-full h-full object-cover "
          src={doctor}
          alt="doctor"
        />
      </div>

      {/* signing modal  */}
      <div>
        <dialog id="my_modal_4" className="modal">
          <div className=" p-5 bg-accent flex flex-col items-center justify-center text-white gap-3  ">
            <h3 className=" text-white  ">
              Please wait, logging process is in progress...
            </h3>
            <p className=" w-full text-center text-white ">
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>{" "}
            </p>
          </div>
        </dialog>
      </div>

      {/* sign up modal opening */}
      <div>
        <dialog id="my_modal_5" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <GoogleSignUp UserRegistation={UserRegistation} />
          </div>
        </dialog>
      </div>

      {/* react toastify container */}
      <ToastContainer />
    </div>
  );
}
