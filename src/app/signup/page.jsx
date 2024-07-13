"use client";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

export default function LogIn() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userRegisterHandle } = useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { email, password, userName, profession, gender, DateOfBirth } = data;

    // console.log(data);

    // user create throught firebase
    userRegisterHandle(email, password)
      .then(async (res) => {
        console.log(res);

        try {
          const res = await axiosSecureApi.post("/users/signup", {
            userName,
            email,
            profession,
            gender,
            DateOfBirth,
            isAdmin: false,
          });
          console.log(res.data);
          router.push("/");
        } catch (error) {
          console.log("user does not set to the", error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // sign up validation errors handleing
  useEffect(() => {}, [errors]);

  return (
    <div className=" bg-gradient-to-r from-sky-300 to-emerald-300 w-full h-full">
      <div className="flex flex-col lg:flex-row my-auto  w-[95%] h-[95vh] ">
        <div className=" lg:w-[70vw] hidden md:flex items-center justify-center ">
          <div className=" lg:h-[500px] lg:w-[500px] rounded-full ">
            <img
              className="w-ful h-full rounded-full object-cover "
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg"
              alt=""
            />
          </div>
        </div>

        {/* divider */}
        <div className="h-full hidden lg:block w-[700px] rounded-full border border-white lg:border-l-0 lg:border-t-0 lg:border-b-0 mr-6 "></div>

        <div className=" sm:mr-36 lg:mr-0 border border-white flex -mr-[2px] lg:-m-0 items-center justify-center max-h-svh mx-auto lg:border-none sm:rounded-3xl rounded-xl my-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-4 items-center justify-center w-full px-4 py-7  h-full"
          >
            <h1 className="text-4xl font-bold text-white mb-7 ">Sign Up</h1>

            {/* divider field */}
            <div className="w-full h-20 rounded-full bg-transparent border border-white border-b-0 border-r-0 border-l-0 "></div>

            {/* sign info */}
            <div className="w-full -mt-20  flex flex-col gap-5 items-center justify-center px-10 ">
              <label className="flex flex-col gap-1">
                <span className="font-sans text-white text-xl ">Full Name</span>
                <input
                  className="px-3 py-1 rounded-3xl placeholder:text-base-50 text-white border-white bg-transparent border focus:outline-none "
                  type="text"
                  placeholder="Enter your full name"
                  {...register("userName", {
                    required: true,
                    message: "name is required!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address!!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </label>

              {/* profession filed */}
              <label className="flex w-full flex-col gap-3 ">
                <span className="font-sans text-white text-xl ">
                  {" "}
                  What's your profession?
                </span>
                <select
                  {...register("profession", {
                    required: "profession is required",
                  })}
                  className=" px-4 py-1 rounded-[35px] border border-white bg-transparent text-white font-[500] focus:outline-none w-full"
                  defaultValue=""
                >
                  <option className="  text-white " value="" disabled>
                    Select your profession
                  </option>
                  <option className=" bg-sky-300 px-3 py-2 " value="male">
                    Doctor
                  </option>
                  <option className=" bg-sky-300 px-3 py-2 " value="female">
                    Patient
                  </option>
                </select>
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-sans text-white text-xl ">Email</span>
                <input
                  className="px-3 py-1 rounded-3xl placeholder:text-base-50 text-white border-white bg-transparent border focus:outline-none "
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: true,
                    message: "Email is required!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address!!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </label>
            </div>

            {/* password field */}
            <label className="flex relative flex-col gap-1">
              <span className="font-sans text-white text-xl ">Password</span>
              <input
                className="px-3 py-1 rounded-3xl placeholder:text-base-50 text-white border-white bg-transparent border focus:outline-none "
                type={`${showPass ? "text" : "password"}`}
                placeholder="Enter a strong password"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="text-xl cursor-pointer absolute top-[40px] text-white right-3 "
              >
                {showPass ? (
                  <>
                    <IoEye />
                  </>
                ) : (
                  <>
                    <IoMdEyeOff />
                  </>
                )}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </label>

            {/* sing up btn */}
            <button className="px-3 py-1 rounded-3xl w-[80%] hover:bg-opacity-50 transition-all duration-700 bg-black bg-opacity-65 text-white ">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="hidden">
              
              <label className="flex relative flex-col gap-1">
                <span className="font-sans text-gray-600 ">Password</span>
                <input
                  className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Enter a strong password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <span
                  onClick={() => setShowPass(!showPass)}
                  className="text-2xl cursor-pointer absolute top-11 right-3 "
                >
                  {showPass ? (
                    <>
                      <IoEye />
                    </>
                  ) : (
                    <>
                      <IoMdEyeOff />
                    </>
                  )}
                </span>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </label>
</div> */
}

{
  /* <div className="hidden">
              <label className="flex flex-col gap-1">
                <span className="font-sans text-gray-600 ">Full Name</span>
                <input
                  className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                  type="text"
                  {...register("userName", {
                    required: "name filed is requird",
                  })}
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-sans text-gray-600">Gender</span>
                <select
                  {...register("gender", { required: "Gender is required" })}
                  className="select select-accent focus:outline-none w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-sans text-gray-600 ">Date of birth</span>
                <input
                  className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                  type="date"
                  {...register("DateOfBirth", {
                    required: "date of birth is required",
                  })}
                />
              </label>
</div> */
}
